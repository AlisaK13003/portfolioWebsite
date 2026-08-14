import { useCallback, useState } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { usePortfolioNavigation } from "../hooks/usePortfolioNavigation";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const { activeSection, handleNavClick } = usePortfolioNavigation(closeMenu);

  useEscapeKey(closeMenu);

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

        <NavLinks
          className="nav-links nav-links-desktop"
          dataNodeId="9:9"
          activeSection={activeSection}
          onNavigate={handleNavClick}
        />

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
      <MobileMenu activeSection={activeSection} onNavigate={handleNavClick} />
    </header>
  );
}
