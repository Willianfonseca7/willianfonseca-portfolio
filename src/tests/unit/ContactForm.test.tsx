import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "../../context/LanguageContext";
import ContactForm from "../../components/sections/ContactForm";
describe("ContactForm", () => {
  it("blocks submit when message is too short and associates the error with the field", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>,
    );
    await user.type(screen.getByLabelText("Name"), "Willian");
    await user.type(screen.getByLabelText("E-Mail"), "willian@example.com");
    await user.type(screen.getByLabelText("Nachricht"), "Kurz");
    expect(
      screen.getByRole("button", { name: "Nachricht vorbereiten" }),
    ).toBeDisabled();
    const field = screen.getByLabelText("Nachricht");
    fireEvent.blur(field);
    expect(field).toHaveAttribute("aria-invalid", "true");
    expect(field).toHaveAttribute("aria-describedby", "message-error");
  });
  it("retains a usable email draft when clipboard access fails", async () => {
    const user = userEvent.setup();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("blocked")) },
    });
    render(
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>,
    );
    await user.type(screen.getByLabelText("Name"), "Recruiter");
    await user.type(screen.getByLabelText("E-Mail"), "recruiter@example.com");
    await user.type(
      screen.getByLabelText("Nachricht"),
      "Ich möchte Ihre Projekte und eine Junior-Stelle besprechen.",
    );
    await user.click(
      screen.getByRole("button", { name: "Nachricht vorbereiten" }),
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      "Das Kopieren war nicht möglich",
    );
    expect(
      screen.getByRole("link", { name: "E-Mail-Programm öffnen" }),
    ).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:willianfonseca7@gmail.com"),
    );
    expect(
      screen.getByRole("link", { name: "E-Mail-Programm öffnen" }),
    ).toHaveAttribute(
      "href",
      expect.stringContaining(encodeURIComponent("recruiter@example.com")),
    );
  });
});
