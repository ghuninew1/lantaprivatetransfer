import { useState, useCallback, useMemo } from "react";

export function useInput(defaultValue = "") {
    const [value, setValue] = useState(defaultValue);

    const onChange = useCallback(
        (e) => {
            setValue(defaultValue.constructor(typeof defaultValue === "boolean" ? e.target.checked : e.target.value));
        },
        [defaultValue]
    );

    return useMemo(() => ({ value, onChange }), [value, onChange]);
}

export default useInput;
