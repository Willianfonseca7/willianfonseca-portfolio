import type { Project } from "../../data/projects";
import { assetUrl } from "../../lib/assets";
import { useLanguage } from "../../hooks/useLanguage";
import { useProjectCopy } from "../../hooks/useProjectCopy";
import { useProjectImageModal } from "../../hooks/useProjectImageModal";
import Dialog from "./Dialog";
export default function ProjectMedia({ project }: { project: Project }) {
  const { content } = useLanguage();
  const labels = content.projects.ui;
  const copy = useProjectCopy(project.id);
  const modal = useProjectImageModal();
  if (!project.images.length)
    return (
      <div
        className={`image-placeholder ${project.id === "waiturn" ? "image-placeholder--featured" : ""}`}
      >
        <span className="eyebrow">
          {project.id === "waiturn" ? "WAITURN" : copy.title}
        </span>
        <p>{project.id === "waiturn" ? labels.imagePending : labels.noImage}</p>
        {project.id === "waiturn" && (
          <span className="text-muted">{labels.imagePendingBody}</span>
        )}
      </div>
    );
  const imageLabel = (index: number) =>
    project.id === "orla-plus"
      ? labels.landing
      : index === 1
        ? labels.charts
        : labels.overview;
  return (
    <div
      className={`project-media ${project.id === "waiturn" ? "project-media--waiturn" : ""}`}
    >
      <button
        className="project-image-trigger"
        type="button"
        onClick={() => modal.open(project.images.length)}
        aria-label={`${labels.openImage}: ${copy.title}`}
      >
        <img
          src={assetUrl(project.images[0])}
          alt={`${copy.title} — ${project.id === "waiturn" ? labels.productVisual : imageLabel(0)}`}
          width={project.id === "waiturn" ? 1122 : 1600}
          height={project.id === "waiturn" ? 1402 : 900}
          loading="lazy"
        />
        <span className="image-open-hint" aria-hidden="true">
          ↗
        </span>
      </button>
      {project.id === "waiturn" && (
        <p className="project-media-caption">{labels.productVisual}</p>
      )}
      {project.images.length > 1 && (
        <div className="project-thumbnails">
          {project.images.slice(1).map((url, index) => (
            <button
              key={url}
              type="button"
              onClick={() => modal.open(project.images.length, index + 1)}
              aria-label={`${labels.openImage}: ${copy.title} — ${imageLabel(index + 1)}`}
            >
              <img
                src={assetUrl(url)}
                alt={imageLabel(index + 1)}
                width="320"
                height="180"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
      {modal.isOpen && (
        <Dialog
          title={`${copy.title} — ${imageLabel(modal.activeIndex)}`}
          closeLabel={labels.closePreview}
          onClose={modal.close}
        >
          <div className="gallery-toolbar">
            {project.images.map((url, index) => (
              <button
                key={url}
                type="button"
                className="chip-button"
                aria-pressed={modal.activeIndex === index}
                onClick={() => modal.setActiveIndex(index)}
              >
                {imageLabel(index)}
              </button>
            ))}
          </div>
          <div className="gallery-image">
            <img
              src={assetUrl(project.images[modal.activeIndex])}
              alt={`${copy.title} — ${imageLabel(modal.activeIndex)}`}
            />
          </div>
          {modal.hasMultiple && (
            <div className="gallery-controls">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={modal.goToPrevious}
                aria-label={labels.previousPreview}
              >
                ← {labels.previousPreview}
              </button>
              <span>
                {modal.activeIndex + 1} / {project.images.length}
              </span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={modal.goToNext}
                aria-label={labels.nextPreview}
              >
                {labels.nextPreview} →
              </button>
            </div>
          )}
        </Dialog>
      )}
    </div>
  );
}
