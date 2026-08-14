import { useCallback, type MouseEvent } from "react";
import { isSectionId, sectionIds } from "../data/navigation";
import { useActiveSection } from "./useActiveSection";
import { useInitialScrollReset } from "./useInitialScrollReset";
import { useSmoothSectionScroll } from "./useSmoothSectionScroll";

export function usePortfolioNavigation(closeMenu: () => void) {
  const { cancelScroll, scrollToSection } = useSmoothSectionScroll();
  const { activeSection, setActiveSection } = useActiveSection(sectionIds, "home", isSectionId);

  useInitialScrollReset(isSectionId, cancelScroll);

  const handleNavClick = useCallback(
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      const sectionId = href.slice(1);

      if (isSectionId(sectionId)) {
        const section = document.getElementById(sectionId);

        if (!section) {
          return;
        }

        event.preventDefault();
        setActiveSection(sectionId);
        closeMenu();
        window.history.pushState(null, "", href);
        scrollToSection(section);
      }
    },
    [closeMenu, scrollToSection, setActiveSection],
  );

  return { activeSection, handleNavClick };
}
