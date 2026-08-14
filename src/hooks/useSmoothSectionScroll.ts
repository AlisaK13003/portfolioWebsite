import { useCallback, useEffect, useRef } from "react";

export function useSmoothSectionScroll() {
  const activeScrollAnimation = useRef<number | null>(null);

  const cancelScroll = useCallback(() => {
    if (activeScrollAnimation.current) {
      window.cancelAnimationFrame(activeScrollAnimation.current);
      activeScrollAnimation.current = null;
    }
  }, []);

  const scrollToSection = useCallback(
    (section: HTMLElement) => {
      cancelScroll();

      const startY = window.scrollY;
      const headerOffset = window.matchMedia("(max-width: 640px)").matches ? 84 : 190;
      const targetY = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerOffset);
      const distance = targetY - startY;
      const duration = Math.min(Math.max(Math.abs(distance) * 0.55, 420), 900);
      const startTime = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        window.scrollTo({
          top: startY + distance * easedProgress,
          behavior: "auto",
        });

        if (progress < 1) {
          activeScrollAnimation.current = window.requestAnimationFrame(step);
          return;
        }

        activeScrollAnimation.current = null;
      };

      activeScrollAnimation.current = window.requestAnimationFrame(step);
    },
    [cancelScroll],
  );

  useEffect(() => cancelScroll, [cancelScroll]);

  return { cancelScroll, scrollToSection };
}
