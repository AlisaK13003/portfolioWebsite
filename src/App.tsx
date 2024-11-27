import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FadeInSection from './components/ux/FadeInSection';
import { Hero, AboutMe, Portfolio, Blogs, ContactMe } from './pages/home/index';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div id="home">
                <FadeInSection>
                  <Hero />
                </FadeInSection>
              </div>
              <div id="about">
                <FadeInSection>
                  <AboutMe />
                </FadeInSection>
              </div>
              <div id="portfolio">
                <FadeInSection>
                  <Portfolio />
                </FadeInSection>
              </div>
              <div id="blogs">
                <FadeInSection>
                  <Blogs />
                </FadeInSection>
              </div>
              <div id="contact">
                <FadeInSection>
                  <ContactMe />
                </FadeInSection>
              </div>
            </div>
          }
        />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;
