
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler to add a background to the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-3xl font-brand font-bold tracking-wider text-white">
            KAISH
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="flex flex-col space-y-4 bg-black/50 p-4 rounded-md">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300 text-center py-2"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
