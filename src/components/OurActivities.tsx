
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const activities = [
  {
    title: "SSB Interview Preparation",
    description: "Comprehensive training for Services Selection Board interviews with expert mentoring.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "21-Day Digital Detox Retreat",
    description: "Immersive program to break technology addiction and reconnect with self and nature.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Adventure Club Expeditions",
    description: "Character-building adventures including trekking, rock climbing and outdoor survival skills.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Leadership Development Workshops",
    description: "Interactive workshops to develop critical leadership skills and strategic thinking.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Personality Development Sessions",
    description: "Structured programs for building confidence, communication skills and emotional intelligence.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-rose-500 to-red-600"
  }
];

const OurActivities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={containerRef}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformative programs designed to develop every aspect of your personality and potential.
          </p>
        </motion.div>
        
        {/* Horizontal scrolling activities with controls */}
        <div className="relative">
          {/* Left scroll button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="text-gray-700" />
          </button>
          
          {/* Right scroll button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="text-gray-700" />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto hide-scrollbar py-8 px-5 -mx-5 snap-x snap-mandatory"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="min-w-[300px] md:min-w-[400px] snap-center px-5"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-xl h-full transform hover:-translate-y-2 transition-all duration-300">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-40`}></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    
                    <button className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${activity.color} bg-clip-text text-transparent`}>
                      Learn more
                      <ChevronRight size={16} className={`ml-1 text-transparent bg-gradient-to-r ${activity.color} bg-clip-text`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurActivities;
