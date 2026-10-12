import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import { useProjectCopy } from "../hooks/useProjectCopy";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";
import Container from "../components/ui/Container";
import ProjectMedia from "../components/ui/ProjectMedia";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
export default function ProjectCase() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId && !p.hidden);
  const { content } = useLanguage();
  const copy = useProjectCopy(projectId ?? "");
  const labels = content.projects.ui;
  return (
    <>
      <Navbar />
      <main id="main-content" className="section-space">
        <Container>
          <Button href="/projekte" variant="ghost">
            ← {labels.back}
          </Button>
          {!project ? (
            <h1 className="page-title">{labels.notFound}</h1>
          ) : (
            <>
              <header className="case-header">
                <p className="eyebrow">{copy.kicker}</p>
                <h1 className="page-title">{copy.title}</h1>
                <p className="case-lead">{copy.summary}</p>
                {copy.role && <p className="project-role">{copy.role}</p>}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech} label={tech} />
                  ))}
                </div>
              </header>
              <ProjectMedia project={project} />
              <div className="case-sections">
                {(
                  [
                    "problem",
                    "solution",
                    "architecture",
                    "challenges",
                    "validation",
                    "statusNote",
                  ] as const
                ).map((key) =>
                  copy[key] ? (
                    <section key={key}>
                      <h2>
                        {key === "statusNote" ? labels.status : labels[key]}
                      </h2>
                      <p>{copy[key]}</p>
                    </section>
                  ) : null,
                )}
                {copy.migrationNote && (
                  <aside className="migration-note">
                    <h2>{labels.migration}</h2>
                    <p>{copy.migrationNote}</p>
                  </aside>
                )}
                <section id="evidence">
                  <h2>{labels.evidence}</h2>
                  {project.visibility === "private" ? (
                    <p>{labels.noEvidence}</p>
                  ) : (
                    <div className="flex flex-wrap gap-4">
                      {project.evidence.map((e) => (
                        <a
                          key={e.url}
                          href={e.url}
                          className="text-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {e.label === "Source" ? labels.source : e.label}{" "}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="project-actions">
                    {project.demoUrl && (
                      <Button
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {labels.demo}
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button
                        href={project.codeUrl}
                        variant="secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {labels.code}
                      </Button>
                    )}
                  </div>
                </section>
              </div>
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
