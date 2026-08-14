import type { Project } from "../data/projects";
import { ProjectFacts } from "./ProjectFacts";

type ProjectModalHeaderProps = {
  onClose: () => void;
  project: Project;
};

export function ProjectModalHeader({ onClose, project }: ProjectModalHeaderProps) {
  return (
    <>
      <button className="project-modal-close" type="button" aria-label="Close project details" onClick={onClose}>
        <img src="assets/exitButton.png" alt="" loading="lazy" decoding="async" />
      </button>
      <h2 id="project-modal-title">{project.title}</h2>
      <p className="project-modal-subtitle" hidden={!project.caseStudy.subtitle}>
        {project.caseStudy.subtitle}
      </p>
      <ProjectFacts facts={project.caseStudy.facts} title={project.title} />
      <ul className="project-modal-tags" aria-label="Project tags" hidden={project.hideModalTags ?? true}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );
}
