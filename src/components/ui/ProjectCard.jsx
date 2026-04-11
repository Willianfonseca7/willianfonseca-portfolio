import { memo } from "react";
import Card from "./Card.jsx";
import Tag from "./Tag.jsx";
import Button from "./Button.jsx";

function resolveImageUrl(imageUrl) {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  if (imageUrl.startsWith("/")) {
    return `${import.meta.env.BASE_URL}${imageUrl.slice(1)}`;
  }

  return imageUrl;
}

function ProjectCard({ project }) {
  const hasDemo = Boolean(project.demoUrl);
  const hasCode = Boolean(project.codeUrl);
  const resolvedImageUrl = resolveImageUrl(project.imageUrl);
  const hasImage = Boolean(resolvedImageUrl);

  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="-mx-6 -mt-6 overflow-hidden border-b border-white/10 sm:-mx-7 sm:-mt-7">
        {hasImage ? (
          <div className="group/image relative aspect-[16/9] overflow-hidden bg-slate-950/60">
            <img
              src={resolvedImageUrl}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition duration-500 group-hover/image:scale-[1.03]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-end bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.3),_transparent_45%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.92))] p-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/80">
                Preview coming soon
              </p>
              <h3 className="heading text-lg">{project.title}</h3>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="heading text-xl">{project.title}</h3>
        <p className="text-sm text-muted">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </div>

      <ul className="space-y-2 text-sm text-muted">
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
