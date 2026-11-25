import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCalendar, FiBarChart2, FiUsers } from "react-icons/fi";
import { projects } from "../../data/projects";
import { assetUrl } from "../../lib/assets";
import { useLanguage } from "../../hooks/useLanguage";
import { useProjectCopy } from "../../hooks/useProjectCopy";

const showcaseProjects = [
  { id: "waiturn", Icon: FiCalendar },
  { id: "argosapp", Icon: FiBarChart2 },
  { id: "orla-plus", Icon: FiUsers },
];
function ShowcaseWindow({ id, Icon }: (typeof showcaseProjects)[number]) {
  const { content } = useLanguage();
  const copy = useProjectCopy(id);
  const project = projects.find((item) => item.id === id);
  if (!project?.images[0]) return null;
  const caption = id === "waiturn" ? content.projects.ui.productVisual
    : id === "argosapp" ? content.hero.officialMockup : content.projects.ui.landing;
  return (
    <Link to={`/projekte/${id}`} className={`showcase-project showcase-project--${id}`} aria-label={`${copy.title} – ${content.projects.ui.caseLink}`}>
      <span className="showcase-label">
        <Icon aria-hidden="true" /><strong>{copy.title}</strong>
        {id === "waiturn" && <span className="showcase-primary">{content.projects.ui.featuredLabel}</span>}
        <FiArrowUpRight className="showcase-link-icon" aria-hidden="true" />
      </span>
      <span className="showcase-window">
        <span className="showcase-chrome" aria-hidden="true">
          <span className="window-dots"><i /><i /><i /></span><span>{copy.title}</span><FiArrowUpRight />
        </span>
        <span className="showcase-caption">{caption}</span>
        <span className="showcase-image">
          <img src={assetUrl(project.images[0])} alt={copy.imageAlt ?? `${copy.title} – ${caption}`}
            width={project.imageSize?.width ?? (id === "waiturn" ? 1122 : 1400)}
            height={project.imageSize?.height ?? (id === "waiturn" ? 1402 : 706)}
            fetchPriority={id === "waiturn" ? "high" : "auto"} decoding="async" />
        </span>
      </span>
    </Link>
  );
}
export default function HeroShowcase() {
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const fitToViewport = () => {
      if (!desktop.matches) {
        element.style.removeProperty("--showcase-scale");
        return;
      }
      // Use the initial document position so scrolling does not change the fit.
      const top = element.getBoundingClientRect().top + window.scrollY;
      const availableHeight = Math.max(0, window.innerHeight - top - 32);
      const scale = Math.min(1, availableHeight / element.clientHeight);
      element.style.setProperty("--showcase-scale", String(scale));
    };
    const resizeObserver = new ResizeObserver(fitToViewport);
    resizeObserver.observe(element);
    window.addEventListener("resize", fitToViewport);
    fitToViewport();
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.setProperty("--pointer-x", "0");
      element.style.setProperty("--pointer-y", "0");
    };
    const move = (event: PointerEvent) => {
      if (motion.matches || !pointer.matches) return;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--pointer-x", String(x));
        element.style.setProperty("--pointer-y", String(y));
      });
    };
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    motion.addEventListener("change", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", reset);
      resizeObserver.disconnect();
      window.removeEventListener("resize", fitToViewport);
    };
  }, []);
  return (
    <div ref={stage} className="hero-showcase" aria-label="Ausgewählte Produktprojekte">
      <div className="showcase-light" aria-hidden="true" />
      <div className="showcase-scene">{showcaseProjects.map((project) => <ShowcaseWindow key={project.id} {...project} />)}</div>
    </div>
  );
}
