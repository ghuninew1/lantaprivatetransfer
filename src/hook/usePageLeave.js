import { useCallback, useEffect } from "react";

export function usePageLeave(cb) {
    const onLeave = useCallback(
        (event) => {
            const from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === "HTML") {
                cb();
            }
        },
        [cb],
    );

    useEffect(() => {
        document.addEventListener("mouseout", onLeave);

        return () => {
            document.removeEventListener("mouseout", onLeave);
        };
    }, [onLeave]);
}
