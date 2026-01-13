import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "../../hooks/useLanguage.jsx";
import ContactForm from "../../components/sections/ContactForm.jsx";

describe("ContactForm", () => {
  it("blocks submit when message is too short", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>
    );

    await user.type(screen.getByLabelText(/name/i), "Willian");
    await user.type(screen.getByLabelText(/e-mail/i), "willian@example.com");
    await user.type(screen.getByLabelText(/nachricht/i), "Kurz");

    const submitButton = screen.getByRole("button", { name: /nachricht senden/i });
    expect(submitButton).toBeDisabled();

    const messageField = screen.getByLabelText(/nachricht/i);
    fireEvent.blur(messageField);
    expect(messageField).toHaveAttribute("aria-invalid", "true");
  });
});
