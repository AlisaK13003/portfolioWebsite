// src/components/ProjectBox.tsx
import React from 'react';

interface SoftwareProjectProps {
  image: string;
  name: string;
  githubLink: string;
  liveDemoLink: string;
}

const SoftwareProject: React.FC<SoftwareProjectProps> = ({ image, name, githubLink, liveDemoLink }) => {
  return (
    <div className="relative group">
      <img src={image} alt={name} className="object-cover rounded-[20px] w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 bg-accent bg-opacity-75 text-white rounded-b-[20px] py-2 px-4 transition-all duration-300 transform group-hover:-translate-y-16">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-left">{name}</span> {/* Left align the project name */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-black px-4 py-2 rounded-[30px] tsukimi-rounded-medium hover:bg-secondary">GitHub Repo</a>
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-black px-4 py-2 rounded-[30px] tsukimi-rounded-medium hover:bg-secondary">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProject;
