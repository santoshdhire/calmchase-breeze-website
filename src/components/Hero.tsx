
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Fresh Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle animated orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${15 + mousePosition.x * 0.08}%`,
            top: `${8 + mousePosition.y * 0.08}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${10 + mousePosition.x * 0.05}%`,
            bottom: `${15 + mousePosition.y * 0.05}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
            transition: 'all 0.3s ease-out'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"
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
          {/* Main Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Fresh Energy Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
              <Zap className="text-orange-500 animate-pulse" size={18} />
              <span className="text-gray-700 text-sm font-semibold tracking-wide">HIGH ENERGY MODE ACTIVE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              Chase Your
              <div className="relative my-2" style={{ minHeight: '80px' }}>
                <span 
                  className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent font-bold transition-all duration-500 flex items-center ${
                    isTextChanging ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  {goals[currentGoal]}
                </span>
              </div>
              <span className="block text-3xl md:text-4xl text-gray-600 font-light mt-4 tracking-wide">
                With CalmChase
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Transform your potential into achievement through mindful goal pursuit, 
              mental resilience, and unstoppable confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 mb-14">
              <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-blue-400/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" size={22} />
              </button>
              
              <button className="group flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-all duration-300">
                <div className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:shadow-blue-300/25 group-hover:bg-blue-50 transition-all duration-300 border border-gray-200/50">
                  <Play size={22} className="ml-1 text-blue-600" />
                </div>
                <span className="text-lg font-medium">Watch Success Stories</span>
              </button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-blue-600 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <Target size={26} />
                  40+
                </div>
                <div className="text-gray-500 text-sm font-medium">Defence Force Selections</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-cyan-600 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <TrendingUp size={26} />
                  450+
                </div>
                <div className="text-gray-500 text-sm font-medium">Community Members</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-emerald-600 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <Zap size={26} />
                  100+
                </div>
                <div className="text-gray-500 text-sm font-medium">Tech Innovators</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-orange-600 flex items-center justify-center lg:justify-start gap-2 group-hover:scale-105 transition-transform duration-200">
                  <Award size={26} />
                  200+
                </div>
                <div className="text-gray-500 text-sm font-medium">Adventure Seekers</div>
              </div>
            </div>
          </div>

          {/* Fresh Interactive Energy Dashboard */}
          <div className="relative animate-fade-in animation-delay-500">
            {/* Fresh Energy Card */}
            <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-10 shadow-2xl hover:shadow-blue-200/20 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-3 tracking-wide">Your Energy Level</h3>
                <p className="text-gray-600 text-lg">Ready to chase your goals?</p>
              </div>

              {/* Fresh Circular Progress */}
              <div className="relative w-52 h-52 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgb(229 231 235)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#freshEnergyGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - energyLevel / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}
                  />
                  <defs>
                    <linearGradient id="freshEnergyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-800 mb-1">{Math.round(energyLevel)}%</div>
                    <div className="text-blue-600 text-sm font-bold tracking-widest">CHARGED</div>
                  </div>
                </div>
              </div>

              {/* Fresh Goal Progress */}
              <div className="space-y-6">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600 font-medium">Today's Progress</span>
                  <span className="text-blue-600 font-bold">{Math.round(progressValue)}/10 Goals</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
                    style={{ 
                      width: `${(progressValue / 10) * 100}%`,
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                    }}
                  />
                </div>
              </div>

              {/* Fresh Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="bg-blue-50 border border-blue-200 text-blue-700 px-5 py-4 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 text-sm font-bold tracking-wide shadow-sm hover:shadow-md">
                  Set New Goal
                </button>
                <button className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-xl hover:bg-emerald-100 hover:border-emerald-300 transition-all duration-300 text-sm font-bold tracking-wide shadow-sm hover:shadow-md">
                  Track Progress
                </button>
              </div>
            </div>

            {/* Fresh Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-xl animate-pulse animation-delay-1000" />
            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-lg animate-pulse animation-delay-2000" />
          </div>
        </div>
      </div>

      {/* Fresh Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-blue-400/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-blue-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
