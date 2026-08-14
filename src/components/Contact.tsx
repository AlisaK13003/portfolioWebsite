import { ButterflyButton } from "./Butterfly";
import { ContactBoard } from "./ContactBoard";
import { SectionSign } from "./SectionSign";

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <ButterflyButton className="decor-butterfly decor-butterfly-contact-west" />
      <SectionSign id="contact-title" label="Contact Me" />
      <ContactBoard />
    </section>
  );
}
