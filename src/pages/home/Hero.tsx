// src/pages/Home/Hero.tsx
import React, { useState, useEffect } from 'react';
import TypingEffect from '../../components/ux/TypingEffect';
import dividingSwirl from '../../assets/swirl3.svg'; // Correct the path
import profilePhoto from '../../assets/bwPhoto.webp'; // Adjust the path and filename
import { BackgroundBeams } from '../../components/ux/BackgroundBeams'; // Import BackgroundBeams

const Hero: React.FC = () => {
  const [key, setKey] = useState(0);

  const handleClick = () => {
    setKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='home' className="bg-primary text-black flex flex-col items-center justify-center tsukimi-rounded-regular text-center relative min-h-screen">
      <BackgroundBeams className="z-0"/> {/* Add BackgroundBeams */}
      <img src={dividingSwirl} alt="My SVG" className="absolute top-16 w-24 h-auto py-2" />
      <img src={profilePhoto} alt="Profile" className="w-[25vh] h-[25vh] mb-16 rounded-full object-cover z-10" />
      <div className="flex flex-wrap justify-center items-center text-6xl tsukimi-rounded-regular mt-8 mb-4 z-10">
        <span>Hi, my name is&nbsp;</span>
        <span onClick={handleClick} className="cursor-pointer inline-block">
          <TypingEffect key={key.toString()} className="text-accent tsukimi-rounded-bold typing-container"/>
        </span>
      </div>
    </section>
  );
};

export default Hero;
