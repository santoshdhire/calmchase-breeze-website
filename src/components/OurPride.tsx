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
    quote: "The 21-day Digital Detox program was exactly what I needed. After years of tech addiction, I've finally regained control over my screen time and reconnected with what truly matters.",
    name: "Priya Sharma",
    role: "Marketing Professional",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "The 21-day Digital Detox program was exactly what I needed. After years of tech addiction, I've finally regained control over my screen time and reconnected with what truly matters.",
    name: "Priya Sharma",
    role: "Marketing Professional",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },,
  {
    quote: "The 21-day Digital Detox program was exactly what I needed. After years of tech addiction, I've finally regained control over my screen time and reconnected with what truly matters.",
    name: "Priya Sharma",
    role: "Marketing Professional",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },,
  {
    quote: "The 21-day Digital Detox program was exactly what I needed. After years of tech addiction, I've finally regained control over my screen time and reconnected with what truly matters.",
    name: "Priya Sharma",
    role: "Marketing Professional",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },,
  {
    quote: "The 21-day Digital Detox program was exactly what I needed. After years of tech addiction, I've finally regained control over my screen time and reconnected with what truly matters.",
    name: "Priya Sharma",
    role: "Marketing Professional",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
];

const OurPride = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section className="py-20 overflow-hidden relative bg-gradient-to-br from-blue-900 to-blue-600">
      {/* 3D layered background */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center opacity-20"></div>
      </div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-white"
            initial={{ opacity: 0.03 + Math.random() * 0.07 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03 + Math.random() * 0.07, 0.05 + Math.random() * 0.07, 0.03 + Math.random() * 0.07]
            }}
            transition={{
              duration: 7 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.floor(Math.random() * 12) + 4}rem`,
              height: `${Math.floor(Math.random() * 12) + 4}rem`,
            }}
          ></motion.div>
        ))}
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with 3D effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg blur-xl opacity-50"></div> */}
            <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-4 px-4 py-2">
              Our <span className="text-white-300">Pride</span>
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mt-4">
            Celebrating the achievements of our community members and the impact we've made together.
          </p>
        </motion.div>
        
        {/* Achievements with 3D card effect */}
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
              // whileHover={{ 
              //   y: -10,
              //   boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              // }}
              className="relative group"
            >
              {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300"></div> */}
              <div className="relative bg-white/40 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{achievement.number}</h3>
                <p className="text-white/80 font-medium text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials with glassmorphism */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          >
            <span className="relative inline-block">
              {/* <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-md opacity-50"></span> */}
              <span className="relative px-4 py-2">Success Stories</span>
            </span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ 
                  scale: 1.03,
                  rotate: index % 2 === 0 ? 1 : -1
                }}
                className="relative group"
              >
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300"></div> */}
                <div className="relative bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/20 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-4 -left-2 text-4xl text-white/20">"</div>
                    <p className="text-white italic leading-relaxed relative z-10">"{testimonial.quote}"</p>
                    <div className="absolute -bottom-8 -right-2 text-4xl text-white/20">"</div>
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

export default OurPride;