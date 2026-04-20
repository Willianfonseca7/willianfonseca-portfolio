import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "../../hooks/useLanguage.jsx";
import ContactForm from "../../components/sections/ContactForm.jsx";
import de from "../../locales/de.json";

describe("ContactForm", () => {
  it("blocks submit when message is too short", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>
    );

    const { nameLabel, emailLabel, messageLabel, submitLabel } = de.contact.form;

    await user.type(screen.getByLabelText(new RegExp(nameLabel, "i")), "Willian");
    await user.type(screen.getByLabelText(new RegExp(emailLabel, "i")), "willian@example.com");
    await user.type(screen.getByLabelText(new RegExp(messageLabel, "i")), "Kurz");

    const submitButton = screen.getByRole("button", { name: new RegExp(submitLabel, "i") });
    expect(submitButton).toBeDisabled();

    const messageField = screen.getByLabelText(new RegExp(messageLabel, "i"));
    fireEvent.blur(messageField);
    expect(messageField).toHaveAttribute("aria-invalid", "true");
  });
});
