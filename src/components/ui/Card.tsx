interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}
export default function Card({ children, className = "" }: CardProps) {
  return <div className={`glass-card p-6 sm:p-7 ${className}`}>{children}</div>;
}
