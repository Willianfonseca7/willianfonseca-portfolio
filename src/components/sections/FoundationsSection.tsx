import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import portrait from "../../assets/willian-portrait-black.jpg";
export default function FoundationsSection() {
  const { content } = useLanguage();
  return (
    <section className="section-space">
      <Container>
        <div className="home-profile">
          <figure className="portrait-composition">
            <div className="portrait-frame">
              <img src={portrait} alt="Willian Santos Fonseca" width="1024" height="1536" loading="lazy" decoding="async" />
            </div>
            <figcaption><span>Willian Fonseca</span><span>Düsseldorf, DE</span></figcaption>
          </figure>
          <div>
            <p className="eyebrow">{content.home.aboutPreviewTitle} / Düsseldorf</p>
            <h2>{content.meta.role}</h2>
            <p className="hero-stack">{content.hero.subtitle}</p>
            <p className="text-muted">{content.home.aboutPreviewSubtitle}</p>
            <div className="availability"><span className="availability-dot" aria-hidden="true" /><span>{content.meta.tagline}<small>{content.hero.note}</small></span></div>
            <Button href="/about" variant="ghost">{content.home.aboutPreviewTitle} →</Button>
          </div>
        </div>
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
            <h3>{content.about.languagesTitle}</h3>
            <ul className="certificate-list">
              {content.about.languages.map((language) => <li key={language}>{language}</li>)}
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
