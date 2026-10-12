import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
export default function ProjectsSection() {
  const { content } = useLanguage();
  return (
    <section className="section-space">
      <Container>
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h1 className="page-title">{content.projects.title}</h1>
          <p className="text-muted">{content.projects.subtitle}</p>
        </div>
        <div className="project-list">
          {projects
            .filter(
              (project) => project.priority !== "archive" && !project.hidden,
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.priority === "featured"}
              />
            ))}
        </div>
        <div id="archiv" className="section-heading selected-heading">
          <h2>{content.projects.archiveTitle}</h2>
          <p className="text-muted">{content.projects.archiveSubtitle}</p>
        </div>
        <div className="archive-grid">
          {projects
            .filter(
              (project) => project.priority === "archive" && !project.hidden,
            )
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </Container>
    </section>
  );
}
