import { useCallback, useLayoutEffect, useRef, useState } from "react";

type ProjectCarouselHeight = {
  carouselHeight: string;
  setCardRef: (index: number, node: HTMLElement | null) => void;
};

export function useProjectCarouselHeight(activeIndex: number): ProjectCarouselHeight {
  const [carouselHeight, setCarouselHeight] = useState("0px");
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const syncCarouselHeight = useCallback(() => {
    const activeCard = cardRefs.current[activeIndex];

    if (!activeCard) {
      return;
    }

    const measuredHeight = Math.ceil(Math.max(activeCard.scrollHeight, activeCard.getBoundingClientRect().height));

    if (measuredHeight > 0) {
      setCarouselHeight((currentHeight) =>
        currentHeight === `${measuredHeight}px` ? currentHeight : `${measuredHeight}px`,
      );
    }
  }, [activeIndex]);

  const setCardRef = useCallback((index: number, node: HTMLElement | null) => {
    cardRefs.current[index] = node;
  }, []);

  useLayoutEffect(() => {
    syncCarouselHeight();
    const frame = window.requestAnimationFrame(syncCarouselHeight);
    const activeCard = cardRefs.current[activeIndex];
    const resizeObserver =
      typeof ResizeObserver !== "undefined" && activeCard ? new ResizeObserver(syncCarouselHeight) : null;

    if (activeCard) {
      resizeObserver?.observe(activeCard);
    }
    window.addEventListener("resize", syncCarouselHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", syncCarouselHeight);
    };
  }, [activeIndex, syncCarouselHeight]);

  return { carouselHeight, setCardRef };
}
