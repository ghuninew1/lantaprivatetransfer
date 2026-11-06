import { useState, useRef, useCallback } from "react"

export function useObserver(options = {}) {
  const { threshold = 0.0, root = null, rootMargin = "0px" } = options;
  const [entry, setEntry] = useState(false);
  const previousObserver = useRef(null);

  const customRef = useCallback((node) => {
      if (previousObserver.current) {
        previousObserver.current.disconnect();
        previousObserver.current = null;
      }

      if (node?.nodeType === Node.ELEMENT_NODE) {
        const observer = new IntersectionObserver(
          ([entrys]) => {
            setEntry(entrys.isIntersecting);
          },{ threshold, root, rootMargin }
        );

        observer.observe(node);
        previousObserver.current = observer;
      }

      return () => {
        previousObserver.current && previousObserver.current.disconnect();
      };
    },
    [threshold, root, rootMargin]
  );

  return [customRef, entry];
}

export default useObserver;
