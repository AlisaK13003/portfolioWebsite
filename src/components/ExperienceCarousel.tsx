import { experienceItems } from "../data/experience";
import { useCarousel } from "../hooks/useCarousel";
import { CarouselControls } from "./CarouselControls";
import { CarouselDots } from "./CarouselDots";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceCarousel() {
  const carousel = useCarousel({ itemCount: experienceItems.length, transitionDuration: 280 });

  return (
    <div className="experience-carousel-shell">
      <div className="experience-list">
        {experienceItems.map((item, index) => (
          <ExperienceCard
            key={item.company}
            item={item}
            isActive={index === carousel.activeIndex}
            direction={carousel.direction}
          />
        ))}
      </div>

      <CarouselControls
        className="experience-carousel-controls"
        label="Experience carousel controls"
        previousLabel="Previous experience"
        nextLabel="Next experience"
        onPrevious={carousel.goToPrevious}
        onNext={carousel.goToNext}
      />
      <CarouselDots
        className="experience-dots"
        dotClassName="experience-dot"
        label="Experience carousel position"
        items={experienceItems.map((item) => ({ key: item.company, label: `Show ${item.company}` }))}
        activeIndex={carousel.activeIndex}
        onSelect={carousel.setActiveIndex}
      />
    </div>
  );
}
