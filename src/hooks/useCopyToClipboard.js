import { useCallback, useState } from "react";

export default function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      return true;
    } catch (error) {
      setCopied(false);
      return false;
    }
  }, []);

  return { copy, copied };
}
