import { aboutIntro } from "../data/about";
import { AboutCarousel } from "./AboutCarousel";
import { ButterflyButton } from "./Butterfly";
import { SectionSign } from "./SectionSign";

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <ButterflyButton className="decor-butterfly decor-butterfly-about-gap" />
      <ButterflyButton className="decor-butterfly decor-butterfly-about-currently" />
      <SectionSign id="about-title" label="About Me" />

      <div className="about-intro">
        {aboutIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <AboutCarousel />
    </section>
  );
}
