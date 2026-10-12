import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
export default function FoundationsSection() {
  const { content } = useLanguage();
  return (
    <section className="section-space">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">04 / Stack</p>
          <h2>{content.skills.title}</h2>
          <p className="text-muted">{content.skills.subtitle}</p>
        </div>
        <div className="skills-grid">
          {content.skills.groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="education-summary">
          <div>
            <p className="eyebrow">05 / {content.about.ihkTitle}</p>
            <h2>{content.home.educationTitle}</h2>
            <p className="text-muted">{content.home.educationBody}</p>
          </div>
          <div>
            <ul className="certificate-list">
              {content.about.ihkCertifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
            <Button href="/skills#zertifikate" variant="secondary">
              {content.home.certLink} →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
