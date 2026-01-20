
import React, { useRef, useEffect } from 'react';

// Easily update product images here
const productImages = [
  'https://picsum.photos/id/1025/400/600',
  'https://picsum.photos/id/102/400/600',
  'https://picsum.photos/id/219/400/600',
  'https://picsum.photos/id/237/400/600',
  'https://picsum.photos/id/249/400/600',
  'https://picsum.photos/id/250/400/600',
  'https://picsum.photos/id/305/400/600',
  'https://picsum.photos/id/355/400/600',
];

// Duplicate images for a seamless infinite scroll effect
const allImages = [...productImages, ...productImages];

const ProductCarousel: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // Adjust scroll speed

    const animate = () => {
      if (!isPausedRef.current) {
        scroller.scrollLeft += scrollSpeed;
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0; // Reset to the beginning for the infinite loop
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => { isPausedRef.current = true; };
    const handleMouseLeave = () => { isPausedRef.current = false; };

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);
    
    // Touch events for mobile swipe simulation
    scroller.addEventListener('touchstart', handleMouseEnter);
    scroller.addEventListener('touchend', handleMouseLeave);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
      scroller.removeEventListener('touchstart', handleMouseEnter);
      scroller.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="w-full overflow-x-auto scrollbar-hide"
      style={{ cursor: 'grab' }}
    >
      <div className="flex gap-6 md:gap-8 py-4">
        {allImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-64 md:w-80">
            <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={src} alt={`Product ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple utility to hide scrollbar
const style = document.createElement('style');
style.innerHTML = `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`;
document.head.appendChild(style);


export default ProductCarousel;
