import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div class="header">
    <div class="logo-cell">
        alisa katsionova
    </div>
    <nav class="nav">
        <a href="#home" class="nav-item">home</a>
        <a href="#about" class="nav-item">about</a>
        <a href="#career" class="nav-item">career</a>
        <a href="#contact" class="nav-item">contact</a>
    </nav>
    </div>

  );
};

export default Header;
