interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({ children, className = "", interactive = true }: CardProps) {
  return (
    <div
      className={`glass-card ${interactive ? "card-interactive" : ""} relative overflow-hidden p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
