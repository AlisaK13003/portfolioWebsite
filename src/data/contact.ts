import type { ContactField } from "../hooks/useContactForm";

type ContactFieldConfig = {
  autoComplete?: string;
  className?: string;
  inputType?: string;
  label: string;
  name: ContactField;
  rows?: number;
  type: "input" | "textarea";
};

export const contactFields: ContactFieldConfig[] = [
  {
    autoComplete: "name",
    className: "contact-name-field",
    inputType: "text",
    label: "Name:",
    name: "name",
    type: "input",
  },
  {
    autoComplete: "email",
    inputType: "email",
    label: "Email:",
    name: "email",
    type: "input",
  },
  {
    className: "contact-message-field",
    label: "Message:",
    name: "message",
    rows: 3,
    type: "textarea",
  },
];
