import { memo } from "react";
import type { Project } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { useProjectCopy } from "../../hooks/useProjectCopy";
import ProjectMedia from "./ProjectMedia";
import Tag from "./Tag";
import Button from "./Button";

function ProjectCard({
  project,
  featured = false,
  headingLevel = 3,
}: {
  project: Project;
  featured?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const { content } = useLanguage();
  const labels = content.projects.ui;
  const copy = useProjectCopy(project.id);
  const status =
    project.status === "website"
      ? copy.statusLabel
      : project.status === "development"
      ? labels.development
      : project.status === "migration"
        ? labels.migrationStatus
        : labels.demoStatus;
  return (
    <article
      className={`project-card ${featured ? "project-card--featured" : ""}`}
      data-project={project.id}
    >
      <ProjectMedia project={project} />
      <div className="project-copy">
        <div className="project-topline">
          <span className={copy.kicker === "Schwerpunktprojekt" ? "status-badge" : "eyebrow"}>{copy.kicker}</span>
          <span className="status-badge">{status}</span>
        </div>
        <Heading>{copy.title}</Heading>
        {copy.role && <p className="project-role">{copy.role}</p>}
        {copy.bullets.length > 0 ? (
          <ul className="project-summary project-bullets">
            {copy.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        ) : <p className="project-summary">{copy.summary}</p>}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
        {featured && (
          <dl className="featured-facts">
            <div>
              <dt>{labels.problem}</dt>
              <dd>{copy.problem}</dd>
            </div>
            <div>
              <dt>{labels.solution}</dt>
              <dd>{copy.solution}</dd>
            </div>
          </dl>
        )}
        <div className="project-actions">
          <Button href={`/projekte/${project.id}`}>
            {labels.details} <span aria-hidden="true">↗</span>
          </Button>
          {project.demoUrl && (
            <Button
              href={project.demoUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.websiteLabel ?? labels.demo}
            </Button>
          )}
          {project.codeUrl && (
            <a
              className="text-link"
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.code}
            </a>
          )}
        </div>
        {project.visibility === "private" && (
          <p className="private-note">
            {labels.private} · {labels.noDemo}
          </p>
        )}
        {project.evidence.length > 0 && (
          <div className="project-evidence">
            <span>{labels.evidence}:</span>
            {project.evidence.map((e) => (
              <a
                href={e.url}
                key={e.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {e.label === "Source" ? labels.source : e.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
export default memo(ProjectCard);
