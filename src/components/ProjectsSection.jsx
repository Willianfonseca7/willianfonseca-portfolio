// src/components/ProjectsSection.jsx
import { useState } from "react";
import { projects } from "../data/projects";

import ProjectButtons from "./ProjectButtons.jsx";

// Imagens do Pokémon App
import pokemonImg1 from "../assets/pokemonapp.png";
import pokemonImg2 from "../assets/pokemonapp2.png";
import pokemonImg3 from "../assets/pokemonapp3.png";

const pokemonImages = [pokemonImg1, pokemonImg2, pokemonImg3];

export default function ProjectsSection() {
  const [currentPokemonImage, setCurrentPokemonImage] = useState(0);

  const handlePrev = () => {
    setCurrentPokemonImage((prev) =>
      prev === 0 ? pokemonImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentPokemonImage((prev) =>
      prev === pokemonImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-16 space-y-10"
    >
      <header className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50">
          Projekte
        </h2>
        <p className="text-sm text-slate-300">
          Eine Auswahl von Webprojekten, die ich mit moderner Frontend-
          Technologie gebaut habe.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
          >
            {/* Slider só para o Pokémon App */}
            {project.id === 1 && (
              <div className="relative h-48 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <img
                  src={pokemonImages[currentPokemonImage]}
                  alt="Pokémon WebApp Screenshot"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Botão esquerda */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 px-2 py-1 text-sm text-slate-50 hover:bg-slate-800"
                >
                  &lt;
                </button>

                {/* Botão direita */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 px-2 py-1 text-sm text-slate-50 hover:bg-slate-800"
                >
                  &gt;
                </button>

                {/* Bolinhas */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {pokemonImages.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setCurrentPokemonImage(index)}
                      className={`h-2 w-2 rounded-full ${
                        index === currentPokemonImage
                          ? "bg-yellow-400"
                          : "bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Conteúdo do card */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-wide text-slate-50">
                {project.title}
              </h3>

              <p className="text-sm text-slate-300">
                {project.description}
              </p>

              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-300">
                  Technologien:
                </span>{" "}
                {project.techs.join(", ")}
              </p>
            </div>

            {/* Botões separados em componente */}
            <ProjectButtons
              playUrl={project.playUrl}
              codeUrl={project.codeUrl}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
