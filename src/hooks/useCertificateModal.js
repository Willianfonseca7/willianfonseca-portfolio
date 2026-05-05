import { useState, useEffect } from "react";

export function useCertificateModal() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const open = (cert) => {
    setSelected(cert);
    setActiveTab(0);
  };

  const close = () => setSelected(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return { selected, activeTab, setActiveTab, open, close };
}
