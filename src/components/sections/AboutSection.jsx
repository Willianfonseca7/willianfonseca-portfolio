import { useLanguage } from "../../hooks/useLanguage.jsx";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import FeatureCard from "../ui/FeatureCard.jsx";
import Tag from "../ui/Tag.jsx";

export default function AboutSection() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow={about.eyebrow}
            title={about.title}
            subtitle={about.description}
          />

          <div className="space-y-4">
            <h3 className="heading text-lg">{about.werdegang.title}</h3>
            <div className="space-y-3">
              {about.werdegang.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {about.workStyle.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="heading text-lg">{about.ihkTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {about.ihkCertifications.map((cert) => (
                <Tag key={cert} label={cert} />
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h3 className="heading text-lg">{about.valuesTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {about.values.map((value) => (
                  <Tag key={value} label={value} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="heading text-lg">{about.languagesTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {about.languages.map((language) => (
                  <Tag key={language} label={language} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
