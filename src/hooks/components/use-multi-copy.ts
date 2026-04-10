import { useEffect, useRef, useState } from "react";

export function useMultiCopy(timeout = 1500) {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setCopied((prev) => ({ ...prev, [key]: true }));

      timeoutRef.current = setTimeout(() => {
        setCopied((prev) => ({ ...prev, [key]: false }));
      }, timeout);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return { copied, copy };
}
