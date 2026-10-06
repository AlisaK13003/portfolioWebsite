import { skillCategories } from "../data/skills";
import { useCarousel } from "../hooks/useCarousel";
import { CarouselControls } from "./CarouselControls";
import { SectionSign } from "./SectionSign";
import { SkillCloudCluster } from "./SkillCloudCluster";

export function Skills() {
  const carousel = useCarousel({ itemCount: skillCategories.length, transitionDuration: 280 });
  const category = skillCategories[carousel.activeIndex];

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <SectionSign id="skills-title" label="Skills" />
      <div className="skills-carousel-shell" role="region" aria-roledescription="carousel" aria-label="Skill categories">
        <div
          className="skills-carousel-slide"
          key={category.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`${category.label}, ${carousel.activeIndex + 1} of ${skillCategories.length}`}
        >
          <SkillCloudCluster category={category} />
        </div>
        <CarouselControls
          className="skills-carousel-controls"
          label="Skill category controls"
          previousLabel="Previous skill category"
          nextLabel="Next skill category"
          onPrevious={carousel.goToPrevious}
          onNext={carousel.goToNext}
        />
        <p className="skills-category-status" role="status" aria-atomic="true">
          {category.label}, category {carousel.activeIndex + 1} of {skillCategories.length}
        </p>
      </div>
    </section>
  );
}
