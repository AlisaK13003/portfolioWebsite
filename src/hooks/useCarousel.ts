import { useEffect, useRef, useState } from "react";

export type CarouselDirection = "forward" | "backward" | null;

type UseCarouselOptions = {
  itemCount: number;
  activeIndex?: number;
  defaultIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  transitionDuration?: number;
};

function normalizeIndex(index: number, itemCount: number) {
  if (itemCount <= 0) {
    return 0;
  }

  return (index + itemCount) % itemCount;
}

export function useCarousel({
  itemCount,
  activeIndex,
  defaultIndex = 0,
  onActiveIndexChange,
  transitionDuration = 280,
}: UseCarouselOptions) {
  const [internalIndex, setInternalIndex] = useState(() => normalizeIndex(defaultIndex, itemCount));
  const [direction, setDirection] = useState<CarouselDirection>(null);
  const transitionTimer = useRef<number | null>(null);
  const isControlled = typeof activeIndex === "number";
  const currentIndex = normalizeIndex(isControlled ? activeIndex : internalIndex, itemCount);

  const getDirection = (index: number): CarouselDirection => {
    const targetIndex = normalizeIndex(index, itemCount);
    const forwardSteps = normalizeIndex(targetIndex - currentIndex, itemCount);
    const backwardSteps = normalizeIndex(currentIndex - targetIndex, itemCount);

    if (forwardSteps === 0) {
      return null;
    }

    if (forwardSteps === backwardSteps) {
      return targetIndex > currentIndex ? "forward" : "backward";
    }

    return forwardSteps < backwardSteps ? "forward" : "backward";
  };

  const setActiveIndex = (index: number, nextDirection: CarouselDirection = getDirection(index), force = false) => {
    const nextIndex = normalizeIndex(index, itemCount);

    if (itemCount <= 0 || (!force && nextIndex === currentIndex)) {
      return;
    }

    if (isControlled) {
      onActiveIndexChange?.(nextIndex);
    } else {
      setInternalIndex(nextIndex);
    }

    setDirection(nextDirection);
  };

  useEffect(() => {
    if (!direction) {
      return;
    }

    if (transitionTimer.current) {
      window.clearTimeout(transitionTimer.current);
    }

    transitionTimer.current = window.setTimeout(() => {
      setDirection(null);
    }, transitionDuration);

    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, [direction, transitionDuration]);

  return {
    activeIndex: currentIndex,
    direction,
    getDirection,
    goToNext: () => setActiveIndex(currentIndex + 1, "forward"),
    goToPrevious: () => setActiveIndex(currentIndex - 1, "backward"),
    setActiveIndex,
  };
}
