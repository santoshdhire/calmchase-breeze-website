
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft, Users, Target, Mountain, Brain, Zap } from 'lucide-react';

const activities = [
  {
    title: "SSB Interview Preparation",
    description: "Comprehensive training for Services Selection Board interviews with expert mentoring and mock sessions.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-blue-500 to-indigo-600",
    icon: Target,
    stats: "85% Success Rate",
    duration: "6 Weeks"
  },
  {
    title: "21-Day Digital Detox Retreat",
    description: "Immersive program to break technology addiction and reconnect with self and nature through mindful activities.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    color: "from-purple-500 to-pink-600",
    icon: Brain,
    stats: "200+ Participants",
    duration: "21 Days"
  },
  {
    title: "Adventure Club Expeditions",
    description: "Character-building adventures including trekking, rock climbing and outdoor survival skills training.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    color: "from-amber-500 to-orange-600",
    icon: Mountain,
    stats: "50+ Expeditions",
    duration: "Weekend"
  },
  {
    title: "Leadership Development Workshops",
    description: "Interactive workshops to develop critical leadership skills and strategic thinking for future leaders.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-emerald-500 to-teal-600",
    icon: Users,
    stats: "300+ Leaders",
    duration: "4 Weeks"
  },
  {
    title: "Personality Development Sessions",
    description: "Structured programs for building confidence, communication skills and emotional intelligence.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-rose-500 to-red-600",
    icon: Zap,
    stats: "95% Satisfaction",
    duration: "8 Weeks"
  }
];

const OurActivities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
    <section className="py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold mx-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Activities
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transformative programs designed to develop every aspect of your personality and unlock your true potential.
          </p>
        </motion.div>
        
        {/* Creative Activities Display */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button 
            onClick={scrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:bg-white dark:hover:bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
          >
            <ChevronLeft className="text-gray-700 dark:text-gray-300" size={24} />
          </motion.button>
          
          <motion.button 
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:bg-white dark:hover:bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
          >
            <ChevronRight className="text-gray-700 dark:text-gray-300" size={24} />
          </motion.button>
          
          {/* Scrollable Cards Container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto py-8 px-8 -mx-8 snap-x snap-mandatory scrollbar-hide gap-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="min-w-[320px] md:min-w-[380px] snap-center"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl h-[480px] group">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-80`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                    {/* Top Section - Icon and Stats */}
                    <div className="flex items-start justify-between">
                      <motion.div 
                        className="bg-white/20 backdrop-blur-md rounded-2xl p-4"
                        animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <activity.icon size={32} />
                      </motion.div>
                      
                      <div className="text-right">
                        <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-2">
                          <span className="text-sm font-medium">{activity.stats}</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                          <span className="text-sm font-medium">{activity.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Section - Title and Description */}
                    <div>
                      <h3 className="text-2xl font-bold mb-3 leading-tight">{activity.title}</h3>
                      <p className="text-white/90 mb-6 leading-relaxed">{activity.description}</p>
                      
                      <motion.button 
                        className="group/btn bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="font-medium">Explore Program</span>
                        <ChevronRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"
                    animate={{ 
                      scale: hoveredIndex === index ? 1.2 : 1,
                      opacity: hoveredIndex === index ? 0.3 : 0.1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
                    animate={{ 
                      scale: hoveredIndex === index ? 1.3 : 1,
                      opacity: hoveredIndex === index ? 0.2 : 0.05
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Programs
          </motion.button>
        </motion.div>
      </div>
      
      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default OurActivities;
