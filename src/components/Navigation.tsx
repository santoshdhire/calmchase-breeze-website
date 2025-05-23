
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CalmChase
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">Home</Link>
              <Link to="/programs" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">Programs</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">Gallery</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">Blog</Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg">Contact</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/programs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Programs</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
