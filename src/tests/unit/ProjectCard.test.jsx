import { render, screen } from "@testing-library/react";
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
    render(<ProjectCard project={project} />);

    expect(screen.getByText("ContainerHub")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Tailwind")).toBeInTheDocument();
  });
});
