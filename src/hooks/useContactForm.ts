import { useState, type FormEvent } from "react";

export type ContactField = "name" | "email" | "message";

type ContactStatus = {
  tone: "idle" | "success" | "error";
  text: string;
};

function isNamedFormField(
  control: Element | RadioNodeList | null,
): control is HTMLInputElement | HTMLTextAreaElement {
  return control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement;
}

export function useContactForm() {
  const [invalidFields, setInvalidFields] = useState<Partial<Record<ContactField, boolean>>>({});
  const [status, setStatus] = useState<ContactStatus>({ tone: "idle", text: "" });
  const [isSending, setIsSending] = useState(false);

  const handleInput = (field: ContactField, value: string, input: HTMLInputElement | HTMLTextAreaElement) => {
    if (!invalidFields[field]) {
      return;
    }

    setInvalidFields((fields) => ({
      ...fields,
      [field]: !input.validity.valid || value.trim().length === 0,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const honeypot = String(formData.get("_honey") ?? "").trim();
    const nameField = form.elements.namedItem("name");
    const emailField = form.elements.namedItem("email");
    const messageField = form.elements.namedItem("message");
    const nextInvalidFields: Partial<Record<ContactField, boolean>> = {
      name: !name || !isNamedFormField(nameField) || !nameField.validity.valid,
      email: !email || !isNamedFormField(emailField) || !emailField.validity.valid,
      message: !message || !isNamedFormField(messageField) || !messageField.validity.valid,
    };

    if (honeypot) {
      return;
    }

    setInvalidFields(nextInvalidFields);

    if (Object.values(nextInvalidFields).some(Boolean)) {
      setStatus({ tone: "idle", text: "" });
      return;
    }

    setStatus({ tone: "idle", text: "Sending..." });
    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/alisakatsionova@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name || "someone"}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Message failed to send");
      }

      form.reset();
      setInvalidFields({});
      setStatus({ tone: "success", text: "Message sent!" });
    } catch (error) {
      setStatus({ tone: "error", text: "Couldn't send. Try email?" });
    } finally {
      setIsSending(false);
    }
  };

  return {
    handleInput,
    handleSubmit,
    invalidFields,
    isSending,
    status,
  };
}
