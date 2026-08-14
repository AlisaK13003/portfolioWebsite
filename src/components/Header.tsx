import { useCallback, useState, type MouseEvent } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useInitialScrollReset } from "../hooks/useInitialScrollReset";
import { useSmoothSectionScroll } from "../hooks/useSmoothSectionScroll";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

const sectionIds = ["home", "projects", "experience", "about", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

function isSectionId(value: string): value is SectionId {
  return (sectionIds as readonly string[]).includes(value);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cancelScroll, scrollToSection } = useSmoothSectionScroll();
  const { activeSection, setActiveSection } = useActiveSection(sectionIds, "home", isSectionId);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useInitialScrollReset(isSectionId, cancelScroll);
  useEscapeKey(closeMenu);

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
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
  };

  return (
    <header className={`site-header${isMenuOpen ? " is-open" : ""}`}>
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <img className="nav-board" src="assets/navbar.png" alt="" />
        <button
          className="lantern-toggle"
          type="button"
          aria-label="Dark mode coming soon"
          disabled
        />

        <div className="nav-links nav-links-desktop" data-node-id="9:9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
              onClick={handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-mobile-row" data-node-id="265:44">
          <a
            className="nav-title"
            href="#home"
            aria-current={activeSection === "home" ? "page" : undefined}
            onClick={handleNavClick("#home")}
          >
            Alisa&apos;s Portfolio
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <img src="assets/hamburgerIcon.png" alt="" />
          </button>
        </div>
      </nav>

      <button className="menu-backdrop" type="button" aria-label="Close navigation menu" onClick={() => setIsMenuOpen(false)} />
      <div className="mobile-menu" id="mobile-menu">
        <img className="sidebar-board" src="assets/sidebar.png" alt="" />
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
            onClick={handleNavClick(item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
