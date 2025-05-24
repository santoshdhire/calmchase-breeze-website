
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
            <h1 className={`text-3xl font-bold bg-gradient-to-r transition-all duration-300 ${
              isScrolled 
                ? 'from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                : 'from-white to-cyan-200 bg-clip-text text-transparent'
            }`}>
              CalmChase
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`transition-colors duration-300 text-lg font-medium ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-300'
              }`}>Home</Link>
              <Link to="/programs" className={`transition-colors duration-300 text-lg font-medium ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-300'
              }`}>Programs</Link>
              <Link to="/gallery" className={`transition-colors duration-300 text-lg font-medium ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-300'
              }`}>Gallery</Link>
              <Link to="/blog" className={`transition-colors duration-300 text-lg font-medium ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-300'
              }`}>Blog</Link>
              <a href="#contact" className={`transition-colors duration-300 text-lg font-medium ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-300'
              }`}>Contact</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg' 
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:shadow-cyan-400/25'
            }`}>
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-300'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/programs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Programs</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Gallery</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
