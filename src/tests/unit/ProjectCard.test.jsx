import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../context/LanguageContext.jsx";
import ProjectCard from "../../components/ui/ProjectCard.jsx";

const project = {
  id: "kontainer",
  title: "ContainerHub",
  description: "Test",
  stack: ["React", "Tailwind"],
  highlights: ["API"],
  demoUrl: null,
  codeUrl: null,
};

describe("ProjectCard", () => {
  it("renders title and tags", () => {
    render(
      <LanguageProvider>
        <ProjectCard project={project} />
      </LanguageProvider>
    );

    expect(screen.getAllByText("ContainerHub").length).toBeGreaterThan(0);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Tailwind")).toBeInTheDocument();
  });
});
