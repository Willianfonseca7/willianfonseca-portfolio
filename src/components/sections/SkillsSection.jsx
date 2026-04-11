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
              <h3 className="heading text-lg">{skills.conceptsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </Card>
            <Card className="space-y-4">
              <h3 className="heading text-lg">{skills.learningTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.learning.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
            <Card className="space-y-4">
              <h3 className="heading text-lg">{skills.statusTitle}</h3>
              <div className="space-y-3">
                <p className="text-sm text-muted">{skills.statusSummary}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.statusTags.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            </Card>

            <Card className="space-y-5">
              <h3 className="heading text-lg">{skills.certificationsTitle}</h3>
              <div className="grid gap-4">
                {skills.certifications.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[var(--radius-card)] border border-white/10 bg-white/5 p-4"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="heading text-base">{item.title}</h4>
                        <span className="rounded-full bg-sky-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
