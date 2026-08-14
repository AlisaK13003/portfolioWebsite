import type { Project } from "../data/projects";
import { ButterflyButton } from "./Butterfly";
import { ProjectCarousel } from "./ProjectCarousel";
import { SectionSign } from "./SectionSign";

type ProjectsProps = {
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  onOpenProject: (project: Project) => void;
};

export function Projects({ activeIndex, onActiveIndexChange, onOpenProject }: ProjectsProps) {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title" data-projects-section>
      <ButterflyButton className="decor-butterfly decor-butterfly-projects-east" />
      <SectionSign id="projects-title" label="Projects" />
      <ProjectCarousel
        activeIndex={activeIndex}
        onActiveIndexChange={onActiveIndexChange}
        onOpenProject={onOpenProject}
      />
    </section>
  );
}
