import React, { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import "./Header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => { 
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  };

  return (
    <header className="header">
      {/* <div className="logo-cell">alisa katsionova</div>
      <nav className="nav">
        <a href="#home" className="nav-item">home</a>
        <a href="#about" className="nav-item">about</a>
        <a href="#career" className="nav-item">career</a>
        <a href="#contact" className="nav-item">contact</a> */}
        <div className="theme-toggle">
          <ThemeToggle />
        </div>
      {/* </nav> */}
    </header>
  );
};

export default Header;
