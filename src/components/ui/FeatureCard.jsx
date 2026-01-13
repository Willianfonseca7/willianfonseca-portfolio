import Card from "./Card.jsx";

export default function FeatureCard({ title, description }) {
  return (
    <Card className="min-h-[170px]">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        <p className="text-sm text-slate-300/90">{description}</p>
      </div>
    </Card>
  );
}
