import { ContactForm } from "./ContactForm";

export function ContactBoard() {
  return (
    <div className="contact-board">
      <img src="assets/contactBoard.png" alt="" loading="lazy" decoding="async" />
      <div className="contact-board-content">
        <ContactForm />
      </div>
    </div>
  );
}
