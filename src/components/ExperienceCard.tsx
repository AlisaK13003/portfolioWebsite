import { useState } from "react";
import type { ExperienceItem } from "../data/experience";
import type { CarouselDirection } from "../hooks/useCarousel";

type ExperienceCardProps = {
  direction: CarouselDirection;
  isActive: boolean;
  item: ExperienceItem;
};

export function ExperienceCard({ direction, isActive, item }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={[
        "experience-card",
        isActive ? "is-active" : "",
        isActive && direction === "forward" ? "is-entering-forward" : "",
        isActive && direction === "backward" ? "is-entering-backward" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="experience-paper"
        src={isHovered ? "assets/experiencePaper.png" : "assets/experiencePaperUnfurled.png"}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="experience-content">
        <header className="experience-heading">
          <h3>{item.company}</h3>
          <p>{item.role}</p>
          <span>{item.dates}</span>
        </header>
        <ul className="experience-points">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ul className="experience-tags" aria-label="Experience tags">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
