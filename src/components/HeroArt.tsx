import { useEffect, useRef, useState, type CSSProperties } from "react";

const animationFrameCount = 8;
const frameDuration = 150;

export function HeroArt() {
  const [frame, setFrame] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current !== null) window.clearInterval(timer.current);
  }, []);

  const playAnimation = () => {
    if (timer.current !== null) window.clearInterval(timer.current);

    let currentFrame = 1;
    setFrame(currentFrame);
    timer.current = window.setInterval(() => {
      currentFrame += 1;
      if (currentFrame > animationFrameCount) {
        window.clearInterval(timer.current!);
        timer.current = null;
        setFrame(0);
        return;
      }
      setFrame(currentFrame);
    }, frameDuration);
  };

  return (
    <div className="hero-art" data-node-id="246:40">
      <button
        className="hero-island-sprite"
        type="button"
        aria-label="Animate the pixel-art girl and koi fish on the floating island"
        onClick={playAnimation}
        style={{ "--island-frame-position": `${(frame / animationFrameCount) * 100}%` } as CSSProperties}
      />
    </div>
  );
}
