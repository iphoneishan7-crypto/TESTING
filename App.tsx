
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212] text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <FadeIn>
          <Products />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
};

export default App;
