// src/components/Header.tsx
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.classList.add('clicked');
    setTimeout(() => {
      target.classList.remove('clicked');
    }, 500); // Adjust this duration as needed
  };

  return (
    <header className={`bg-primary fixed w-full top-0 z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto flex justify-center py-4 tsukimi-rounded-regular">
        <div className="flex space-x-8">
          <a
            href="#home"
            className="bg-secondary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="bg-secondary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            About
          </a>

          <a
            href="#portfolio"
            className="bg-secondary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Portfolio
          </a>
          <a
            href="#blogs"
            className="bg-secondary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="bg-secondary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
