interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="tag-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
      {label}
    </span>
  );
}
