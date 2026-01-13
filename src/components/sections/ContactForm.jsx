import { useMemo, useState } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import Button from "../ui/Button.jsx";
import Card from "../ui/Card.jsx";
import { useLanguage } from "../../hooks/useLanguage.jsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { content } = useLanguage();
  const { form } = content.contact;
  const { copy, copied } = useCopyToClipboard();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [status, setStatus] = useState("");
  const [preparedMailto, setPreparedMailto] = useState("");

  const errors = useMemo(() => {
    return {
      name: formData.name.trim().length < 2,
      email: !emailRegex.test(formData.email),
      message: formData.message.trim().length < form.minMessageLength,
    };
  }, [formData, form.minMessageLength]);

  const isValid = !errors.name && !errors.email && !errors.message;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("");
    setPreparedMailto("");
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) return;

    const messageBody = `Name: ${formData.name}\nE-Mail: ${formData.email}\n\n${formData.message}`;

    await copy(messageBody);
    setStatus(form.successMessage);

    const mailto = `mailto:${content.contact.links[0].href.replace(
      "mailto:",
      ""
    )}?subject=Portfolio%20Kontakt&body=${encodeURIComponent(messageBody)}`;
    setPreparedMailto(mailto);

    setFormData({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  };

  return (
    <Card className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-slate-100">
          {form.title}
        </h3>
        <p className="text-sm text-slate-300/90">
          {copied ? form.copiedMessage : form.helper}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm text-slate-200" htmlFor="name">
            {form.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.name && errors.name}
            className="input-field"
            placeholder="Willian Santos"
          />
          {touched.name && errors.name && (
            <p className="text-xs text-rose-300">{form.nameError}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-slate-200" htmlFor="email">
            {form.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.email && errors.email}
            className="input-field"
            placeholder="du@example.com"
          />
          {touched.email && errors.email && (
            <p className="text-xs text-rose-300">{form.emailError}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-slate-200" htmlFor="message">
            {form.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.message && errors.message}
            className="input-field resize-none"
            placeholder={`Bitte mindestens ${form.minMessageLength} Zeichen...`}
          />
          {touched.message && errors.message && (
            <p className="text-xs text-rose-300">{form.messageError}</p>
          )}
        </div>

        <Button type="submit" disabled={!isValid} className="w-full">
          {form.submitLabel}
        </Button>

        {status && (
          <div className="space-y-2" role="status">
            <p className="text-sm text-emerald-300">{status}</p>
            {preparedMailto && (
              <Button href={preparedMailto} variant="ghost">
                {form.mailClientLabel}
              </Button>
            )}
          </div>
        )}
      </form>
    </Card>
  );
}
