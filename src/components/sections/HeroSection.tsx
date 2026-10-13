import Button from "../ui/Button";
import Container from "../ui/Container";
import { useLanguage } from "../../hooks/useLanguage";
import portrait from "../../assets/willian-portrait-black.jpg";
export default function HeroSection() {
  const { content } = useLanguage();
  const { hero } = content;
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <p className="hero-name">Willian Santos Fonseca</p>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero-stack">
              {hero.subtitle} <span>· {content.skills.groups[2].title}</span>
            </p>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <Button href={hero.ctas.primary.href}>
                {hero.ctas.primary.label} <span aria-hidden="true">↓</span>
              </Button>
              <Button href={hero.ctas.secondary.href} variant="secondary">
                {hero.ctas.secondary.label}
              </Button>
            </div>
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              <span>
                {content.meta.tagline}
                <small>{hero.note}</small>
              </span>
            </div>
          </div>
          <figure className="portrait-composition">
            <div className="portrait-frame">
              <img
                src={portrait}
                alt="Willian Santos Fonseca"
                width="1024"
                height="1536"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span>Willian Fonseca</span>
              <span>Düsseldorf, DE</span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-bottom">
          <span>Frontend / Fullstack</span>
          <span>APIs · PostgreSQL · {content.skills.groups[2].title}</span>
          <span aria-hidden="true">01 — Portfolio</span>
        </div>
      </Container>
    </section>
  );
}
