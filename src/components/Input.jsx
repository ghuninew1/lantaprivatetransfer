import { cx } from "#utils/utils";
import { forwardRef } from "react";

export default forwardRef(function Input({ className = "", type = "", name = "", placeholder = "", ...props }, ref) {
  return (
    <input
      {...props}
      ref={ref}
      type={type || "text"}
      name={name}
      className={cx(
        "w-full rounded-md border-0 bg-slate-700/40 px-5 py-2.5 text-sm shadow-inner outline-0 focus:bg-transparent focus:ring-2 focus:ring-green-500/50 focus:ring-offset-1 focus:ring-offset-green-300 focus:placeholder:opacity-40",
        className
      )}
      placeholder={placeholder}
    />
  )
});
