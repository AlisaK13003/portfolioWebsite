import React, { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import "./Header.css";

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-title">alisa katsionova</div>
        <div className="divider" /> {/* Divider should go right here */}

        <div className="left-controls">
          <div className="mobile-toggle">
            <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode} />
          </div>

          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>



      <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-item">home</div>
        <div className="divider" />
        <div className="nav-item">about</div>
        <div className="divider" />
        <div className="nav-item">career</div>
        <div className="divider" />
        <div className="nav-item">contact</div>
        <div className="divider" />

        {/* ThemeToggle (desktop only) */}
        <div className="nav-toggle">
          <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;
