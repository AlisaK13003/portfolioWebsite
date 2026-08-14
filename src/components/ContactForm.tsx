import { contactFields } from "../data/contact";
import { useContactForm } from "../hooks/useContactForm";
import { ContactFormField } from "./ContactFormField";

export function ContactForm() {
  const { handleInput, handleSubmit, invalidFields, isSending, status } = useContactForm();

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <input className="contact-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      {contactFields.map((field) => (
        <ContactFormField
          key={field.name}
          field={field}
          isInvalid={Boolean(invalidFields[field.name])}
          onInput={handleInput}
        />
      ))}
      <button type="submit" disabled={isSending}>
        Send
      </button>
      <p
        className={[
          "contact-form-status",
          status.tone === "success" ? "is-success" : "",
          status.tone === "error" ? "is-error" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-live="polite"
      >
        {status.text}
      </p>
    </form>
  );
}
