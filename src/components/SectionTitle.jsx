export default function SectionTitle({ children, subtitle }) {
  return (
    <header className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">{children}</h2>
      {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
    </header>
  );
}
