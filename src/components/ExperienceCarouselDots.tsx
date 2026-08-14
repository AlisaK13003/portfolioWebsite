import type { ExperienceItem } from "../data/experience";

type ExperienceCarouselDotsProps = {
  activeIndex: number;
  items: ExperienceItem[];
  onSelectItem: (index: number) => void;
};

export function ExperienceCarouselDots({ activeIndex, items, onSelectItem }: ExperienceCarouselDotsProps) {
  return (
    <div className="experience-dots" aria-label="Experience carousel position">
      {items.map((item, index) => (
        <button
          key={item.company}
          className="experience-dot"
          type="button"
          aria-label={`Show ${item.company}`}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => onSelectItem(index)}
        />
      ))}
    </div>
  );
}
