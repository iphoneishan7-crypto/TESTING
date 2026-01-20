
import React, { useState } from 'react';
import { InstagramIcon } from './Icons';

// Contact details can be easily updated here
const contactDetails = {
  email: 'hello@kaish.com',
  instagram: '#', // Replace with your Instagram profile link
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission (e.g., send to an API)
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-brand text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-gray-400 mt-4">We’d love to hear from you. Drop us a line.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-semibold rounded-md text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left mt-8 md:mt-0">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href={`mailto:${contactDetails.email}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                {contactDetails.email}
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <a href={contactDetails.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <InstagramIcon />
                <span>@kaishclothing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
