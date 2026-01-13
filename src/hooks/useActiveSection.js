import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
