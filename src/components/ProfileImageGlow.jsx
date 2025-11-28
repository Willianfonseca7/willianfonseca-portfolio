// src/components/GlowCard.jsx
// Reusable glowing card wrapper used across the project.
// Adds gradient, border glow and smooth hover effects.

export default function GlowCard({ children, className = "" }) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-[0_0_40px_rgba(15,23,42,0.8)] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_80px_rgba(56,189,248,0.55)] " +
        className
      }
    >
      {/* Gradient glow overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 rounded-3xl
          bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/30
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* Main card content (visible above glow) */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
