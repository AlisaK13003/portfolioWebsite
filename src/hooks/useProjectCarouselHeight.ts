import { useCallback, useLayoutEffect, useRef, useState } from "react";

type ProjectCarouselHeight = {
  carouselHeight: string;
  setCardRef: (index: number, node: HTMLElement | null) => void;
};

export function useProjectCarouselHeight(activeIndex: number): ProjectCarouselHeight {
  const [carouselHeight, setCarouselHeight] = useState("0px");
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const scheduledFrame = useRef<number | null>(null);

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

  const scheduleSyncCarouselHeight = useCallback(() => {
    if (scheduledFrame.current !== null) {
      return;
    }

    scheduledFrame.current = window.requestAnimationFrame(() => {
      scheduledFrame.current = null;
      syncCarouselHeight();
    });
  }, [syncCarouselHeight]);

  const setCardRef = useCallback((index: number, node: HTMLElement | null) => {
    cardRefs.current[index] = node;
  }, []);

  useLayoutEffect(() => {
    syncCarouselHeight();
    const activeCard = cardRefs.current[activeIndex];
    const resizeObserver =
      typeof ResizeObserver !== "undefined" && activeCard ? new ResizeObserver(scheduleSyncCarouselHeight) : null;

    if (activeCard) {
      resizeObserver?.observe(activeCard);
    }
    window.addEventListener("resize", scheduleSyncCarouselHeight);

    return () => {
      if (scheduledFrame.current !== null) {
        window.cancelAnimationFrame(scheduledFrame.current);
        scheduledFrame.current = null;
      }
      resizeObserver?.disconnect();
      window.removeEventListener("resize", scheduleSyncCarouselHeight);
    };
  }, [activeIndex, scheduleSyncCarouselHeight, syncCarouselHeight]);

  return { carouselHeight, setCardRef };
}
