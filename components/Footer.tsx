
import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './Icons';

// Social media links can be easily updated here
const socialLinks = {
  instagram: '#', // Replace with your Instagram link
  twitter: '#',   // Replace with your Twitter link
  facebook: '#',  // Replace with your Facebook link
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <h3 className="text-3xl font-brand font-bold text-white mb-2">KAISH</h3>
        <p className="mb-6">Premium clothing, thoughtfully delivered.</p>
        
        <div className="flex justify-center space-x-6">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <InstagramIcon />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <TwitterIcon />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FacebookIcon />
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} KAISH. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
