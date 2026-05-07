import Card from "./Card";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="min-h-[170px]">
      <div className="space-y-3">
        <h3 className="heading text-lg">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </Card>
  );
}
