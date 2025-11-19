// src/components/ProjectButtons.jsx

export default function ProjectButtons({ playUrl, codeUrl }) {
  return (
    <div className="mt-2 flex flex-wrap gap-3">
      {/* Button 1 – Spielen */}
      <a
        href={playUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-4 py-1.5 text-sm font-medium text-slate-950 shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:brightness-110 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Spielen
      </a>

      {/* Button 2 – Code */}
      <a
        href={codeUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-1.5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-indigo-400 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Code
      </a>
    </div>
  );
}
