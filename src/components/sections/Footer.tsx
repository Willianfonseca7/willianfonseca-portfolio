import Container from "../ui/Container";
import { useLanguage } from "../../hooks/useLanguage";
export default function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="site-footer">
      <Container>
        <div>
          <span>© {new Date().getFullYear()} Willian Santos Fonseca</span>
          <span>{content.projects.ui.footer}</span>
          <span>{content.meta.location}</span>
        </div>
      </Container>
    </footer>
  );
}
