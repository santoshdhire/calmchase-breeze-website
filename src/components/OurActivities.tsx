
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, Zap, Mountain, Users, Target } from 'lucide-react';

const activities = [
  {
    title: "SSB Interview Preparation",
    description: "Comprehensive training for Services Selection Board interviews with expert mentoring.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-blue-500 to-indigo-600",
    icon: Target,
    stats: "40+ Selected"
  },
  {
    title: "21-Day Digital Detox Retreat",
    description: "Immersive program to break technology addiction and reconnect with self and nature.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    color: "from-purple-500 to-pink-600",
    icon: Sparkles,
    stats: "95% Success Rate"
  },
  {
    title: "Adventure Club Expeditions",
    description: "Character-building adventures including trekking, rock climbing and outdoor survival skills.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    color: "from-amber-500 to-orange-600",
    icon: Mountain,
    stats: "200+ Members"
  },
  {
    title: "Leadership Development Workshops",
    description: "Interactive workshops to develop critical leadership skills and strategic thinking.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-emerald-500 to-teal-600",
    icon: Zap,
    stats: "50+ Leaders Trained"
  },
  {
    title: "Personality Development Sessions",
    description: "Structured programs for building confidence, communication skills and emotional intelligence.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-rose-500 to-red-600",
    icon: Users,
    stats: "450+ Transformed"
  }
];

const OurActivities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformative programs designed to unlock your full potential and create lasting impact.
          </p>
        </motion.div>
        
        {/* Horizontal scrolling activities with controls */}
        <div className="relative">
          {/* Left scroll button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg hover:bg-white/20 h-12 w-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          {/* Right scroll button */}
          <button 
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg hover:bg-white/20 h-12 w-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto hide-scrollbar py-8 px-8 -mx-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="min-w-[350px] md:min-w-[400px] snap-center px-4"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl h-full transform hover:scale-105 transition-all duration-500 border border-white/10 group">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/20 border border-white/30`}>
                        <activity.icon className="text-white" size={24} />
                      </div>
                    </div>

                    {/* Stats badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                        {activity.stats}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <button className={`inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r ${activity.color} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                      Learn more
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default OurActivities;
