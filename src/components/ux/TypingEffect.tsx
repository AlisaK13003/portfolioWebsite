// src/components/TypingEffect.tsx
import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

interface TypingEffectProps {
  className?: string;
  style?: React.CSSProperties;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ className, style }) => {
  const typingRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typingRef.current) {
      new TypeIt(typingRef.current, {
        strings: ["Alisa Katsionova."],
        speed: 75,
        waitUntilVisible: true,
        breakLines: false,
        startDelay: 1400,
      }).go();
    }
  }, []);

  return <span ref={typingRef} className={className} style={style}></span>;
};

export default TypingEffect;
