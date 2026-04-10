import { useRef, useEffect } from "react";
import type { RefObject } from "react";

export function useIntersection<T extends HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [callback, options]);

  return ref;
}
