import { useLanguage } from "../../hooks/useLanguage.jsx";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import ContactForm from "./ContactForm.jsx";

const iconMap = {
  mail: "✉️",
  github: "🐙",
  linkedin: "💼",
};

export default function ContactSection() {
  const { content } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow={content.contact.title}
            title={content.contact.title}
            subtitle={content.contact.description}
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <Card className="space-y-5">
              <h3 className="heading text-lg">{content.contact.linksTitle}</h3>
              <div className="space-y-3">
                {content.contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="link-card"
                    aria-label={link.label}
                  >
                    <span className="text-lg">
                      {iconMap[link.icon] || "🔗"}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
