import { Link } from "react-router-dom";
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
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  const classes = clsx(
    "btn",
    variants[variant],
    disabled && "pointer-events-none opacity-50",
    className
  );

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    const isHash = href.startsWith("#");

    if (!isExternal && !isHash) {
      return (
        <Link to={href} className={classes} aria-disabled={disabled}>
          {children}
        </Link>
      );
    }

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
