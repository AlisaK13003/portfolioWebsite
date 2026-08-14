import { ButterflyButton } from "./Butterfly";
import { ExperienceCarousel } from "./ExperienceCarousel";
import { SectionSign } from "./SectionSign";

export function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <ButterflyButton className="decor-butterfly decor-butterfly-experience-nw" />
      <SectionSign id="experience-title" label="Experience" />
      <ExperienceCarousel />
    </section>
  );
}
