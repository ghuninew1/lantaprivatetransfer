import { useCallback, useEffect } from "react";

export function useKeyPress(key=" ", cb=() => {}, options = {}) {
  const { event = "keydown", target = window ?? null, eventOptions } = options;

  const onListen = useCallback((target, event) => {
    const handler = (event) => {
      if (event.key === key) {
        cb(event);
      }
    };

    target.addEventListener(event, handler, eventOptions);

    return () => {
      target.removeEventListener(event, handler, eventOptions);
    };
  }, [key, cb, eventOptions]);

  useEffect(() => {
    return onListen(target, event);
  }, [target, event, onListen]);
}

export default useKeyPress;