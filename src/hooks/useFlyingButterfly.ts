import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

type ButterflyVector = {
  x: number;
  y: number;
};

type ButterflyMode = "idle" | "following" | "returning";
type ButterflyFacing = "left" | "right";

export type FlyingButterfly = {
  className: string;
  facing: ButterflyFacing;
  mode: Exclude<ButterflyMode, "idle">;
  origin: ButterflyVector;
  position: ButterflyVector;
};

const butterflyFollowDuration = 3200;
const butterflyReturnMinSpeed = 180;
const butterflyReturnMaxSpeed = 640;
const butterflyReturnWobbleStrength = 16;
const butterflyReturnWobbleFrequency = 0.009;
const butterflyFollowEase = 0.14;
const maxFrameSeconds = 0.05;

function getMouseFriendlyInteraction() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getFacingFromMovement(nextX: number, previousX: number, fallback: ButterflyFacing) {
  if (nextX > previousX + 1) {
    return "right";
  }

  if (nextX < previousX - 1) {
    return "left";
  }

  return fallback;
}

export function useFlyingButterfly(className: string) {
  const restingButtonRef = useRef<HTMLButtonElement | null>(null);
  const [flyingButterfly, setFlyingButterfly] = useState<FlyingButterfly | null>(null);
  const mode = useRef<ButterflyMode>("idle");
  const position = useRef<ButterflyVector>({ x: 0, y: 0 });
  const target = useRef<ButterflyVector>({ x: 0, y: 0 });
  const origin = useRef<ButterflyVector>({ x: 0, y: 0 });
  const lastPointerX = useRef(0);
  const facing = useRef<ButterflyFacing>("right");
  const animationFrame = useRef<number | null>(null);
  const returnTimeout = useRef<number | null>(null);
  const returnStartDistance = useRef(0);

  const cancelAnimation = useCallback(() => {
    if (animationFrame.current) {
      window.cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  }, []);

  const clearReturnTimeout = useCallback(() => {
    if (returnTimeout.current) {
      window.clearTimeout(returnTimeout.current);
      returnTimeout.current = null;
    }
  }, []);

  const renderFlyingButterfly = useCallback(() => {
    setFlyingButterfly((current) => {
      if (!current) {
        return current;
      }

      return {
        ...current,
        facing: facing.current,
        mode: mode.current === "idle" ? "returning" : mode.current,
        position: position.current,
      };
    });
  }, []);

  const updateTarget = useCallback((pageX: number, pageY: number, width: number, height: number) => {
    facing.current = getFacingFromMovement(pageX, lastPointerX.current, facing.current);
    lastPointerX.current = pageX;
    target.current = {
      x: pageX - width / 2 - origin.current.x,
      y: pageY - height / 2 - origin.current.y,
    };
  }, []);

  const finishReturn = useCallback(() => {
    cancelAnimation();
    clearReturnTimeout();
    mode.current = "idle";
    position.current = { x: 0, y: 0 };
    target.current = { x: 0, y: 0 };
    returnStartDistance.current = 0;
    setFlyingButterfly(null);
  }, [cancelAnimation, clearReturnTimeout]);

  const returnHome = useCallback(
    (previousTime: number) => {
      if (mode.current !== "returning") {
        return;
      }

      const now = performance.now();
      const elapsedSeconds = Math.min(Math.max((now - previousTime) / 1000, 0), maxFrameSeconds);
      const distance = Math.hypot(position.current.x, position.current.y);
      const travelDistance =
        Math.min(butterflyReturnMaxSpeed, butterflyReturnMinSpeed + distance * 0.65) * elapsedSeconds;

      if (distance <= travelDistance) {
        finishReturn();
        return;
      }

      const directionToHome = {
        x: -position.current.x / distance,
        y: -position.current.y / distance,
      };
      const returnProgress = returnStartDistance.current
        ? Math.min(1, 1 - distance / returnStartDistance.current)
        : 1;
      const wobbleFade = Math.sin(returnProgress * Math.PI);
      const wobblePhase = now * butterflyReturnWobbleFrequency;
      const wobbleAmount = butterflyReturnWobbleStrength * wobbleFade;
      const flutterX = -directionToHome.y * Math.sin(wobblePhase) * wobbleAmount;
      const flutterY =
        directionToHome.x * Math.sin(wobblePhase * 0.85) * wobbleAmount * 0.55 +
        Math.cos(wobblePhase * 1.15) * wobbleAmount * 0.2;

      position.current = {
        x: position.current.x + directionToHome.x * travelDistance,
        y: position.current.y + directionToHome.y * travelDistance,
      };
      facing.current = position.current.x > 1 ? "left" : "right";

      setFlyingButterfly((current) => {
        if (!current) {
          return current;
        }

        return {
          ...current,
          facing: facing.current,
          mode: "returning",
          position: {
            x: position.current.x + flutterX,
            y: position.current.y + flutterY,
          },
        };
      });

      animationFrame.current = window.requestAnimationFrame(() => returnHome(now));
    },
    [finishReturn],
  );

  const followTarget = useCallback(() => {
    if (mode.current !== "following") {
      return;
    }

    position.current = {
      x: position.current.x + (target.current.x - position.current.x) * butterflyFollowEase,
      y: position.current.y + (target.current.y - position.current.y) * butterflyFollowEase,
    };
    renderFlyingButterfly();
    animationFrame.current = window.requestAnimationFrame(followTarget);
  }, [renderFlyingButterfly]);

  const startReturn = useCallback(() => {
    if (mode.current !== "following") {
      return;
    }

    cancelAnimation();
    clearReturnTimeout();
    returnStartDistance.current = Math.hypot(position.current.x, position.current.y);
    facing.current = position.current.x > 1 ? "left" : "right";
    mode.current = "returning";
    renderFlyingButterfly();
    returnHome(performance.now());
  }, [cancelAnimation, clearReturnTimeout, renderFlyingButterfly, returnHome]);

  const playButterfly = (event: MouseEvent<HTMLButtonElement>) => {
    if (!getMouseFriendlyInteraction()) {
      return;
    }

    const restingButton = restingButtonRef.current;

    if (!restingButton) {
      return;
    }

    const rect = restingButton.getBoundingClientRect();
    origin.current = {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY,
    };
    position.current = { x: 0, y: 0 };
    target.current = { x: 0, y: 0 };
    lastPointerX.current = event.pageX;
    facing.current = "right";
    mode.current = "following";

    cancelAnimation();
    clearReturnTimeout();
    updateTarget(event.pageX, event.pageY, rect.width, rect.height);
    setFlyingButterfly({
      className,
      facing: facing.current,
      mode: "following",
      origin: origin.current,
      position: position.current,
    });
    animationFrame.current = window.requestAnimationFrame(followTarget);
    returnTimeout.current = window.setTimeout(startReturn, butterflyFollowDuration);
  };

  useEffect(() => {
    const updatePointerTarget = (event: PointerEvent | globalThis.MouseEvent) => {
      const restingButton = restingButtonRef.current;

      if (mode.current !== "following" || !restingButton) {
        return;
      }

      const rect = restingButton.getBoundingClientRect();
      updateTarget(event.pageX, event.pageY, rect.width, rect.height);
    };

    window.addEventListener("pointermove", updatePointerTarget);
    window.addEventListener("mousemove", updatePointerTarget);

    return () => {
      window.removeEventListener("pointermove", updatePointerTarget);
      window.removeEventListener("mousemove", updatePointerTarget);
      cancelAnimation();
      clearReturnTimeout();
    };
  }, [cancelAnimation, clearReturnTimeout, updateTarget]);

  return {
    flyingButterfly,
    mode: mode.current,
    playButterfly,
    restingButtonRef,
  };
}
