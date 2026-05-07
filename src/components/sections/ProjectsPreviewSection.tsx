import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";

export default function ProjectsPreviewSection() {
  const { content } = useLanguage();
  const featuredProject = content.projects.list.find(
    (project) => project.id === "heilpratika"
  );

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            eyebrow={content.projects.title}
            title={content.projects.featuredTitle}
            subtitle={content.home.projectsPreviewSubtitle}
          />

          {featuredProject ? (
            <div className="space-y-6">
              <div className="grid gap-8 lg:grid-cols-1">
                <ProjectCard project={featuredProject} />
              </div>

              <div className="flex justify-center">
                <Button href="/projekte" variant="secondary">
                  {content.home.projectsPreviewCta}
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
