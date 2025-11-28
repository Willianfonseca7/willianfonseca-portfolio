// src/components/ProjectsSection.jsx
// Main Projects section: uses GlowCard for cards, ProjectButtons for CTAs,
// and an image slider for projects that have screenshots.

import { useState } from "react";
import GlowCard from "./GlowCard.jsx";
import ProjectButtons from "./ProjectButtons.jsx";

// -------------------------------
// Project data
// -------------------------------
const projects = [
  {
    id: "pokemon-app",
    title: "Pokémon App",
    description: "A web app using HTML, CSS, JS and PokéAPI.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://willianfonseca7.github.io/Pokemon-App/",
    codeUrl: "https://github.com/Willianfonseca7/Pokemon-App",
    images: ["/pokemonapp.png", "/pokemonapp2.png", "/pokemonapp3.png"],
    playLabel: "Spielen",
    codeLabel: "Code",
  },
  {
    id: "portfolio",
    title: "Willian Portfolio",
    description: "My personal portfolio built with React and Tailwind.",
    tech: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://seu-link-do-portfolio.com", // TODO: add real URL
    codeUrl: "https://github.com/Willianfonseca7/Willian-Fonseca-Portfolio",
    images: [],
    playLabel: "Demo",
    codeLabel: "Code",
  },
];

// -------------------------------
// Single project card
// -------------------------------
function ProjectCard({ project }) {
  const hasImages = project.images && project.images.length > 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous image in the slider
  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Go to next image in the slider
  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <GlowCard>
      {/* Title + description */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">
          {project.title}
        </h2>
        <p className="text-sm text-slate-400">{project.description}</p>
      </div>

      {/* Tech badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Image slider (only if project has images) */}
      {hasImages && (
        <div className="relative mt-4 rounded-2xl overflow-hidden border border-slate-800/70 bg-slate-950/80">
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="w-full h-52 md:h-60 object-cover"
          />

          {project.images.length > 1 && (
            <>
              {/* Left arrow */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 px-2.5 py-1 text-sm text-slate-100 hover:bg-slate-800"
              >
                ‹
              </button>

              {/* Right arrow */}
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 px-2.5 py-1 text-sm text-slate-100 hover:bg-slate-800"
              >
                ›
              </button>

              {/* Small dots indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={
                      "h-1.5 w-1.5 rounded-full " +
                      (index === currentIndex
                        ? "bg-slate-50"
                        : "bg-slate-500/60")
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Reusable CTA buttons */}
      <ProjectButtons
        playUrl={project.demoUrl}
        codeUrl={project.codeUrl}
        playLabel={project.playLabel}
        codeLabel={project.codeLabel}
      />
    </GlowCard>
  );
}

// -------------------------------
// Main Projects section
// -------------------------------
export default function ProjectsSection() {
  return (
    <section className="space-y-8">
      {/* Section header */}
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-sm text-slate-400 max-w-xl">
          Selected work that shows my journey as a frontend developer.
        </p>
      </header>

      {/* Cards grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
