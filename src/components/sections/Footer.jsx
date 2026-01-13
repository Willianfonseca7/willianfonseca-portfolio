import Container from "../ui/Container.jsx";
import { useLanguage } from "../../hooks/useLanguage.jsx";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-slate-400 sm:flex-row">
          <span>{content.meta.name}</span>
          <span>{content.meta.location}</span>
        </div>
      </Container>
    </footer>
  );
}
