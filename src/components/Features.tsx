
import React from 'react';
import { Brain, Heart, Moon, Zap, Shield, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Mindfulness Training",
      description: "Guided meditation sessions designed to improve focus and reduce anxiety.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Stress Relief",
      description: "Proven techniques to help you manage stress and find inner peace.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Moon,
      title: "Better Sleep",
      description: "Sleep stories and relaxation exercises for restful nights.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Energy Boost",
      description: "Revitalize your mind and body with our energizing practices.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Mental Wellness",
      description: "Comprehensive approach to maintaining psychological well-being.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with like-minded individuals on their wellness journey.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> CalmChase?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a comprehensive wellness platform designed to transform your mental health and daily life.
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
