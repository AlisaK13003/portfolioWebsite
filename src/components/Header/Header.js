// Header.js
import React from "react";
import ThemeToggle from "../ui/ThemeToggle";
import "./Header.css";

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="header">
      <div className="logo-cell">alisa katsionova</div>
      <div className="right-cell">
        <nav className="nav">
          <a href="#home" className="nav-item">home</a>
          <a href="#about" className="nav-item">about</a>
          <a href="#career" className="nav-item">career</a>
          <a href="#contact" className="nav-item">contact</a>
        </nav>
        <div className="nav-separator" />
        <div className="toggle-cell">
          <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;
