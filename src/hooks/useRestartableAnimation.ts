import { useCallback, useEffect, useRef, useState } from "react";

export function useRestartableAnimation<T>(idleValue: T) {
  const [activeValue, setActiveValue] = useState<T>(idleValue);
  const frame = useRef<number | null>(null);

  const cancelFrame = useCallback(() => {
    if (frame.current) {
      window.cancelAnimationFrame(frame.current);
      frame.current = null;
    }
  }, []);

  const clearAnimation = useCallback(() => {
    cancelFrame();
    setActiveValue(idleValue);
  }, [cancelFrame, idleValue]);

  const restartAnimation = useCallback(
    (value: T) => {
      cancelFrame();
      setActiveValue(idleValue);
      frame.current = window.requestAnimationFrame(() => {
        frame.current = null;
        setActiveValue(value);
      });
    },
    [cancelFrame, idleValue],
  );

  useEffect(() => cancelFrame, [cancelFrame]);

  return { activeValue, clearAnimation, restartAnimation };
}
