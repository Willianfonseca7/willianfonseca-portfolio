import { useMemo, useState } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useLanguage } from "../../hooks/useLanguage";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("");
    setPreparedMailto("");
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) return;

    const messageBody = `${form.nameLabel}: ${formData.name}\n${form.emailLabel}: ${formData.email}\n\n${formData.message}`;

    const didCopy = await copy(messageBody);
    setStatus(didCopy ? form.successMessage : form.copyFailedMessage);

    const emailHref =
      content.contact.links[0]?.href.replace("mailto:", "") ?? "";
    const mailto = `mailto:${emailHref}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(messageBody)}`;
    setPreparedMailto(mailto);

    setFormData({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  };

  return (
    <Card className="space-y-6">
      <div className="space-y-2">
        <h2 className="small-heading">{form.title}</h2>
        <p className="text-sm text-muted">
          {copied ? form.copiedMessage : form.helper}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm text-primary" htmlFor="name">
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
            aria-describedby={
              touched.name && errors.name ? "name-error" : undefined
            }
            className="input-field"
            placeholder={form.namePlaceholder}
            autoComplete="name"
          />
          {touched.name && errors.name && (
            <p id="name-error" className="field-error">
              {form.nameError}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-primary" htmlFor="email">
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
            aria-describedby={
              touched.email && errors.email ? "email-error" : undefined
            }
            className="input-field"
            placeholder={form.emailPlaceholder}
            autoComplete="email"
          />
          {touched.email && errors.email && (
            <p id="email-error" className="field-error">
              {form.emailError}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-primary" htmlFor="message">
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
            aria-describedby={
              touched.message && errors.message ? "message-error" : undefined
            }
            className="input-field resize-none"
            placeholder={form.messagePlaceholder}
          />
          {touched.message && errors.message && (
            <p id="message-error" className="field-error">
              {form.messageError}
            </p>
          )}
        </div>

        <Button type="submit" disabled={!isValid} className="w-full">
          {form.submitLabel}
        </Button>

        {status && (
          <div className="space-y-2" role="status">
            <p className="form-status">{status}</p>
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
