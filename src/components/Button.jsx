import { cx } from "#utils/utils";
import { createElement } from "react";

export default function Button({
    children,
    type = "button",
    className = "",
    full = false,
    loading = false,
    disabled = false,
    text = "",
    ...props
}) {
    const classNames = cx(
        "btn transition-all duration-200 hover:bg-orange-500 hover:font-bold",
        disabled && "cursor-not-allowed opacity-50",
        full && "w-full",
        className ? className : "btn-primary",
    );

    return createElement(
        props.href ? "a" : "button",
        {
            ...props,
            type: type || "button",
            className: classNames,
        },
        loading && <span className="loading loading-spinner text-white" />,
        text || children,
    );
}
