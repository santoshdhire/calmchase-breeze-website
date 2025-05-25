import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainText = "Chase Your Goals";
  const subText = "With Calmness";
  
  // Generate random factors for each letter to create varied movement
  const getRandomFactor = (index: number, text: string) => {
    // Use character position to generate consistent random values
    const seed = text.charCodeAt(index % text.length) + index;
    return {
      speed: 0.3 + (seed % 7) * 0.1, // Random speed between 0.3-0.9
      delay: (seed % 5) * 20, // Random delay 0-80px scroll
      maxDistance: 100 + (seed % 10) * 20, // Random max distance 100-280px
    };
  };

  // Calculate individual letter animations with random upward pull
  const getLetterStyle = (letterIndex: number, isMainText: boolean, text: string) => {
    const scrollFactor = scrollY;
    const randomFactor = getRandomFactor(letterIndex, text);
    
    // Different start points for main text vs sub text
    const baseDelay = isMainText ? 0 : 150;
    const adjustedScroll = Math.max(0, scrollFactor - baseDelay - randomFactor.delay);
    
    // Calculate upward movement with random factors
    const translateY = adjustedScroll * randomFactor.speed;
    const clampedTranslateY = Math.min(translateY, randomFactor.maxDistance);
    
    // Keep opacity at 1 so letters don't disappear, just move up
    const opacity = 1;
    
    return {
      opacity: opacity,
      transform: `translateY(-${clampedTranslateY}px)`,
      transition: scrollY === 0 ? 'all 0.3s ease-out' : 'none',
    };
  };

  const renderAnimatedText = (text: string, isMainText: boolean) => {
    return text.split('').map((char, index) => (
      <span
        key={`${isMainText ? 'main' : 'sub'}-${index}`}
        style={getLetterStyle(index, isMainText, text)}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="home" className="relative min-h-screen mt-20 sm:mt-0 pt-16 sm:pt-0 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            <div className="block mb-2">
              {renderAnimatedText(mainText, true)}
            </div>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-black">
              {renderAnimatedText(subText, false)}
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{
              transform: `translateY(-${scrollY * 0.3}px)`,
              opacity: Math.max(0, 1 - (scrollY / 200)),
            }}
          >
            Empowering individuals with self-confidence, mental well-being, and life skills
            through leadership, communication, and resilience.
          </p>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            style={{
              transform: `translateY(-${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - (scrollY / 300)),
            }}
          >
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
          <div 
            className="pb-10 sm:pb-0 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
            style={{
              transform: `translateY(-${scrollY * 0.1}px)`,
              opacity: Math.max(0, 1 - (scrollY / 400)),
            }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">40+</div>
              <div className="text-sm sm:text-base text-gray-600">Selected in Defence Forces</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">450+</div>
              <div className="text-sm sm:text-base text-gray-600">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm sm:text-base text-gray-600">Tech Club Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm sm:text-base text-gray-600">Adventure Club Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
