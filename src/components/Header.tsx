import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header: React.FC = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
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
    }, 500);
  };

  return (
    <header className={`bg-primary fixed w-full top-0 z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto flex justify-center py-4 tsukimi-rounded-regular">
        <div className="flex space-x-8">
          {/* Use HashLink for scrolling */}
          <HashLink
            to="/#home"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Home
          </HashLink>{/*
          <HashLink
            to="/#about"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            About
          </HashLink>
          <HashLink
            to="/#portfolio"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Portfolio
          </HashLink>
          <HashLink
            to="/#blogs"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Blogs
          </HashLink>
          <HashLink
            to="/#contact"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
            onClick={handleClick}
          >
            Contact
          </HashLink>*/}
          {/* Use Link for full page navigation */}
          <Link
            to="/page1"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
          >
            Project #1
          </Link>
          <Link
            to="/page2"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
          >
            Project #2
          </Link>
          <Link
            to="/page3"
            className="bg-primary text-black px-3 py-2 rounded-[30px] hover:bg-primary hover:text-white transition duration-200"
          >
            Project #3
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
