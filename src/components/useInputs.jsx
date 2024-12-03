import { useInput } from "#hook/useInput";
import { cx } from "#utils/utils";

export function useInputs(name = "input", defaultValue = "", props = {}) {
    const valueInput = useInput(defaultValue);
    return {
        value: valueInput.value,
        input: (
            <input
                {...props}
                type={props.type || "text"}
                name={name}
                value={
                    typeof valueInput.value === "string" || typeof valueInput.value === "number"
                        ? valueInput.value
                        : undefined
                }
                checked={typeof valueInput.value === "boolean" ? valueInput.value : undefined}
                className={cx(
                    "w-full rounded-md border-0 bg-slate-700/40 px-5 py-2.5 shadow-inner outline-0 focus:bg-transparent focus:ring-2 focus:ring-green-500/50 focus:ring-offset-1 focus:ring-offset-green-300 focus:placeholder:opacity-40",
                    props.className,
                )}
                placeholder={props.placeholder ? props.placeholder : name}
                {...valueInput}
            />
        ),
    };
}
