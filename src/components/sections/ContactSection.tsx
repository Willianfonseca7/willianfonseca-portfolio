import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import ContactForm from "./ContactForm";
const icons = { mail: FiMail, github: FiGithub, linkedin: FiLinkedin };
export default function ContactSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { content } = useLanguage();
  const Heading = compact ? "h2" : "h1";
  return (
    <section id="kontakt" className="section-space contact-section">
      <Container>
        <div className={`contact-grid ${compact ? "contact-grid--compact" : ""}`}>
          <div>
            <p className="eyebrow">06 / {content.contact.title}</p>
            <Heading className={compact ? "" : "page-title"}>
              {content.contact.title}
            </Heading>
            <p className="contact-description">{content.contact.description}</p>
            <p className="contact-availability">
              {content.contact.availability}
            </p>
            <div className="contact-links">
              {content.contact.links.map((link) => {
                const Icon = icons[link.icon as keyof typeof icons] ?? FiMail;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="contact-link"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon aria-hidden="true" />
                    <span>
                      {link.icon === "mail"
                        ? link.href.replace("mailto:", "")
                        : link.label}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                );
              })}
            </div>
          </div>
          {!compact && <ContactForm />}
        </div>
      </Container>
    </section>
  );
}
