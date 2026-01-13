import clsx from "clsx";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
  target,
  rel,
}) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80";
  const variants = {
    primary:
      "bg-sky-400/90 text-slate-950 hover:bg-sky-300 shadow-[0_10px_30px_-12px_rgba(56,189,248,0.8)]",
    secondary:
      "bg-white/5 text-slate-100 hover:bg-white/10 shadow-[0_10px_24px_-14px_rgba(14,116,144,0.7)]",
    ghost:
      "bg-transparent text-slate-200 hover:text-white hover:bg-white/5",
  };

  const classes = clsx(
    baseClass,
    variants[variant],
    disabled && "pointer-events-none opacity-50",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
