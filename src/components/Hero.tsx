
import React from 'react';
import { ArrowRight, Play, CheckCircle, Users, Target, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="text-green-400" size={16} />
              <span className="text-white/90 text-sm font-medium">Trusted by 450+ Members</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Chase Your Goals
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                With Calmness
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Empowering individuals with self-confidence, mental well-being, and life skills
              through leadership, communication, and resilience building programs.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-200">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                  <Play size={18} className="ml-0.5" />
                </div>
                <span className="text-lg font-medium">Watch Our Story</span>
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">40+ Selected</div>
                  <div className="text-white/60 text-sm">Defence Forces</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">450+ Members</div>
                  <div className="text-white/60 text-sm">Community Strong</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">100% Focus</div>
                  <div className="text-white/60 text-sm">On Your Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Transform Your Life</h3>
                    <p className="text-white/80">Join our proven programs</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="text-3xl font-bold text-blue-400">40+</div>
                      <div className="text-white/70 text-sm">Defence Selected</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="text-3xl font-bold text-purple-400">450+</div>
                      <div className="text-white/70 text-sm">Members</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="text-3xl font-bold text-indigo-400">100+</div>
                      <div className="text-white/70 text-sm">Tech Club</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="text-3xl font-bold text-green-400">200+</div>
                      <div className="text-white/70 text-sm">Adventure</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                    Get Started Today
                  </button>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
