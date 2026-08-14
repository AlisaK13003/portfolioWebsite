type CarouselControlsProps = {
  className: string;
  label: string;
  nextLabel: string;
  onNext: () => void;
  onPrevious: () => void;
  previousLabel: string;
};

export function CarouselControls({
  className,
  label,
  nextLabel,
  onNext,
  onPrevious,
  previousLabel,
}: CarouselControlsProps) {
  return (
    <div className={className} aria-label={label}>
      <button
        className="carousel-arrow carousel-arrow-prev"
        type="button"
        aria-label={previousLabel}
        onClick={onPrevious}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        type="button"
        aria-label={nextLabel}
        onClick={onNext}
      >
        <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
      </button>
    </div>
  );
}
