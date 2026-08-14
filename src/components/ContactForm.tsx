import { useContactForm } from "../hooks/useContactForm";

export function ContactForm() {
  const { handleInput, handleSubmit, invalidFields, isSending, status } = useContactForm();

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <input className="contact-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      <label className="contact-name-field">
        <span>Name:</span>
        <input
          className={invalidFields.name ? "is-invalid" : undefined}
          type="text"
          name="name"
          autoComplete="name"
          required
          aria-invalid={invalidFields.name ? "true" : "false"}
          onInput={(event) => handleInput("name", event.currentTarget.value, event.currentTarget)}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          className={invalidFields.email ? "is-invalid" : undefined}
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-invalid={invalidFields.email ? "true" : "false"}
          onInput={(event) => handleInput("email", event.currentTarget.value, event.currentTarget)}
        />
      </label>
      <label className="contact-message-field">
        <span>Message:</span>
        <textarea
          className={invalidFields.message ? "is-invalid" : undefined}
          name="message"
          rows={3}
          required
          aria-invalid={invalidFields.message ? "true" : "false"}
          onInput={(event) => handleInput("message", event.currentTarget.value, event.currentTarget)}
        />
      </label>
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
