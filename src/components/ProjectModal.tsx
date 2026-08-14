import { useCallback, useRef } from "react";
import type { Project } from "../data/projects";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useProjectModalFocus } from "../hooks/useProjectModalFocus";
import { useProjectModalNavigation } from "../hooks/useProjectModalNavigation";
import { ProjectCaseStudyBody } from "./ProjectCaseStudyBody";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectModalActions } from "./ProjectModalActions";
import { ProjectModalHeader } from "./ProjectModalHeader";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  onProjectChange: (project: Project) => void;
};

export function ProjectModal({ project, onClose, onProjectChange }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const isOpen = Boolean(project);
  const { openNextProject, openPreviousProject } = useProjectModalNavigation(project, onProjectChange);

  const closeOnEscape = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useProjectModalFocus(project?.id, modalRef, panelRef, bodyRef);
  useBodyScrollLock(isOpen);
  useEscapeKey(closeOnEscape);

  return (
    <div
      className={`project-modal${isOpen ? " is-open" : ""}`}
      aria-hidden={isOpen ? "false" : "true"}
      inert={!isOpen ? true : undefined}
      ref={modalRef}
    >
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
        {project ? <ProjectModalHeader project={project} onClose={onClose} /> : null}
        <div className="project-modal-body" ref={bodyRef}>
          {project ? <ProjectCaseStudyBody sections={project.caseStudy.sections} /> : null}
        </div>
        {project ? <ProjectModalActions project={project} /> : null}
        {project ? <ProjectGallery project={project} /> : null}
      </article>
    </div>
  );
}
