import { useCallback, useRef } from "react";
import type { Project } from "../data/projects";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useProjectModalFocus } from "../hooks/useProjectModalFocus";
import { useProjectModalNavigation } from "../hooks/useProjectModalNavigation";
import { ProjectActionLink } from "./ProjectActionLink";
import { ProjectCaseStudyBody } from "./ProjectCaseStudyBody";
import { ProjectFacts } from "./ProjectFacts";
import { ProjectGallery } from "./ProjectGallery";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  onProjectChange: (project: Project) => void;
};

export function ProjectModal({ project, onClose, onProjectChange }: ProjectModalProps) {
  const panelRef = useRef<HTMLElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const isOpen = Boolean(project);
  const { openNextProject, openPreviousProject } = useProjectModalNavigation(project, onProjectChange);

  const closeOnEscape = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useProjectModalFocus(project?.id, panelRef, bodyRef);
  useBodyScrollLock(isOpen);
  useEscapeKey(closeOnEscape);

  return (
    <div className={`project-modal${isOpen ? " is-open" : ""}`} aria-hidden={isOpen ? "false" : "true"} inert={!isOpen ? true : undefined}>
      <button className="project-modal-backdrop" type="button" aria-label="Close project details" onClick={onClose} />
      <button
        className="project-modal-project-arrow project-modal-project-prev"
        type="button"
        aria-label="Previous project"
        onClick={openPreviousProject}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
      <button
        className="project-modal-project-arrow project-modal-project-next"
        type="button"
        aria-label="Next project"
        onClick={openNextProject}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
      <article
        className="project-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        ref={panelRef}
      >
        <button className="project-modal-close" type="button" aria-label="Close project details" onClick={onClose}>
          <img src="assets/exitButton.png" alt="" loading="lazy" decoding="async" />
        </button>
        <h2 id="project-modal-title">{project?.title ?? ""}</h2>
        <p className="project-modal-subtitle" hidden={!project?.caseStudy.subtitle}>
          {project?.caseStudy.subtitle}
        </p>
        {project ? <ProjectFacts facts={project.caseStudy.facts} title={project.title} /> : null}
        <ul className="project-modal-tags" aria-label="Project tags" hidden={project?.hideModalTags ?? true}>
          {project?.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-modal-body" ref={bodyRef}>
          {project ? <ProjectCaseStudyBody sections={project.caseStudy.sections} /> : null}
        </div>
        <div className="project-modal-actions">
          {project?.actions.map((action) => <ProjectActionLink key={`${project.id}-${action.label}`} action={action} />)}
        </div>
        {project ? <ProjectGallery project={project} /> : null}
      </article>
    </div>
  );
}
