import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
export default function ProjectsPreviewSection() {
  const { content } = useLanguage();
  return (
    <section id="projekte" className="section-space">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">{content.home.featuredEyebrow}</p>
          <h2>{content.home.featuredTitle}</h2>
        </div>
        <div className="project-list">
          {projects.filter((project) => project.priority !== "archive" && !project.hidden).map((project) => (
            <ProjectCard key={project.id} project={project} featured={project.priority === "featured"} />
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
