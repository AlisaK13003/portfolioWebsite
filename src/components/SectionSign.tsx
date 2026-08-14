import { useRestartableAnimation } from "../hooks/useRestartableAnimation";

type SectionSignProps = {
  id: string;
  label: string;
};

export function SectionSign({ id, label }: SectionSignProps) {
  const {
    activeValue: isSwinging,
    clearAnimation,
    restartAnimation,
  } = useRestartableAnimation(false);

  return (
    <button
      className={`section-sign${isSwinging ? " is-swinging" : ""}`}
      type="button"
      aria-label={`Swing ${label.toLowerCase()} sign`}
      onClick={() => restartAnimation(true)}
      onAnimationEnd={clearAnimation}
    >
      <img src="assets/sign.png" alt="" loading="lazy" decoding="async" />
      <h2 id={id}>{label}</h2>
    </button>
  );
}
