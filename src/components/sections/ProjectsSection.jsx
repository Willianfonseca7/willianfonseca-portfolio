import { useLanguage } from "../../hooks/useLanguage.jsx";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";

export default function ProjectsSection() {
  const { content } = useLanguage();
  const { projects } = content;

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            eyebrow={projects.title}
            title={projects.title}
            subtitle={projects.subtitle}
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.list.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
