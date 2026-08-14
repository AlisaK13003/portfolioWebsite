import type { ProjectAction } from "../data/projects";
import { useAdaptiveProjectAction } from "../hooks/useAdaptiveProjectAction";

export function ProjectActionLink({ action }: { action: ProjectAction }) {
  const handleClick = useAdaptiveProjectAction(action);

  return (
    <a href={action.href} target="_blank" rel="noopener noreferrer" aria-label={action.ariaLabel} onClick={handleClick}>
      {action.icon ? (
        <img
          className={`button-icon${action.iconClassName ? ` ${action.iconClassName}` : ""}`}
          src={action.icon}
          alt=""
        />
      ) : null}
      <span>{action.label}</span>
    </a>
  );
}
