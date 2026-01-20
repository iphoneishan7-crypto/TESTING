
import React from 'react';
import ProductCarousel from './ProductCarousel';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto text-center px-4">
        <h2 className="font-brand text-4xl md:text-5xl font-bold mb-4">Our Collection</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Discover our range of thoughtfully designed apparel, crafted for comfort and style.</p>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default Products;
