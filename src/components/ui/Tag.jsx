export default function Tag({ label }) {
  return (
    <span className="tag-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-slate-200">
      {label}
    </span>
  );
}
