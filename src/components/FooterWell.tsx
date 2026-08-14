import { useFooterWell } from "../hooks/useFooterWell";

export function FooterWell() {
  const { backgroundPositionX, handleWellClick, isAnimating, isBucketFull } = useFooterWell();

  return (
    <>
      <div
        className={`footer-sprite${isBucketFull ? " is-full" : ""}${isAnimating ? " is-animating" : ""}`}
        style={{ backgroundPositionX }}
        aria-hidden="true"
      />
      <button
        className="footer-well-button"
        type="button"
        aria-label={isBucketFull ? "Empty the well bucket" : "Raise water from the well"}
        onClick={handleWellClick}
      />
    </>
  );
}
