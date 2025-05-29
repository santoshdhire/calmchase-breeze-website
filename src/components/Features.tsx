
import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Shield, Zap, Hammer, Users, Brain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Medal,
      title: "SSB Preparation Program",
      description: "Comprehensive training program with excellent results for candidates aspiring to join the defence forces.",
      color: "from-blue-500 to-cyan-500",
      direction: { x: -100, y: -100 } // top-left
    },
    {
      icon: Brain,
      title: "Digital Detox Programs",
      description: "7-day and 21-day programs designed to help individuals break free from digital addiction and regain focus.",
      color: "from-pink-500 to-rose-500",
      direction: { x: 100, y: -100 } // top-right
    },
    {
      icon: Shield,
      title: "Personality Development",
      description: "Holistic programs focused on leadership, communication, social intelligence, and decision-making skills.",
      color: "from-purple-500 to-indigo-500",
      direction: { x: -100, y: 100 } // bottom-left
    },
    {
      icon: Zap,
      title: "Leadership Training",
      description: "Learn effective leadership strategies to inspire and guide teams toward success.",
      color: "from-yellow-500 to-orange-500",
      direction: { x: 100, y: 100 } // bottom-right
    },
    {
      icon: Hammer,
      title: "Resilience Building",
      description: "Develop mental fortitude to overcome obstacles and thrive under pressure.",
      color: "from-green-500 to-emerald-500",
      direction: { x: 0, y: -150 } // top
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of like-minded individuals on their self-improvement journey.",
      color: "from-violet-500 to-purple-500",
      direction: { x: 0, y: 150 } // bottom
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your life with our holistic personality development platform designed to enhance your skills and wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ 
                opacity: 0, 
                x: feature.direction.x, 
                y: feature.direction.y,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              className="group p-6 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden relative"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title in one line */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 flex-1">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
