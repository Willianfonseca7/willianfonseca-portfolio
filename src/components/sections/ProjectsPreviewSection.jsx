import { useLanguage } from "../../hooks/useLanguage.jsx";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";

export default function ProjectsPreviewSection() {
  const { content } = useLanguage();
  const projects = content.projects.list.filter((project) => project.featured);

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            eyebrow={content.projects.title}
            title={content.projects.featuredTitle}
            subtitle={content.home.projectsPreviewSubtitle}
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
