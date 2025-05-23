
import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="text-white" size={40} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Free Trial Today
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the power of CalmChase with our 14-day free trial. 
            No credit card required. Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get Started Free
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            
            <button className="text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="text-white/90">
              <div className="text-2xl font-bold mb-1">✓ 14-Day Free Trial</div>
              <div className="text-sm">No commitment required</div>
            </div>
            <div className="text-white/90">
              <div className="text-2xl font-bold mb-1">✓ Cancel Anytime</div>
              <div className="text-sm">Full flexibility</div>
            </div>
            <div className="text-white/90">
              <div className="text-2xl font-bold mb-1">✓ 24/7 Support</div>
              <div className="text-sm">We're here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
