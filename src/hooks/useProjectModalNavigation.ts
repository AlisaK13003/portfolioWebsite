import { useCallback, useMemo } from "react";
import { projects, type Project } from "../data/projects";

export function useProjectModalNavigation(
  project: Project | null,
  onProjectChange: (project: Project) => void,
) {
  const currentProjectIndex = useMemo(
    () => (project ? projects.findIndex((candidate) => candidate.id === project.id) : -1),
    [project],
  );

  const openAdjacentProject = useCallback(
    (direction: number) => {
      if (currentProjectIndex < 0) {
        return;
      }

      const nextIndex = (currentProjectIndex + direction + projects.length) % projects.length;
      onProjectChange(projects[nextIndex]);
    },
    [currentProjectIndex, onProjectChange],
  );

  return {
    openNextProject: () => openAdjacentProject(1),
    openPreviousProject: () => openAdjacentProject(-1),
  };
}
