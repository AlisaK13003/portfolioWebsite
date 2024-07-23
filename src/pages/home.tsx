import React from 'react';
import Hero from './home/Hero';
import AboutMe from './home/AboutMe';
import Portfolio from './home/Portfolio';
import Blogs from './home/Blogs';
import ContactMe from './home/ContactMe';

const Home: React.FC = () => {
  return (
    <main className="">
      
      <Hero />
      <AboutMe />
      <Portfolio />
      <Blogs />
      <ContactMe />
    </main>
  );
};

export default Home;
