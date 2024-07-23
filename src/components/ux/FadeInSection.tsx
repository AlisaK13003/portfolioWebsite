import React, { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../index.css';

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (entry) {
      entry.target.classList.toggle('visible', inView);
    }
  }, [inView, entry]);

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  );
};

export default FadeInSection;
