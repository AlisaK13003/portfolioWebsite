import type { CSSProperties } from "react";
import { projects, type Project } from "../data/projects";
import { useCarousel } from "../hooks/useCarousel";
import { useProjectCarouselHeight } from "../hooks/useProjectCarouselHeight";
import { CarouselControls } from "./CarouselControls";
import { CarouselDots } from "./CarouselDots";
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
  const { carouselHeight, setCardRef } = useProjectCarouselHeight(carousel.activeIndex);
  const previousIndex = (carousel.activeIndex - 1 + projects.length) % projects.length;
  const followingIndex = (carousel.activeIndex + 1) % projects.length;

  return (
    <div
      className="projects-carousel-shell"
      style={{ "--projects-carousel-height": carouselHeight } as CSSProperties}
    >
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
            setRef={(node) => setCardRef(index, node)}
          />
        ))}
      </div>

      <CarouselControls
        className="projects-carousel-controls"
        label="Project carousel controls"
        previousLabel="Previous project"
        nextLabel="Next project"
        onPrevious={carousel.goToPrevious}
        onNext={carousel.goToNext}
      />
      <CarouselDots
        className="project-dots"
        dotClassName="project-dot"
        label="Project carousel position"
        items={projects.map((project) => ({ key: project.id, label: `Show ${project.title}` }))}
        activeIndex={carousel.activeIndex}
        onSelect={carousel.setActiveIndex}
      />
    </div>
  );
}
