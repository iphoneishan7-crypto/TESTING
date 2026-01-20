
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-brand text-4xl md:text-5xl font-bold mb-6">With Care & Confidence</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          At KAISH, we believe clothing is more than just fabric; it's a statement of care and a vessel of trust. Every piece is designed with intention and crafted from quality materials, ensuring it's not only stylish but also comfortable and lasting. We create thoughtful clothing for the modern individual, delivered with a promise of excellence and a note of thanks.
        </p>
      </div>
    </section>
  );
};

export default About;
