import { useState } from "react";

type SectionSignProps = {
  id: string;
  label: string;
};

export function SectionSign({ id, label }: SectionSignProps) {
  const [isSwinging, setIsSwinging] = useState(false);

  return (
    <button
      className={`section-sign${isSwinging ? " is-swinging" : ""}`}
      type="button"
      aria-label={`Swing ${label.toLowerCase()} sign`}
      onClick={() => {
        setIsSwinging(false);
        window.requestAnimationFrame(() => setIsSwinging(true));
      }}
      onAnimationEnd={() => setIsSwinging(false)}
    >
      <img src="assets/sign.png" alt="" loading="lazy" decoding="async" />
      <h2 id={id}>{label}</h2>
    </button>
  );
}
