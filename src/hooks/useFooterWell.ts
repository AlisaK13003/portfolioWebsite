import { useEffect, useRef, useState } from "react";

const footerFrameCount = 7;
const footerFrameDuration = 180;

export function useFooterWell() {
  const [footerFrame, setFooterFrame] = useState(0);
  const [isBucketFull, setIsBucketFull] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        window.clearInterval(timer.current);
      }
    };
  }, []);

  const handleWellClick = () => {
    if (timer.current) {
      return;
    }

    if (isBucketFull) {
      setIsBucketFull(false);
      setFooterFrame(0);
      return;
    }

    setIsAnimating(true);
    setIsBucketFull(false);
    setFooterFrame(0);

    timer.current = window.setInterval(() => {
      setFooterFrame((currentFrame) => {
        if (currentFrame >= footerFrameCount - 1) {
          if (timer.current) {
            window.clearInterval(timer.current);
            timer.current = null;
          }

          setIsAnimating(false);
          setIsBucketFull(true);
          return footerFrameCount - 1;
        }

        return currentFrame + 1;
      });
    }, footerFrameDuration);
  };

  return {
    backgroundPositionX: `${(footerFrame / (footerFrameCount - 1)) * 100}%`,
    handleWellClick,
    isAnimating,
    isBucketFull,
  };
}
