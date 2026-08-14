import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type AboutCarouselMeasurements = {
  aboutCardHeight: string;
  aboutPaperHeight: string;
  setCardRef: (index: number, node: HTMLElement | null) => void;
};

export function useAboutCarouselMeasurements(activeIndex: number): AboutCarouselMeasurements {
  const [aboutCardHeight, setAboutCardHeight] = useState("0px");
  const [aboutPaperHeight, setAboutPaperHeight] = useState("auto");
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const syncCarouselHeight = useCallback(() => {
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
  }, []);

  const setCardRef = useCallback((index: number, node: HTMLElement | null) => {
    cardRefs.current[index] = node;
  }, []);

  useLayoutEffect(() => {
    syncCarouselHeight();

    const frame = window.requestAnimationFrame(syncCarouselHeight);
    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex, syncCarouselHeight]);

  useEffect(() => {
    window.addEventListener("resize", syncCarouselHeight);

    return () => window.removeEventListener("resize", syncCarouselHeight);
  }, [syncCarouselHeight]);

  return { aboutCardHeight, aboutPaperHeight, setCardRef };
}
