// src/components/InfiniteMovingBlogs.tsx
import React, { useEffect, useState } from 'react';

interface BlogItem {
  title: string;
  content: string;
  link: string;
}

interface InfiniteMovingBlogsProps {
  items: BlogItem[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingBlogs: React.FC<InfiniteMovingBlogsProps> = ({
  items,
  direction = 'right',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = '40s';
      if (speed === 'slow') duration = '10s';
      containerRef.current.style.setProperty('--animation-duration', duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start && 'animate-scroll'
        } ${pauseOnHover && 'hover:[animation-play-state:paused]'}`}
      >
        {items.map((item, idx) => (
          <li
            className="flex-none w-80 h-auto p-4 bg-white text-black rounded-[20px]"
            key={idx}
          >
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm mb-4">{item.content}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-accent underline">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingBlogs;
