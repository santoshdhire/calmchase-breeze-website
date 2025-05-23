
import React from 'react';
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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your life with our holistic personality development platform designed to enhance your skills and wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
