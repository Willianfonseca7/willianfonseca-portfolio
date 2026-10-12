import { useCallback, useEffect, useState } from "react";
export function useProjectImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageCount, setImageCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const open = useCallback((count: number, initialIndex = 0) => {
    if (!count) return;
    setImageCount(count);
    setActiveIndex(Math.max(0, Math.min(initialIndex, count - 1)));
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(0);
    setImageCount(0);
  }, []);
  const goToPrevious = useCallback(() => {
    if (imageCount > 1)
      setActiveIndex((current) => (current + imageCount - 1) % imageCount);
  }, [imageCount]);
  const goToNext = useCallback(() => {
    if (imageCount > 1) setActiveIndex((current) => (current + 1) % imageCount);
  }, [imageCount]);
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, goToPrevious, goToNext]);
  return {
    isOpen,
    activeIndex,
    setActiveIndex,
    open,
    close,
    hasMultiple: imageCount > 1,
    goToPrevious,
    goToNext,
  };
}
