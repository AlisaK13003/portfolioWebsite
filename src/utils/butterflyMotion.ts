export type ButterflyVector = {
  x: number;
  y: number;
};

export type ButterflyMode = "idle" | "following" | "returning";
export type ButterflyFacing = "left" | "right";

export const butterflyFollowDuration = 3200;
export const butterflyReturnMinSpeed = 180;
export const butterflyReturnMaxSpeed = 640;
export const butterflyReturnWobbleStrength = 16;
export const butterflyReturnWobbleFrequency = 0.009;
export const butterflyFollowEase = 0.14;
export const maxFrameSeconds = 0.05;

export function getMouseFriendlyInteraction() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function getFacingFromMovement(nextX: number, previousX: number, fallback: ButterflyFacing) {
  if (nextX > previousX + 1) {
    return "right";
  }

  if (nextX < previousX - 1) {
    return "left";
  }

  return fallback;
}

export function getReturnTravelDistance(distance: number, elapsedSeconds: number) {
  return Math.min(butterflyReturnMaxSpeed, butterflyReturnMinSpeed + distance * 0.65) * elapsedSeconds;
}

export function getDirectionToHome(position: ButterflyVector, distance: number): ButterflyVector {
  return {
    x: -position.x / distance,
    y: -position.y / distance,
  };
}

export function getReturnFlutter(
  directionToHome: ButterflyVector,
  returnProgress: number,
  now: number,
): ButterflyVector {
  const wobbleFade = Math.sin(returnProgress * Math.PI);
  const wobblePhase = now * butterflyReturnWobbleFrequency;
  const wobbleAmount = butterflyReturnWobbleStrength * wobbleFade;

  return {
    x: -directionToHome.y * Math.sin(wobblePhase) * wobbleAmount,
    y:
      directionToHome.x * Math.sin(wobblePhase * 0.85) * wobbleAmount * 0.55 +
      Math.cos(wobblePhase * 1.15) * wobbleAmount * 0.2,
  };
}
