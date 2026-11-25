import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
export default function ProjectsPreviewSection() {
  const { content } = useLanguage();
  return (
    <section id="projekte" className="section-space home-projects">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">{content.home.featuredEyebrow}</p>
          <h2>{content.home.selectedTitle}</h2>
          <p className="text-muted">{content.home.projectsPreviewSubtitle}</p>
        </div>
        <div className="project-list project-list--catalog">
          {["waiturn", "argosapp", "orla-plus", "growthbot-de", "invest-agent"].flatMap((id) => projects.filter((project) => project.id === id && !project.hidden)).map((project) => (
            <ProjectCard key={project.id} project={project} variant="catalog" />
          ))}
        </div>
        <div className="section-end">
          <Button href="/projekte" variant="secondary">
            {content.home.projectsPreviewCta} <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
