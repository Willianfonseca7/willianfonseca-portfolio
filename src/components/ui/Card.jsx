export default function Card({ children, className = "" }) {
  return (
    <div
      className={`glass-card relative overflow-hidden rounded-3xl p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
