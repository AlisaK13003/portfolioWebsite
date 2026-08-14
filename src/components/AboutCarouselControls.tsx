type AboutCarouselControlsProps = {
  onNext: () => void;
  onPrevious: () => void;
};

export function AboutCarouselControls({ onNext, onPrevious }: AboutCarouselControlsProps) {
  return (
    <div className="about-carousel-controls" aria-label="About carousel controls">
      <button
        className="carousel-arrow carousel-arrow-prev"
        type="button"
        aria-label="Previous about card"
        onClick={onPrevious}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        type="button"
        aria-label="Next about card"
        onClick={onNext}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
    </div>
  );
}
