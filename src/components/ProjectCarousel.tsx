import { projects, type Project } from "../data/projects";
import { useCarousel } from "../hooks/useCarousel";
import { ProjectCarouselControls } from "./ProjectCarouselControls";
import { ProjectCarouselDots } from "./ProjectCarouselDots";
import { ProjectIslandCard } from "./ProjectIslandCard";

type ProjectCarouselProps = {
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  onOpenProject: (project: Project) => void;
};

export function ProjectCarousel({ activeIndex, onActiveIndexChange, onOpenProject }: ProjectCarouselProps) {
  const carousel = useCarousel({
    itemCount: projects.length,
    activeIndex,
    onActiveIndexChange,
    transitionDuration: 320,
  });
  const previousIndex = (carousel.activeIndex - 1 + projects.length) % projects.length;
  const followingIndex = (carousel.activeIndex + 1) % projects.length;

  return (
    <div className="projects-carousel-shell">
      <div className="projects-grid" data-projects-grid>
        {projects.map((project, index) => (
          <ProjectIslandCard
            key={project.id}
            project={project}
            isActive={index === carousel.activeIndex}
            isPrevious={index === previousIndex}
            isNext={index === followingIndex}
            direction={carousel.direction}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>

      <ProjectCarouselControls onPrevious={carousel.goToPrevious} onNext={carousel.goToNext} />
      <ProjectCarouselDots
        projects={projects}
        activeIndex={carousel.activeIndex}
        onSelectProject={carousel.setActiveIndex}
      />
    </div>
  );
}
