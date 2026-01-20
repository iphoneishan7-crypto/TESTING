
import React from 'react';
import { KaishLogoWatermark } from './Icons';

// Call-to-action links can be easily updated here
const ctaLinks = {
  amazon: '#', // Replace with your Amazon link
  flipkart: '#', // Replace with your Flipkart link
  meesho: '#', // Replace with your Meesho link
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center h-screen min-h-[600px] text-center text-white overflow-hidden px-4">
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <KaishLogoWatermark className="w-4/5 max-w-4xl h-auto text-white/5" />
      </div>

      {/* Hero Content */}
      <div className="z-10 animate-fadeInUp">
        <h1 className="font-brand text-7xl md:text-9xl font-extrabold tracking-widest">
          KAISH
        </h1>
        <p className="mt-4 text-lg md:text-2xl tracking-wider text-gray-300">
          Created With Care, Delivered With Thanks
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaLinks.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Buy on Amazon
          </a>
          <a
            href={ctaLinks.flipkart}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Buy on Flipkart
          </a>
          <a
            href={ctaLinks.meesho}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Buy on Meesho
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
