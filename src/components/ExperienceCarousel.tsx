import { experienceItems } from "../data/experience";
import { useCarousel } from "../hooks/useCarousel";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceCarouselControls } from "./ExperienceCarouselControls";
import { ExperienceCarouselDots } from "./ExperienceCarouselDots";

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

      <ExperienceCarouselControls onPrevious={carousel.goToPrevious} onNext={carousel.goToNext} />
      <ExperienceCarouselDots
        items={experienceItems}
        activeIndex={carousel.activeIndex}
        onSelectItem={carousel.setActiveIndex}
      />
    </div>
  );
}
