
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Target, Zap, Star, Sparkles, Trophy, Heart, Brain, Compass } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentGoal, setCurrentGoal] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userEnergy, setUserEnergy] = useState(0);
  const [floatingElements, setFloatingElements] = useState([]);
  const heroRef = useRef(null);

  const goals = [
    { text: "Master Your Mind", icon: Brain, color: "from-purple-400 to-pink-500" },
    { text: "Achieve Peak Performance", icon: Zap, color: "from-blue-400 to-cyan-500" },
    { text: "Find Inner Peace", icon: Heart, color: "from-green-400 to-emerald-500" },
    { text: "Lead with Confidence", icon: Trophy, color: "from-orange-400 to-red-500" },
    { text: "Navigate Life's Journey", icon: Compass, color: "from-indigo-400 to-purple-500" }
  ];

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Goal rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGoal((prev) => (prev + 1) % goals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // User energy tracking based on interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setUserEnergy((prev) => Math.min(prev + 1, 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Generate floating elements
  useEffect(() => {
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setFloatingElements(elements);
  }, []);

  const handleInteraction = () => {
    setUserEnergy((prev) => Math.min(prev + 10, 100));
    setIsPlaying(!isPlaying);
  };

  const CurrentGoalIcon = goals[currentGoal].icon;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-black"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Dynamic 3D Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `
                translateZ(${mousePosition.x * 50}px) 
                translateY(${Math.sin(Date.now() * 0.001 * element.speed) * 20}px)
                scale(${1 + mousePosition.y * 0.1})
              `,
              opacity: element.opacity,
              animationDelay: `${element.id * 0.1}s`
            }}
          />
        ))}

        {/* Dynamic Gradient Mesh */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(147, 51, 234, 0.2) 50%, 
                transparent 100%
              )
            `
          }}
        />

        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            className="text-left space-y-8"
            style={{
              transform: `
                rotateY(${mousePosition.x * 5}deg) 
                rotateX(${-mousePosition.y * 5}deg)
                translateZ(50px)
              `
            }}
          >
            {/* Dynamic Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 group hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">450+ Lives Transformed</span>
              <Sparkles className="text-yellow-400 animate-spin" size={16} />
            </div>

            {/* Main Heading with Dynamic Goal */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                <span className="block">CALM</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  CHASE
                </span>
              </h1>
              
              {/* Dynamic Goal Display */}
              <div className="flex items-center gap-4 h-16">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${goals[currentGoal].color} flex items-center justify-center transform rotate-12 animate-bounce`}>
                  <CurrentGoalIcon className="text-white" size={24} />
                </div>
                <div className="overflow-hidden">
                  <div 
                    className="text-2xl md:text-3xl font-bold text-white transition-transform duration-500"
                    style={{
                      transform: `translateY(${currentGoal * -100}%)`
                    }}
                  >
                    {goals.map((goal, index) => (
                      <div key={index} className="h-16 flex items-center">
                        {goal.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Embark on a revolutionary journey where <span className="text-blue-400 font-semibold">mindfulness meets ambition</span>. 
              Chase your dreams with the calm confidence of a true leader.
            </p>

            {/* Interactive Energy Bar */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Zap size={16} />
                <span className="text-sm font-medium">Your Energy: {userEnergy}%</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out"
                  style={{ width: `${userEnergy}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button 
                onClick={handleInteraction}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Start Your Quest</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="group flex items-center gap-4 text-white/90 hover:text-white transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}>
                  <Play size={20} className="ml-1 transform group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Experience the Journey</div>
                  <div className="text-white/60 text-sm">2 min preview</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Interactive Panel */}
          <div 
            className="relative"
            style={{
              transform: `
                rotateY(${-mousePosition.x * 10}deg) 
                rotateX(${mousePosition.y * 10}deg)
                translateZ(100px)
              `
            }}
          >
            {/* Main Interactive Card */}
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Star className="text-white" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Target className="text-white" size={20} />
              </div>

              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-3">Your Success Metrics</h3>
                  <p className="text-white/70">Real-time progress tracking</p>
                </div>
                
                {/* Achievement Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Defence Selected", value: "40+", color: "from-blue-500 to-cyan-500", icon: Trophy },
                    { label: "Community Strong", value: "450+", color: "from-purple-500 to-pink-500", icon: Heart },
                    { label: "Tech Leaders", value: "100+", color: "from-green-500 to-emerald-500", icon: Zap },
                    { label: "Adventures Led", value: "200+", color: "from-orange-500 to-red-500", icon: Compass }
                  ].map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div 
                        key={index}
                        className="group bg-white/5 hover:bg-white/10 rounded-2xl p-4 text-center border border-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        onClick={handleInteraction}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:animate-spin`}>
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-200">
                          {stat.value}
                        </div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Interactive CTA */}
                <button 
                  onClick={handleInteraction}
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Join the Elite Circle</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
