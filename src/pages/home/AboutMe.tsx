import React, { useRef } from 'react';
import aboutPhoto from '../../assets/aboutMe_photo.jpg'; // Adjust the path and filename
import decoration from '../../assets/swirl2.svg'; // New image
import sparkles from '../../assets/sparkles.svg'; // Import the new sparkles image

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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-base md:text-lg lg:text-xl mb-4">
            I am a frontend developer specializing in React and aiming to break into the UI/UX design
            and engineering industry. I have way too many interests in a variety of fields that allow
            me to be creative in my craft and plays a role in my adaptability. I would also love to talk to you
            about them!
            <br/>
            <br/>
            p.s. this developer is lazy and has no finished projects yet. lots of ideas though, so stay tuned!
          </p>
          <p className="text-base md:text-lg lg:text-xl font-bold text-secondary flex items-center">
            <img 
              src={sparkles} 
              alt="Sparkles" 
              className="inline-block w-6 h-6 mr-2 align-middle" // Adjust size and position
            />
            Interests: <span className="font-normal text-white ml-2">gaming, architecture, rocks & minerals, astronomy.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
