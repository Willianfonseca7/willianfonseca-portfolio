import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard";
const renderProject = (id: string) =>
  render(
    <MemoryRouter>
      <LanguageProvider>
        <ProjectCard project={projects.find((p) => p.id === id)!} />
      </LanguageProvider>
    </MemoryRouter>,
  );

describe("ProjectCard", () => {
  it("shows private status and case link without a private repository or fake demo button", () => {
    renderProject("waiturn");
    expect(screen.getByRole("heading", { name: "Waiturn" })).toBeVisible();
    expect(screen.getByText(/Privates Repository/)).toBeVisible();
    expect(screen.getByRole("link", { name: /Case ansehen/ })).toHaveAttribute(
      "href",
      "/projekte/waiturn",
    );
    expect(
      screen.queryByRole("link", { name: "Code" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Demo" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Demo" }),
    ).not.toBeInTheDocument();
  });
  it("opens a single-image gallery for older projects, with source and demo retained", async () => {
    const user = userEvent.setup();
    renderProject("containerhub");
    expect(screen.getByRole("link", { name: "Code" })).toHaveAttribute(
      "href",
      "https://github.com/Willianfonseca7/ContainerHub",
    );
    await user.click(
      screen.getByRole("button", { name: /Bild öffnen: ContainerHub/ }),
    );
    expect(screen.getByRole("dialog")).toBeVisible();
    await user.click(screen.getByRole("button", { name: /Schließen/ }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
