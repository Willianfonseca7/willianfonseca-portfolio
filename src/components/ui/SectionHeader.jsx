export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const subtitleClass =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <header className={`space-y-3 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading text-3xl sm:text-4xl leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-sm sm:text-base text-muted max-w-2xl ${subtitleClass}`}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
