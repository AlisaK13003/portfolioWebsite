import type { Project } from "../data/projects";
import type { CarouselDirection } from "../hooks/useCarousel";

type ProjectIslandCardProps = {
  direction: CarouselDirection;
  isActive: boolean;
  isNext: boolean;
  isPrevious: boolean;
  project: Project;
  onOpenProject: (project: Project) => void;
  setRef: (node: HTMLElement | null) => void;
};

export function ProjectIslandCard({
  direction,
  isActive,
  isNext,
  isPrevious,
  project,
  onOpenProject,
  setRef,
}: ProjectIslandCardProps) {
  const openProject = () => onOpenProject(project);

  return (
    <article
      ref={setRef}
      className={[
        "project-card",
        isActive ? "is-active" : "",
        isPrevious ? "is-prev" : "",
        isNext ? "is-next" : "",
        isActive && direction === "forward" ? "is-entering-forward" : "",
        isActive && direction === "backward" ? "is-entering-backward" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="project-island"
        role="button"
        tabIndex={0}
        onClick={openProject}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject();
          }
        }}
      >
        <img src="assets/island.png" alt="" loading="lazy" decoding="async" />
        <div className="project-island-content">
          <h3>{project.title}</h3>
          <ul className="project-tags" aria-label="Project tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="project-actions project-island-actions">
            <button
              type="button"
              aria-label={`View ${project.title} project details`}
              onClick={(event) => {
                event.stopPropagation();
                openProject();
              }}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
