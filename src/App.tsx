import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FadeInSection from './components/ux/FadeInSection';
import { BackgroundBeams } from './components/ux/BackgroundBeams';
import { Hero, AboutMe, Portfolio, Blogs, ContactMe } from './pages/home/index'; // Importing from the combined components file

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
      
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Portfolio />
      </FadeInSection>
      <FadeInSection>
        <Blogs />
      </FadeInSection>
      <FadeInSection>
        <ContactMe />
      </FadeInSection>
      <Footer />
    </div>
  );
};

export default App;
