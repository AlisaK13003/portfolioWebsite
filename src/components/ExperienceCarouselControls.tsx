type ExperienceCarouselControlsProps = {
  onNext: () => void;
  onPrevious: () => void;
};

export function ExperienceCarouselControls({ onNext, onPrevious }: ExperienceCarouselControlsProps) {
  return (
    <div className="experience-carousel-controls" aria-label="Experience carousel controls">
      <button
        className="carousel-arrow carousel-arrow-prev"
        type="button"
        aria-label="Previous experience"
        onClick={onPrevious}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        type="button"
        aria-label="Next experience"
        onClick={onNext}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
    </div>
  );
}
