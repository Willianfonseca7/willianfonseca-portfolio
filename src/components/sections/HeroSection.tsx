import { FiArrowRight } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { useLanguage } from "../../hooks/useLanguage";
import HeroShowcase from "./HeroShowcase";

const technologies = [
  { label: "React", Icon: SiReact }, { label: "Next.js", Icon: SiNextdotjs },
  { label: "Vue", Icon: SiVuedotjs }, { label: "TypeScript", Icon: SiTypescript },
  { label: "PostgreSQL", Icon: SiPostgresql },
];
export default function HeroSection() {
  const { content } = useLanguage();
  const { hero } = content;
  return (
    <section className="hero-section product-hero" aria-labelledby="hero-title">
      <svg className="hero-drafting" aria-hidden="true" width="1600" height="900" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hero-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 H 0 V 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <mask id="hero-grid-mask">
            <rect width="1600" height="900" fill="white" />
            <ellipse cx="650" cy="340" rx="610" ry="340" fill="black" />
          </mask>
        </defs>
        <rect width="1600" height="900" fill="url(#hero-grid-pattern)" mask="url(#hero-grid-mask)" opacity="0.25" />
        <g fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5">
          <circle cx="1550" cy="280" r="250" strokeDasharray="2 4" />
          <circle cx="-70" cy="940" r="300" />
          <path d="M20 0V900 M1580 0V900 M0 780H330 M1400 76H1600 M10 770V790 M0 780H20 M1550 24V44 M1540 34H1560" />
        </g>
      </svg>
      <Container className="product-hero-container">
        <div className="product-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">{hero.title}<br /><span>{hero.titleAccent}</span></h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <Button href={hero.ctas.primary.href}>{hero.ctas.primary.label}<FiArrowRight aria-hidden="true" /></Button>
              <Button href={hero.ctas.secondary.href} variant="secondary">{hero.ctas.secondary.label}</Button>
            </div>
            <ul className="hero-technologies" aria-label="Technologien">
              {technologies.map(({ label, Icon }) => <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>)}
            </ul>
          </div>
          <HeroShowcase />
        </div>
      </Container>
    </section>
  );
}
