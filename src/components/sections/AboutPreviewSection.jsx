import { useLanguage } from "../../hooks/useLanguage.jsx";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Card from "../ui/Card.jsx";

export default function AboutPreviewSection() {
  const { content } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            eyebrow={content.about.title}
            title={content.home.aboutPreviewTitle}
            subtitle={content.home.aboutPreviewSubtitle}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {content.home.intro.map((sentence) => (
              <Card key={sentence} className="text-sm text-slate-300/90">
                {sentence}
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
