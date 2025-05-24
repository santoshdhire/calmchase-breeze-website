
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Target, Zap, TrendingUp, Award } from 'lucide-react';

const Hero = () => {
  const [energyLevel, setEnergyLevel] = useState(0);
  const [currentGoal, setCurrentGoal] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const goals = [
    "Build Confidence",
    "Master Leadership",
    "Achieve Balance", 
    "Develop Resilience",
    "Excel in Communication"
  ];

  useEffect(() => {
    // Animate energy level on mount
    const timer = setTimeout(() => setEnergyLevel(85), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Rotate through goals
    const interval = setInterval(() => {
      setCurrentGoal((prev) => (prev + 1) % goals.length);
    }, 3000);
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
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Energy Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.05}%`,
            bottom: `${20 + mousePosition.y * 0.05}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s'
          }}
        />
        
        {/* Energy Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{ animationDuration: '4s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Energy Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Zap className="text-yellow-400 animate-pulse" size={16} />
              <span className="text-cyan-300 text-sm font-medium">High Energy Mode Active</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Chase Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {goals[currentGoal]}
              </span>
              <span className="block text-3xl md:text-4xl text-gray-300 font-normal mt-2">
                With CalmChase
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Transform your potential into achievement through mindful goal pursuit, 
              mental resilience, and unstoppable confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/25 group-hover:bg-cyan-500/20 transition-all duration-300 border border-white/20">
                  <Play size={20} className="ml-1 text-cyan-400" />
                </div>
                <span className="text-lg font-medium">Watch Success Stories</span>
              </button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-cyan-400 flex items-center justify-center lg:justify-start gap-2">
                  <Target size={24} />
                  40+
                </div>
                <div className="text-gray-400 text-sm">Defence Force Selections</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-400 flex items-center justify-center lg:justify-start gap-2">
                  <TrendingUp size={24} />
                  450+
                </div>
                <div className="text-gray-400 text-sm">Community Members</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-purple-400 flex items-center justify-center lg:justify-start gap-2">
                  <Zap size={24} />
                  100+
                </div>
                <div className="text-gray-400 text-sm">Tech Innovators</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-pink-400 flex items-center justify-center lg:justify-start gap-2">
                  <Award size={24} />
                  200+
                </div>
                <div className="text-gray-400 text-sm">Adventure Seekers</div>
              </div>
            </div>
          </div>

          {/* Interactive Energy Dashboard */}
          <div className="relative animate-fade-in animation-delay-500">
            {/* Energy Level Visualization */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Your Energy Level</h3>
                <p className="text-gray-400">Ready to chase your goals?</p>
              </div>

              {/* Circular Progress */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgb(51 65 85)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#energyGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - energyLevel / 100)}`}
                    className="transition-all duration-2000 ease-out"
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
                    <div className="text-4xl font-bold text-white">{energyLevel}%</div>
                    <div className="text-cyan-400 text-sm font-medium">CHARGED</div>
                  </div>
                </div>
              </div>

              {/* Goal Progress */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Today's Progress</span>
                  <span className="text-cyan-400 font-medium">7/10 Goals</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '70%' }}
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 px-4 py-3 rounded-xl hover:bg-cyan-600/30 transition-all duration-200 text-sm font-medium">
                  Set New Goal
                </button>
                <button className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 px-4 py-3 rounded-xl hover:bg-purple-600/30 transition-all duration-200 text-sm font-medium">
                  Track Progress
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse animation-delay-1000" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
