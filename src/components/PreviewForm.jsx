import { useState } from "react";
import { cx } from "#utils/utils";

const controlClass = "min-w-0 w-full rounded border border-gray-300 bg-white px-3 py-2 text-base disabled:bg-slate-100 read-only:bg-slate-100";

export function FormField({ field, defaultValue }) {
    const { name, label, type = "text", options, prompt, required, readOnly, disabled, placeholder, autoComplete } = field;
    const common = { name, required, disabled, defaultValue };

    return (
        <label className={cx("grid min-w-0 content-start gap-1 text-sm font-semibold", type === "textarea" && "sm:col-span-2")}>
            <span>{label}{required ? " *" : ""}</span>
            {options ? (
                <select className="min-w-0 w-full rounded border border-gray-300 bg-white px-3 py-2 text-base" {...common}>
                    {prompt ? <option value="">{prompt}</option> : null}
                    {options.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
            ) : type === "textarea" ? (
                <textarea className={controlClass} rows={4} placeholder={placeholder} {...common} />
            ) : (
                <input className={controlClass} type={type} placeholder={placeholder} readOnly={readOnly} autoComplete={autoComplete} {...common} />
            )}
        </label>
    );
}

export default function PreviewForm({ children, label, status }) {
    const [checked, setChecked] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setChecked(true);
    }

    return (
        <form method="post" onSubmit={handleSubmit} onChange={() => setChecked(false)} className="space-y-5">
            <p className="rounded bg-amber-50 p-3 text-sm">Preview only. Use sample details to check the form. Entries stay on this page.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
            <button type="submit" className="home-button">{label}</button>
            <p role="status">{checked ? status : ""}</p>
        </form>
    );
}
