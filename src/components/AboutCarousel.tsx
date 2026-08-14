import type { CSSProperties } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { aboutCards } from "../data/about";
import { useCarousel } from "../hooks/useCarousel";
import { AboutCard } from "./AboutCard";
import { AboutCarouselControls } from "./AboutCarouselControls";
import { AboutCarouselDots } from "./AboutCarouselDots";

export function AboutCarousel() {
  const [shakingBoard, setShakingBoard] = useState<string | null>(null);
  const [aboutCardHeight, setAboutCardHeight] = useState("0px");
  const [aboutPaperHeight, setAboutPaperHeight] = useState("auto");
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const carousel = useCarousel({ itemCount: aboutCards.length, transitionDuration: 280 });

  const syncCarouselHeight = () => {
    const measurements = cardRefs.current.reduce(
      (sizes, card) => {
        if (!card) {
          return sizes;
        }

        const label = card.querySelector<HTMLElement>(".about-card-label");
        const paper = card.querySelector<HTMLElement>(".about-card-paper");
        const paperContent = paper?.querySelector<HTMLElement>("p, ul");
        const paperStyles = paper ? window.getComputedStyle(paper) : null;
        const cardStyles = window.getComputedStyle(card);
        const previousPaperMinHeight = paper?.style.minHeight;
        const previousPaperHeight = paper?.style.height;

        if (paper) {
          paper.style.minHeight = "0px";
          paper.style.height = "auto";
        }

        const paperPadding =
          Number.parseFloat(paperStyles?.paddingTop ?? "0") +
          Number.parseFloat(paperStyles?.paddingBottom ?? "0");
        const parsedGap = Number.parseFloat(cardStyles.rowGap || cardStyles.gap || "0");
        const cardGap = Number.isFinite(parsedGap) ? parsedGap : 0;
        const contentHeight = paperContent
          ? paperContent.getBoundingClientRect().height || paperContent.scrollHeight
          : 0;
        const measuredPaperHeight = Math.ceil(contentHeight + paperPadding);
        const measuredCardHeight = Math.ceil((label?.offsetHeight ?? 0) + cardGap + measuredPaperHeight);

        if (paper) {
          paper.style.minHeight = previousPaperMinHeight ?? "";
          paper.style.height = previousPaperHeight ?? "";
        }

        return {
          cardHeight: Math.max(sizes.cardHeight, measuredCardHeight),
          paperHeight: Math.max(sizes.paperHeight, measuredPaperHeight),
        };
      },
      { cardHeight: 0, paperHeight: 0 },
    );

    setAboutCardHeight(`${measurements.cardHeight}px`);
    setAboutPaperHeight(`${measurements.paperHeight}px`);
  };

  useLayoutEffect(() => {
    syncCarouselHeight();

    const frame = window.requestAnimationFrame(syncCarouselHeight);
    return () => window.cancelAnimationFrame(frame);
  }, [carousel.activeIndex]);

  useEffect(() => {
    window.addEventListener("resize", syncCarouselHeight);

    return () => window.removeEventListener("resize", syncCarouselHeight);
  }, []);

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
            onShake={() => {
              setShakingBoard(null);
              window.requestAnimationFrame(() => setShakingBoard(card.title));
            }}
            onShakeEnd={() => setShakingBoard(null)}
            setRef={(node) => {
              cardRefs.current[index] = node;
            }}
          />
        ))}
      </div>

      <AboutCarouselControls onPrevious={carousel.goToPrevious} onNext={carousel.goToNext} />
      <AboutCarouselDots activeIndex={carousel.activeIndex} cards={aboutCards} onSelect={carousel.setActiveIndex} />
    </div>
  );
}
