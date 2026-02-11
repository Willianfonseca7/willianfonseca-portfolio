import Card from "./Card.jsx";

export default function FeatureCard({ title, description }) {
  return (
    <Card className="min-h-[170px]">
      <div className="space-y-3">
        <h3 className="heading text-lg">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </Card>
  );
}
