// src/components/Portfolio.tsx
import React, { useState } from 'react';
import SoftwareProject from '../../components/SoftwareProject';
import designImage1 from '../../assets/bwPhoto2.jpg'; // Replace with actual design paths
import designImage2 from '../../assets/bwPhoto.webp';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="portfolio" className="py-16 tsukimi-rounded-regular min-h-[500px] md:min-h-screen-50 lg:min-h-screen-75">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-[30px] tsukimi-rounded-medium ${
              activeCategory === 'software' ? 'bg-accent text-white' : 'bg-secondary text-black'
            }`}
            onClick={() => handleCategoryChange('software')}
          >
            Software
          </button>
          <button
            className={`px-4 py-2 rounded-[30px] tsukimi-rounded-medium ${
              activeCategory === 'design' ? 'bg-accent text-white' : 'bg-secondary text-black'
            }`}
            onClick={() => handleCategoryChange('design')}
          >
            Design
          </button>
        </div>
        <div className="min-h-[500px] md:min-h-screen-50 lg:min-h-screen-75">
          {activeCategory === 'software' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <SoftwareProject
                image={designImage1}
                name="Budget Tracker"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Project 2"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage2}
                name="AI Customer Support"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage2}
                name="Automated Storage"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <SoftwareProject
                image={designImage1}
                name="Design 1"
                githubLink="#"
                liveDemoLink="#"
              />
              <SoftwareProject
                image={designImage2}
                name="Design 2"
                githubLink="#"
                liveDemoLink="#"
              />
              <SoftwareProject
                image={designImage1}
                name="Design 3"
                githubLink="#"
                liveDemoLink="#"
              />
              <SoftwareProject
                image={designImage2}
                name="Design 4"
                githubLink="#"
                liveDemoLink="#"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
