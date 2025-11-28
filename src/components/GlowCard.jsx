// src/components/GlowCard.jsx
// Reusable glowing card wrapper used across the project.
// Adds a blue/purple gradient glow, border and shadow on hover.

export default function GlowCard({ children, className = "" }) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_40px_rgba(15,23,42,0.9)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_80px_rgba(56,189,248,0.7)] " +
        className
      }
    >
      {/* Gradient glow overlay (sits above the background but below the content) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-px rounded-3xl
          bg-gradient-to-br from-cyan-500/40 via-sky-500/25 to-indigo-600/45
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* Main content rendered above the glow */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
