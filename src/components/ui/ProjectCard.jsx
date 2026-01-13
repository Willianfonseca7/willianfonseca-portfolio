import { memo } from "react";
import Card from "./Card.jsx";
import Tag from "./Tag.jsx";
import Button from "./Button.jsx";

function ProjectCard({ project }) {
  const hasDemo = Boolean(project.demoUrl);
  const hasCode = Boolean(project.codeUrl);

  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
        <p className="text-sm text-slate-300/90">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </div>

      <ul className="space-y-2 text-sm text-slate-300/90">
        {project.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <div className="relative group">
          <Button
            href={hasDemo ? project.demoUrl : undefined}
            variant="primary"
            disabled={!hasDemo}
            className="min-w-[140px] justify-center"
            target={hasDemo ? "_blank" : undefined}
            rel={hasDemo ? "noreferrer" : undefined}
          >
            Demo
          </Button>
          {!hasDemo && (
            <span className="tooltip">coming soon</span>
          )}
        </div>
        <div className="relative group">
          <Button
            href={hasCode ? project.codeUrl : undefined}
            variant="secondary"
            disabled={!hasCode}
            className="min-w-[140px] justify-center"
            target={hasCode ? "_blank" : undefined}
            rel={hasCode ? "noreferrer" : undefined}
          >
            Code
          </Button>
          {!hasCode && (
            <span className="tooltip">coming soon</span>
          )}
        </div>
      </div>
    </Card>
  );
}

export default memo(ProjectCard);
