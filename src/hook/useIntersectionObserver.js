import { useState, useEffect } from "react";

export function useIntersectionObserver(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const div = ref.current;
        if (div?.nodeType !== Node.ELEMENT_NODE) return;
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.0,
            }
        );
        observer.observe(div);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

export default useIntersectionObserver;