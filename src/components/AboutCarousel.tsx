import type { CSSProperties } from "react";
import { aboutCards } from "../data/about";
import { useAboutCarouselMeasurements } from "../hooks/useAboutCarouselMeasurements";
import { useCarousel } from "../hooks/useCarousel";
import { useRestartableAnimation } from "../hooks/useRestartableAnimation";
import { AboutCard } from "./AboutCard";
import { CarouselControls } from "./CarouselControls";
import { CarouselDots } from "./CarouselDots";

export function AboutCarousel() {
  const {
    activeValue: shakingBoard,
    clearAnimation: clearBoardShake,
    restartAnimation: shakeBoard,
  } = useRestartableAnimation<string | null>(null);
  const carousel = useCarousel({ itemCount: aboutCards.length, transitionDuration: 280 });
  const { aboutCardHeight, aboutPaperHeight, setCardRef } = useAboutCarouselMeasurements(carousel.activeIndex);

  return (
    <div
      className="about-carousel-shell"
      style={
        {
          "--about-mobile-card-height": aboutCardHeight,
          "--about-mobile-paper-height": aboutPaperHeight,
        } as CSSProperties
      }
    >
      <div className="about-card-list">
        {aboutCards.map((card, index) => (
          <AboutCard
            key={card.title}
            card={card}
            direction={carousel.direction}
            isActive={index === carousel.activeIndex}
            isShaking={shakingBoard === card.title}
            onShake={() => shakeBoard(card.title)}
            onShakeEnd={clearBoardShake}
            setRef={(node) => setCardRef(index, node)}
          />
        ))}
      </div>

      <CarouselControls
        className="about-carousel-controls"
        label="About carousel controls"
        previousLabel="Previous about card"
        nextLabel="Next about card"
        onPrevious={carousel.goToPrevious}
        onNext={carousel.goToNext}
      />
      <CarouselDots
        className="about-dots"
        dotClassName="about-dot"
        label="About carousel position"
        items={aboutCards.map((card) => ({ key: card.title, label: `Show ${card.title}` }))}
        activeIndex={carousel.activeIndex}
        onSelect={carousel.setActiveIndex}
      />
    </div>
  );
}
