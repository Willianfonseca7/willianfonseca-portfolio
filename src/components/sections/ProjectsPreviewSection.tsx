import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
export default function ProjectsPreviewSection() {
  const { content } = useLanguage();
  const featured = projects.find(
    (project) => project.priority === "featured" && !project.hidden,
  );
  return (
    <section id="projekte" className="section-space">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">{content.home.featuredEyebrow}</p>
          <h2>{content.home.featuredTitle}</h2>
        </div>
        {featured && <ProjectCard project={featured} featured />}
        <div className="section-heading selected-heading">
          <p className="eyebrow">02 / {content.projects.ui.selectedLabel}</p>
          <h2>{content.home.selectedTitle}</h2>
          <p className="text-muted">{content.home.selectedSubtitle}</p>
        </div>
        <div className="selected-projects">
          {projects
            .filter(
              (project) => project.priority === "selected" && !project.hidden,
            )
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
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
