
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Target, Zap, TrendingUp, Award } from 'lucide-react';

const Hero = () => {
  const [energyLevel, setEnergyLevel] = useState(0);
  const [progressValue, setProgressValue] = useState(1);
  const [currentGoal, setCurrentGoal] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTextChanging, setIsTextChanging] = useState(false);

  const goals = [
    "Build Confidence",
    "Master Leadership",
    "Achieve Balance", 
    "Develop Resilience",
    "Excel in Communication"
  ];

  useEffect(() => {
    // Animate energy level from 0 to 100 smoothly
    const energyTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setEnergyLevel(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 800);
    
    return () => clearTimeout(energyTimer);
  }, []);

  useEffect(() => {
    // Animate progress from 1 to 10 smoothly
    const progressTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 10) {
            clearInterval(interval);
            return 10;
          }
          return prev + 0.2;
        });
      }, 100);
      return () => clearInterval(interval);
    }, 1200);
    
    return () => clearTimeout(progressTimer);
  }, []);

  useEffect(() => {
    // Smooth text transition with fade effect
    const interval = setInterval(() => {
      setIsTextChanging(true);
      setTimeout(() => {
        setCurrentGoal((prev) => (prev + 1) % goals.length);
        setIsTextChanging(false);
      }, 200);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Enhanced Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Energy Orbs with improved positioning */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${15 + mousePosition.x * 0.08}%`,
            top: `${8 + mousePosition.y * 0.08}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${10 + mousePosition.x * 0.05}%`,
            bottom: `${15 + mousePosition.y * 0.05}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
            transition: 'all 0.3s ease-out'
          }}
        />
        
        {/* Enhanced Energy Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" 
               style={{ animationDuration: '6s' }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-300/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Main Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Enhanced Energy Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-md border border-cyan-300/20 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-cyan-400/25 transition-all duration-300">
              <Zap className="text-yellow-300 animate-pulse" size={18} />
              <span className="text-cyan-200 text-sm font-semibold tracking-wide">HIGH ENERGY MODE ACTIVE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Chase Your
              <div className="relative h-20 md:h-24 overflow-hidden my-2">
                <span 
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-bold transition-all duration-500 ${
                    isTextChanging ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  {goals[currentGoal]}
                </span>
              </div>
              <span className="block text-3xl md:text-4xl text-gray-200 font-light mt-4 tracking-wide">
                With CalmChase
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed opacity-90">
              Transform your potential into achievement through mindful goal pursuit, 
              mental resilience, and unstoppable confidence.
            </p>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 mb-14">
              <button className="group relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-cyan-400/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" size={22} />
              </button>
              
              <button className="group flex items-center gap-4 text-gray-200 hover:text-cyan-300 transition-all duration-300">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:shadow-cyan-300/25 group-hover:bg-cyan-400/10 transition-all duration-300 border border-white/10">
                  <Play size={22} className="ml-1 text-cyan-300" />
                </div>
                <span className="text-lg font-medium">Watch Success Stories</span>
              </button>
            </div>

            {/* Enhanced Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-cyan-300 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <Target size={26} />
                  40+
                </div>
                <div className="text-gray-300 text-sm font-medium">Defence Force Selections</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-blue-300 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <TrendingUp size={26} />
                  450+
                </div>
                <div className="text-gray-300 text-sm font-medium">Community Members</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-purple-300 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <Zap size={26} />
                  100+
                </div>
                <div className="text-gray-300 text-sm font-medium">Tech Innovators</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-pink-300 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <Award size={26} />
                  200+
                </div>
                <div className="text-gray-300 text-sm font-medium">Adventure Seekers</div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Energy Dashboard */}
          <div className="relative animate-fade-in animation-delay-500">
            {/* Enhanced Energy Level Visualization */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-3 tracking-wide">Your Energy Level</h3>
                <p className="text-gray-300 text-lg">Ready to chase your goals?</p>
              </div>

              {/* Enhanced Circular Progress */}
              <div className="relative w-52 h-52 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgb(51 65 85 / 0.3)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#energyGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - energyLevel / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))' }}
                  />
                  <defs>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-1">{Math.round(energyLevel)}%</div>
                    <div className="text-cyan-300 text-sm font-bold tracking-widest">CHARGED</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Goal Progress */}
              <div className="space-y-6">
                <div className="flex justify-between text-base">
                  <span className="text-gray-300 font-medium">Today's Progress</span>
                  <span className="text-cyan-300 font-bold">{Math.round(progressValue)}/10 Goals</span>
                </div>
                <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
                    style={{ 
                      width: `${(progressValue / 10) * 100}%`,
                      filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))'
                    }}
                  />
                </div>
              </div>

              {/* Enhanced Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/20 text-cyan-200 px-5 py-4 rounded-xl hover:bg-cyan-500/25 hover:border-cyan-400/40 transition-all duration-300 text-sm font-bold tracking-wide shadow-lg hover:shadow-cyan-400/20">
                  Set New Goal
                </button>
                <button className="bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-400/20 text-purple-200 px-5 py-4 rounded-xl hover:bg-purple-500/25 hover:border-purple-400/40 transition-all duration-300 text-sm font-bold tracking-wide shadow-lg hover:shadow-purple-400/20">
                  Track Progress
                </button>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-cyan-300/15 to-blue-300/15 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-300/15 to-pink-300/15 rounded-full blur-xl animate-pulse animation-delay-1000" />
            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-lg animate-pulse animation-delay-2000" />
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-cyan-300/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-cyan-300 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
