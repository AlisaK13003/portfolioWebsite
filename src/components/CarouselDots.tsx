type CarouselDotItem = {
  key: string;
  label: string;
};

type CarouselDotsProps = {
  activeIndex: number;
  className: string;
  dotClassName: string;
  items: CarouselDotItem[];
  label: string;
  onSelect: (index: number) => void;
};

export function CarouselDots({
  activeIndex,
  className,
  dotClassName,
  items,
  label,
  onSelect,
}: CarouselDotsProps) {
  return (
    <div className={className} aria-label={label}>
      {items.map((item, index) => (
        <button
          key={item.key}
          className={dotClassName}
          type="button"
          aria-label={item.label}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
