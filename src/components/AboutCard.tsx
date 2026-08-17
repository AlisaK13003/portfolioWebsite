import type { AboutCard as AboutCardData } from "../data/about";
import type { CarouselDirection } from "../hooks/useCarousel";

type AboutCardProps = {
  card: AboutCardData;
  direction: CarouselDirection;
  isActive: boolean;
  isShaking: boolean;
  onShake: () => void;
  onShakeEnd: () => void;
  setRef?: (node: HTMLElement | null) => void;
};

export function AboutCard({ card, direction, isActive, isShaking, onShake, onShakeEnd, setRef }: AboutCardProps) {
  return (
    <article
      ref={setRef}
      className={[
        "about-card",
        isActive ? "is-active" : "",
        isActive && direction === "forward" ? "is-entering-forward" : "",
        isActive && direction === "backward" ? "is-entering-backward" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        className={`about-card-label${isShaking ? " is-seesawing" : ""}`}
        type="button"
        aria-label={card.shakeLabel}
        onClick={onShake}
        onAnimationEnd={onShakeEnd}
      >
        <img src={card.boardImage} alt="" loading="lazy" decoding="async" />
        <h3>{card.title}</h3>
      </button>
      <div className="about-card-paper">
        {card.items ? (
          <ul>
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{card.text}</p>
        )}
      </div>
    </article>
  );
}
