
// import React from 'react';
// import { ArrowRight, Play } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen mt-24 sm:mt-0 pt-10 sm:pt-0 flex items-center justify-center overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//         <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="animate-fade-in">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//             Chase Your Goals
//             <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               With Calmness
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Empowering individuals with self-confidence, mental well-being, and life skills
//             through leadership, communication, and resilience.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//             <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
//               Join Our Programs
//               <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
//             </button>
            
//             <button className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
//               <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
//                 <Play size={20} className="ml-1" />
//               </div>
//               <span className="text-lg font-medium">Watch Success Stories</span>
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="pb-10 sm:pb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-900">40+</div>
//               <div className="text-gray-600">Selected in Defence Forces</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-900">450+</div>
//               <div className="text-gray-600">Community Members</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-900">100+</div>
//               <div className="text-gray-600">Tech Club Members</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-900">200+</div>
//               <div className="text-gray-600">Adventure Club Members</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { ArrowRight, Play } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(true);
  const [autoScrolled, setAutoScrolled] = useState(false); // ensure auto-scroll happens only once

  const textMain = 'Chase Your Goals';
  const textSub = 'With Calmness';
  const scrollThreshold = typeof window !== 'undefined' ? window.innerHeight * 1.2 : 1000;

  // Store per-letter random delays in a ref so they don't regenerate every render
  const letterDelays = useRef<number[]>([]);

  useEffect(() => {
    // Fill with random delay between 0 to 200
    const allLetters = (textMain + textSub).replace(/\s/g, '');
    if (letterDelays.current.length !== allLetters.length) {
      letterDelays.current = Array(allLetters.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 200));
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const isInHero = window.scrollY < scrollThreshold;

      if (scrollLocked && isInHero) {
        e.preventDefault();

        const next = Math.min(Math.max(scrollProgress + e.deltaY, 0), scrollThreshold);
        setScrollProgress(next);

        // Trigger auto-scroll once all letters pulled
        if (next >= scrollThreshold - 10 && !autoScrolled) {
          setScrollLocked(false);
          setAutoScrolled(true);
          setTimeout(() => {
            window.scrollTo({ top: scrollThreshold, behavior: 'smooth' });
          }, 300); // slight pause before scroll
        }
      }

      // Reset scroll trap when user scrolls back to top
      if (!scrollLocked && window.scrollY <= 10) {
        setScrollLocked(true);
        setAutoScrolled(false);
        setScrollProgress(scrollThreshold - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollLocked, scrollProgress, scrollThreshold, autoScrolled]);

  const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);

  let letterIndex = 0;
  const getLetterStyle = (index: number, text: string) => {
    const speedSeed = Math.abs(Math.sin(index * 13 + text.charCodeAt(index % text.length)));
    const speed = 0.6 + (speedSeed % 1) * 1.2;

    const delay = letterDelays.current[letterIndex++] || 0;
    const effectiveProgress = Math.max(scrollProgress - delay, 0);
    const progressRatio = Math.min(effectiveProgress / scrollThreshold, 1);
    const easedProgress = easeOut(progressRatio);

    const translateY = easedProgress * scrollThreshold * speed;

    const fadeStart = scrollThreshold * 0.8;
    const fadeEnd = scrollThreshold;

    let opacity = 1;
    if (scrollProgress >= fadeStart) {
      opacity = 1 - (scrollProgress - fadeStart) / (fadeEnd - fadeStart);
    }

    return {
      transform: `translateY(-${translateY}px)`,
      opacity: Math.max(opacity, 0),
      display: 'inline-block',
      backgroundImage: 'linear-gradient(to right, #2563eb, #9333ea, #4f46e5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      transition: 'transform 0.15s ease-out, opacity 0.3s ease-out',
    };
  };

  const renderText = (text: string) =>
    text.split('').map((char, index) => (
      <span key={index} style={getLetterStyle(index, text)}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  // Reset letter index on each render
  letterIndex = 0;

  return (
    <>
      {/* Hero Scroll Trap */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
        style={{ height: '100vh', position: 'relative', zIndex: 10 }}
      >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Chase Your Goals
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              With Calmness
            </span>
          </h1> */}

        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            <div>{renderText(textMain)}</div>
            <span className="block mt-2">{renderText(textSub)}</span>
          </h1>
        </div>
          
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
    </>
  );
};

export default Hero;
