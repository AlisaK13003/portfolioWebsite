import { useState } from "react";
import type { Project } from "../data/projects";

function getProjectIndex(projects: Project[], project: Project) {
  return projects.findIndex((candidate) => candidate.id === project.id);
}

function getInitialProjectIndex(projects: Project[]) {
  return Math.max(
    0,
    projects.findIndex((project) => project.isActive),
  );
}

export function useProjectSelection(projects: Project[]) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(() => getInitialProjectIndex(projects));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const setActiveProject = (project: Project) => {
    const projectIndex = getProjectIndex(projects, project);

    if (projectIndex >= 0) {
      setActiveProjectIndex(projectIndex);
    }
  };

  const openProject = (project: Project) => {
    setActiveProject(project);
    setSelectedProject(project);
  };

  const changeModalProject = (project: Project) => {
    setActiveProject(project);
    setSelectedProject(project);
  };

  return {
    activeProjectIndex,
    changeModalProject,
    closeProject: () => setSelectedProject(null),
    openProject,
    selectedProject,
    setActiveProjectIndex,
  };
}
