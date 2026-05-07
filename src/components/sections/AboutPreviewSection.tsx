import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

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
              <Card key={sentence} className="text-sm text-muted">
                {sentence}
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
