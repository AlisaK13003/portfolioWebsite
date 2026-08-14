import type { Project } from "../data/projects";

type ProjectCarouselDotsProps = {
  activeIndex: number;
  projects: Project[];
  onSelectProject: (index: number) => void;
};

export function ProjectCarouselDots({ activeIndex, projects, onSelectProject }: ProjectCarouselDotsProps) {
  return (
    <div className="project-dots" aria-label="Project carousel position">
      {projects.map((project, index) => (
        <button
          key={project.id}
          className="project-dot"
          type="button"
          aria-label={`Show ${project.title}`}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => onSelectProject(index)}
        />
      ))}
    </div>
  );
}
