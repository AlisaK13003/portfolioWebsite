import type { ContactField } from "../hooks/useContactForm";
import type { contactFields } from "../data/contact";

type ContactFormFieldProps = {
  field: (typeof contactFields)[number];
  isInvalid: boolean;
  onInput: (field: ContactField, value: string, input: HTMLInputElement | HTMLTextAreaElement) => void;
};

export function ContactFormField({ field, isInvalid, onInput }: ContactFormFieldProps) {
  const inputClassName = isInvalid ? "is-invalid" : undefined;
  const sharedProps = {
    className: inputClassName,
    name: field.name,
    required: true,
    "aria-invalid": isInvalid,
  };

  return (
    <label className={field.className}>
      <span>{field.label}</span>
      {field.type === "textarea" ? (
        <textarea
          {...sharedProps}
          rows={field.rows}
          onInput={(event) => onInput(field.name, event.currentTarget.value, event.currentTarget)}
        />
      ) : (
        <input
          {...sharedProps}
          type={field.inputType}
          autoComplete={field.autoComplete}
          onInput={(event) => onInput(field.name, event.currentTarget.value, event.currentTarget)}
        />
      )}
    </label>
  );
}
