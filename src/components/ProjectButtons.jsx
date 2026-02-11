// src/components/ProjectButtons.jsx
// Reusable button component for project actions (Demo, Code, Play, etc.)

export default function ProjectButtons({
  playUrl,
  codeUrl,
  playLabel = "Demo",
  codeLabel = "Code",
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      
      {/* Primary button (Play / Demo) */}
      <a
        href={playUrl}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex items-center gap-2 rounded-full 
          bg-gradient-to-r from-indigo-500 to-sky-400 
          px-4 py-1.5 text-xs font-medium text-primary 
          shadow-lg shadow-indigo-500/30 
          transition-all duration-200 
          hover:brightness-110 hover:shadow-indigo-400/40 
          focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-sky-400 
          focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
        "
      >
        {playLabel}
      </a>

      {/* Secondary button (Code) */}
      <a
        href={codeUrl}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex items-center gap-2 rounded-full 
          border border-slate-600 px-4 py-1.5 
          text-xs font-medium text-primary 
          transition-all duration-200 
          hover:border-indigo-400 hover:text-indigo-200 
          focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-indigo-400 
          focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
        "
      >
        {codeLabel}
      </a>

    </div>
  );
}

