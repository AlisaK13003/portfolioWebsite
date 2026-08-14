import { useEffect } from "react";

export function useInitialScrollReset(
  isSectionId: (value: string) => boolean,
  cancelActiveScroll: () => void,
) {
  useEffect(() => {
    document.documentElement.dataset.theme = "light";
    localStorage.removeItem("portfolio-theme");

    const resetInitialScrollPosition = () => {
      cancelActiveScroll();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (isSectionId(window.location.hash.slice(1))) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    resetInitialScrollPosition();
    const handleLoad = () => window.requestAnimationFrame(resetInitialScrollPosition);
    const handlePageShow = () => window.requestAnimationFrame(resetInitialScrollPosition);

    window.addEventListener("load", handleLoad, { once: true });
    window.addEventListener("pageshow", handlePageShow, { once: true });

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [cancelActiveScroll, isSectionId]);
}
