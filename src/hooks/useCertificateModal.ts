import { useState, useEffect } from "react";

export interface CertImage {
  url: string;
  label: string;
}

export interface Certificate {
  title: string;
  status: string;
  description: string;
  imageUrl?: string;
  images?: CertImage[];
}

export function useCertificateModal() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const open = (cert: Certificate) => {
    setSelected(cert);
    setActiveTab(0);
  };

  const close = () => setSelected(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return { selected, activeTab, setActiveTab, open, close };
}
