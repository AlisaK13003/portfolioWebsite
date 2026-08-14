import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useFlyingButterfly } from "../hooks/useFlyingButterfly";

type ButterflyButtonProps = {
  className?: string;
};

export function ButterflyButton({ className = "butterfly-friend" }: ButterflyButtonProps) {
  const { flyingButterfly, mode, playButterfly, restingButtonRef } = useFlyingButterfly(className);

  return (
    <>
      <button
        ref={restingButtonRef}
        className={[className, flyingButterfly ? "is-resting-hidden" : ""].filter(Boolean).join(" ")}
        type="button"
        aria-label="Play with butterfly"
        aria-hidden={mode !== "idle"}
        onClick={playButterfly}
      >
        <span />
      </button>
      {flyingButterfly
        ? createPortal(
            <button
              className={[
                flyingButterfly.className,
                "is-page-flight",
                "is-following",
                flyingButterfly.facing === "right" ? "is-facing-right" : "is-facing-left",
              ]
                .filter(Boolean)
                .join(" ")}
              type="button"
              aria-hidden="true"
              tabIndex={-1}
              style={
                {
                  "--butterfly-flight-left": `${flyingButterfly.origin.x}px`,
                  "--butterfly-flight-top": `${flyingButterfly.origin.y}px`,
                  "--butterfly-x": `${flyingButterfly.position.x}px`,
                  "--butterfly-y": `${flyingButterfly.position.y}px`,
                } as CSSProperties
              }
            >
              <span />
            </button>,
            document.body,
          )
        : null}
    </>
  );
}
