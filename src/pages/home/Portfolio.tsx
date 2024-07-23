import React, { useState } from 'react';
import SoftwareProject from '../../components/SoftwareProject';
import designImage1 from '../../assets/bwPhoto2.jpg'; // Replace with actual design paths
import designImage2 from '../../assets/bwPhoto.webp';
import swirlImage from '../../assets/swirl3.svg'; // Import the swirl image

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="portfolio" className="py-16 tsukimi-rounded-regular">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-accent">Portfolio</h2>
        <div className="flex justify-center mb-8">
          <img src={swirlImage} alt="Swirl" className="w-24 h-auto" /> {/* Add the swirl image */}
        </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {activeCategory === 'software' ? (
            <>
              <SoftwareProject
                color="black"
                name="Pokemon EV Tracker"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Identify that Rock!"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Matryx"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Password Database"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Identify that Rock!"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Identify that Rock!"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />      
              <SoftwareProject
                image={designImage2}
                name="Identify that Rock!"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Identify that Rock!"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
              <SoftwareProject
                image={designImage1}
                name="Identify that Rock!"
                githubLink="https://github.com/your-github-repo"
                liveDemoLink="https://your-live-demo-link.com"
              />
            </>
          ) : (
            <>
              <SoftwareProject
                image={designImage1}
                name="Design 1"
                githubLink="#"
                liveDemoLink="#"
              />
              <SoftwareProject
                image={designImage1}
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
                image={designImage1}
                name="Design 4"
                githubLink="#"
                liveDemoLink="#"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
