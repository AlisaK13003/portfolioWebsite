import type { Project } from "../data/projects";
import { ProjectActionLink } from "./ProjectActionLink";

type ProjectModalActionsProps = {
  project: Project;
};

export function ProjectModalActions({ project }: ProjectModalActionsProps) {
  return (
    <div className="project-modal-actions">
      {project.actions.map((action) => (
        <ProjectActionLink key={`${project.id}-${action.label}`} action={action} />
      ))}
    </div>
  );
}
