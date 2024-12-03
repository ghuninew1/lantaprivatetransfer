import { useCallback, useEffect, useRef } from "react";

export function useTimeout(cb, ms=1000) {
    const id = useRef(null);
    const onTimeout = useCallback(() => {
        cb();
        id.current = null;
    }, [cb]);

    const handleClearTimeout = useCallback(() => {
        window.clearTimeout(id.current);
    }, []);

    useEffect(() => {
        id.current = window.setTimeout(onTimeout, ms);

        return handleClearTimeout;
    }, [ms, handleClearTimeout, onTimeout]);

    return handleClearTimeout;
}
