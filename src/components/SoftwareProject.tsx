import React from 'react';
import '../index.css';

interface SoftwareProjectProps {
  image?: string;
  color?: string;
  name: string;
  githubLink: string;
  liveDemoLink: string;
}

const SoftwareProject: React.FC<SoftwareProjectProps> = ({ image, color, name, githubLink, liveDemoLink }) => {
  return (
    <div className="relative group w-full h-full sm:w-[298px] sm:h-[360px]">
      {image ? (
        <img src={image} alt={name} className="object-cover rounded-[20px] w-full h-full" />
      ) : (
        <div className="rounded-[20px] w-full h-full" style={{ backgroundColor: color }}></div>
      )}
      <div className="overlay-transition bg-accent bg-opacity-75 text-white py-4 px-4 group-hover:rounded-[20px]">
        <div className="flex flex-col justify-end h-full">
          <span className="text-lg font-semibold text-left fade-text">{name}</span>
          <div className="button-transition flex flex-col gap-8">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-secondary px-4 py-2 text-white rounded-[30px] tsukimi-rounded-medium w-full text-center">GitHub Repo</a>
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="bg-secondary px-6 py-2 text-white rounded-[30px] tsukimi-rounded-medium w-full text-center">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProject;
