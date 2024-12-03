import { useEffect, useRef, useCallback } from "react";

export function useInterval(cb=() => {}, ms=1000) {
    const id = useRef(null);
    const onInterval = useCallback(() => {
        cb();
    }, [cb]);

    const handleClearInterval = useCallback(() => {
        window.clearInterval(id.current);
    }, []);

    useEffect(() => {
        id.current = window.setInterval(onInterval, ms);
        return handleClearInterval;
    }, [ms, handleClearInterval, onInterval]);

    return handleClearInterval;
}

export function useIntervalWhen(cb=() => {}, { ms=1000, when=true, startImmediately=true }) {
    const id = useRef(null);
    const onTick = useCallback(() => {
        cb();
    }, [cb]);
    const immediatelyCalled = useRef(startImmediately === true ? false : null);

    const handleClearInterval = useCallback(() => {
        window.clearInterval(id.current);
        immediatelyCalled.current = false;
    }, []);

    useEffect(() => {
        if (when === true) {
            id.current = window.setInterval(onTick, ms);

            if (startImmediately === true && immediatelyCalled.current === false) {
                onTick();
                immediatelyCalled.current = true;
            }

            return handleClearInterval;
        }
    }, [ms, when, startImmediately, handleClearInterval, onTick]);

    return handleClearInterval;
}
