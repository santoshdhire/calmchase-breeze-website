
import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Shield, Zap, Hammer, Users, Brain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Medal,
      title: "SSB Preparation Program",
      description: "Comprehensive training program with excellent results for candidates aspiring to join the defence forces.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Digital Detox Programs",
      description: "7-day and 21-day programs designed to help individuals break free from digital addiction and regain focus.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Personality Development",
      description: "Holistic programs focused on leadership, communication, social intelligence, and decision-making skills.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Leadership Training",
      description: "Learn effective leadership strategies to inspire and guide teams toward success.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Hammer,
      title: "Resilience Building",
      description: "Develop mental fortitude to overcome obstacles and thrive under pressure.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of like-minded individuals on their self-improvement journey.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Programs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your life with our holistic personality development platform designed to enhance your skills and wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ 
                opacity: 0, 
                y: 30,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                y: -8
              }}
              className="group p-6 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 overflow-hidden relative"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title in one line */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-1">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full opacity-10`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full opacity-5`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
