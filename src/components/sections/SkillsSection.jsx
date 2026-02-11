import { useLanguage } from "../../hooks/useLanguage.jsx";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Tag from "../ui/Tag.jsx";

export default function SkillsSection() {
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow={skills.title}
            title={skills.title}
            subtitle={skills.subtitle}
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {skills.groups.map((group) => (
              <Card key={group.title} className="space-y-4">
                <h3 className="heading text-lg">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <Card className="space-y-4">
              <h3 className="heading text-lg">Konzepte</h3>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </Card>
            <Card className="space-y-4">
              <h3 className="heading text-lg">Aktuell am Lernen</h3>
              <div className="flex flex-wrap gap-2">
                {skills.learning.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
