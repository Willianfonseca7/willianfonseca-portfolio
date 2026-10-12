interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  level?: 1 | 2;
}
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  level = 2,
}: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header
      className={`section-heading ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className={level === 1 ? "page-title" : ""}>{title}</Heading>
      {subtitle && <p className="text-muted max-w-3xl">{subtitle}</p>}
    </header>
  );
}
