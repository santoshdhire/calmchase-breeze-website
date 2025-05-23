
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const achievements = [
  {
    number: "40+",
    description: "SELECTED IN DEFENCE FORCES",
    icon: "🎖️"
  },
  {
    number: "450+",
    description: "COMMUNITY MEMBERS",
    icon: "👥"
  },
  {
    number: "100+",
    description: "TECH CLUB MEMBERS",
    icon: "💻"
  },
  {
    number: "200+",
    description: "ADVENTURE CLUB MEMBERS",
    icon: "🧗"
  }
];

const testimonials = [
  {
    quote: "Calm Chase changed my life. Their SSB preparation program gave me the confidence and skills I needed to succeed in the selection process. I couldn't have done it without their guidance.",
    name: "Lt. Rajesh Kumar",
    role: "Indian Army Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
  },
  {
    quote: "The 21-day Digital Detox program was exactly what I needed. After years of tech addiction, I've finally regained control over my screen time and reconnected with what truly matters.",
    name: "Priya Sharma",
    role: "Marketing Professional",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "The Adventure Club expeditions pushed me far beyond my comfort zone. I discovered strengths I never knew I had and formed lasting friendships with amazing people.",
    name: "Amit Patel",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  }
];

const OurPride = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-95 -z-10"></div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-white opacity-${Math.floor(Math.random() * 3) + 1}0 w-${Math.floor(Math.random() * 8) + 4} h-${Math.floor(Math.random() * 8) + 4}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.floor(Math.random() * 12) + 4}rem`,
              height: `${Math.floor(Math.random() * 12) + 4}rem`,
              opacity: Math.random() * 0.07 + 0.03
            }}
          ></div>
        ))}
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-300">Pride</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Celebrating the achievements of our community members and the impact we've made together.
          </p>
        </motion.div>
        
        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{achievement.number}</h3>
              <p className="text-white/80 font-medium text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            Success Stories
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/90 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPride;
