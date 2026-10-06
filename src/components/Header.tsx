import { useCallback, useState } from "react";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { usePortfolioNavigation } from "../hooks/usePortfolioNavigation";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const { activeSection, handleNavClick } = usePortfolioNavigation(closeMenu);

  useEscapeKey(closeMenu);

  return (
    <header className={`site-header${isMenuOpen ? " is-open" : ""}`}>
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <img className="nav-board theme-light-asset" src="/assets/navbar.png" alt="" />
        <img className="nav-board theme-dark-asset" src="/assets/darkMode/navbarDark.png" alt="" />
        <button
          className="lantern-toggle"
          type="button"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={isDarkMode}
          onClick={toggleTheme}
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
            <img src="/assets/hamburgerIcon.png" alt="" />
          </button>
        </div>
      </nav>

      <button className="menu-backdrop" type="button" aria-label="Close navigation menu" onClick={() => setIsMenuOpen(false)} />
      <MobileMenu activeSection={activeSection} onNavigate={handleNavClick} />
    </header>
  );
}
