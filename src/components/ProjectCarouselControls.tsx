type ProjectCarouselControlsProps = {
  onNext: () => void;
  onPrevious: () => void;
};

export function ProjectCarouselControls({ onNext, onPrevious }: ProjectCarouselControlsProps) {
  return (
    <div className="projects-carousel-controls" aria-label="Project carousel controls">
      <button
        className="carousel-arrow carousel-arrow-prev"
        type="button"
        aria-label="Previous project"
        onClick={onPrevious}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        type="button"
        aria-label="Next project"
        onClick={onNext}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
    </div>
  );
}
