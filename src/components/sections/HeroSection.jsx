import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";
import FeatureCard from "../ui/FeatureCard.jsx";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import portrait from "../../assets/willian-portrait.jpg";

export default function HeroSection() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className="pt-24 pb-16 sm:pt-28 lg:pt-32">
      <Container>
        <div className="space-y-10">
          <div className="flex justify-center">
            <div className="hero-portrait">
              <img
                src={portrait}
                alt="Willian Santos Fonseca"
                className="hero-portrait__img"
              />
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
              {content.meta.tagline}
            </p>
            <div className="space-y-3">
              <h1 className="hero-title heading text-4xl sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="text-base sm:text-lg text-sky-200/90">
                {hero.subtitle}
              </p>
              <p className="text-sm sm:text-base text-muted mx-auto max-w-2xl">
                {hero.description}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={hero.ctas.primary.href} variant="primary">
                {hero.ctas.primary.label}
              </Button>
              <Button href={hero.ctas.secondary.href} variant="secondary">
                {hero.ctas.secondary.label}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {hero.highlights.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
