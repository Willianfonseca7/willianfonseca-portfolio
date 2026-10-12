import { useCallback, useState } from "react";
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
  const open = useCallback((cert: Certificate) => {
    setSelected(cert);
    setActiveTab(0);
  }, []);
  const close = useCallback(() => setSelected(null), []);
  return { selected, activeTab, setActiveTab, open, close };
}
