
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const text1 = "Chase Your Goals";
  const text2 = "With Calmness";

  // Animation variants for each character
  const getCharacterVariants = (index: number, totalChars: number) => {
    const directions = [
      { x: -100, y: -100 }, // top-left
      { x: 100, y: -100 },  // top-right
      { x: -100, y: 100 },  // bottom-left
      { x: 100, y: 100 },   // bottom-right
      { x: 0, y: -150 },    // top
      { x: 0, y: 150 },     // bottom
      { x: -150, y: 0 },    // left
      { x: 150, y: 0 },     // right
    ];
    
    const direction = directions[index % directions.length];
    
    return {
      hidden: {
        opacity: 0,
        x: direction.x,
        y: direction.y,
        scale: 0.3,
        rotate: Math.random() * 360 - 180,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.05,
          ease: "easeOut",
        }
      }
    };
  };

  const renderAnimatedText = (text: string, startIndex: number = 0) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={startIndex + index}
        variants={getCharacterVariants(startIndex + index, text1.length + text2.length)}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ transformOrigin: 'center' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <section id="home" className="relative min-h-screen mt-24 sm:mt-0 pt-10 sm:pt-0 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 ref={textRef} className="text-4xl sm:text-5xl md:text-7xl font-luckiest font-bold text-gray-900 mb-6 leading-tight">
            <div className="block whitespace-nowrap">
              {renderAnimatedText(text1)}
            </div>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
              {renderAnimatedText(text2, text1.length)}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals with self-confidence, mental well-being, and life skills
            through leadership, communication, and resilience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Join Our Programs
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            
            <button className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
                <Play size={20} className="ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Success Stories</span>
            </button>
          </div>

          {/* Stats */}
          <div className="pb-10 sm:pb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">40+</div>
              <div className="text-gray-600">Selected in Defence Forces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">450+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Tech Club Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-gray-600">Adventure Club Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
