import type { AboutCard } from "../data/about";

type AboutCarouselDotsProps = {
  activeIndex: number;
  cards: AboutCard[];
  onSelect: (index: number) => void;
};

export function AboutCarouselDots({ activeIndex, cards, onSelect }: AboutCarouselDotsProps) {
  return (
    <div className="about-dots" aria-label="About carousel position">
      {cards.map((card, index) => (
        <button
          key={card.title}
          className="about-dot"
          type="button"
          aria-label={`Show ${card.title}`}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
