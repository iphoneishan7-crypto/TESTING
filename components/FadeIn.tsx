
import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Unobserve after the element is visible to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
