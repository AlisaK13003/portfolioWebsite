import React, { useRef } from 'react';
import aboutPhoto from '../../assets/bwPhoto.webp'; // Adjust the path and filename
import decoration from '../../assets/swirl2.svg'; // New image

const About: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const decorationRef = useRef<HTMLImageElement>(null);

  return (
    <section id="about" className="bg-accent text-white py-16 tsukimi-rounded-regular">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center">
        <div className="relative">
          <img 
            src={decoration} 
            alt="Decoration" 
            ref={decorationRef}
            className="absolute z-20 transform size-full"
            style={{ left: '-50%'}} // Adjust size and position
          />
          <img
            src={aboutPhoto}
            alt="About Me"
            ref={imgRef}
            className="w-[20vh] rounded-[20px]"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-secondary">About Me</h2>
          <p className="text-base md:text-lg lg:text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel lorem euismod, facilisis erat at, ultricies lorem. 
            Nullam ac commodo urna. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
            curae; Aenean vitae nunc vehicula, posuere eros a, fermentum nulla.
          </p>
          <p className="text-base md:text-lg lg:text-xl font-bold text-secondary">
            Interests: <span className="font-normal text-white">gaming, architecture, rocks & minerals, astronomy.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
