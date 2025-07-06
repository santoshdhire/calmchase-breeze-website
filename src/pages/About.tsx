
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Heart, Sparkles, Star, Users, Award, Globe, Coffee, Music, Camera, Book, Target, Lightbulb, Smile, Sun, Rainbow, Flower2, Zap, Palette, Headphones, Video, Instagram, Youtube, Linkedin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0, color = "text-pink-400", size = 24 }: { icon: any, delay?: number, x?: number, y?: number, color?: string, size?: number }) => (
    <motion.div
      className={`absolute ${color} opacity-40`}
      style={{ x, y }}
      animate={{
        y: [0, -40, 0],
        rotate: [0, 15, -15, 0],
        scale: [1, 1.3, 1]
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon size={size} />
    </motion.div>
  );

  const teamMembers = [
    { name: "Sarah Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face", bio: "Visionary leader passionate about mindfulness" },
    { name: "Mike Chen", role: "Head of Programs", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", bio: "Expert in personal development" },
    { name: "Emma Wilson", role: "Creative Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", bio: "Bringing beauty to mindfulness" },
    { name: "David Brown", role: "Tech Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", bio: "Making technology serve peace" },
    { name: "Lisa Garcia", role: "Community Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face", bio: "Building connections that matter" },
    { name: "Alex Kim", role: "Wellness Coach", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face", bio: "Guiding journeys to inner peace" }
  ];

  const socialPlatforms = [
    { name: "Instagram", icon: Instagram, color: "from-pink-500 to-rose-500", followers: "125K", handle: "@calm_chase", url: "#" },
    { name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600", followers: "89K", handle: "CalmChase Official", url: "#" },
    { name: "Spotify", icon: Headphones, color: "from-green-500 to-green-600", followers: "45K", handle: "CalmChase Podcasts", url: "#" },
    { name: "LinkedIn", icon: Linkedin, color: "from-blue-500 to-blue-600", followers: "32K", handle: "CalmChase", url: "#" },
    { name: "TikTok", icon: Video, color: "from-black to-gray-800", followers: "78K", handle: "@calmchase", url: "#" },
    { name: "Apple Music", icon: Music, color: "from-gray-800 to-black", followers: "28K", handle: "CalmChase", url: "#" }
  ];

  const achievements = [
    { icon: Users, number: "50K+", label: "Lives Transformed", color: "from-blue-400 to-cyan-400" },
    { icon: Globe, number: "120+", label: "Countries Reached", color: "from-green-400 to-emerald-400" },
    { icon: Award, number: "25+", label: "Awards Won", color: "from-yellow-400 to-orange-400" },
    { icon: Star, number: "4.9★", label: "User Rating", color: "from-purple-400 to-pink-400" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-cyan-50 overflow-hidden">
      <Navigation />
      
      {/* Magical Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Floating Background Elements */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-60 right-32 w-80 h-80 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-200/40 to-orange-200/40 rounded-full blur-3xl" />
        
        <FloatingIcon icon={Heart} delay={0} x={120} y={100} color="text-red-400" size={32} />
        <FloatingIcon icon={Sparkles} delay={1} x={300} y={200} color="text-yellow-500" size={28} />
        <FloatingIcon icon={Sun} delay={2} x={500} y={150} color="text-orange-400" size={36} />
        <FloatingIcon icon={Rainbow} delay={1.5} x={700} y={300} color="text-purple-500" size={40} />
        <FloatingIcon icon={Flower2} delay={0.5} x={200} y={400} color="text-pink-500" size={30} />
        <FloatingIcon icon={Star} delay={2.5} x={600} y={500} color="text-cyan-400" size={26} />
        <FloatingIcon icon={Zap} delay={3} x={80} y={600} color="text-yellow-400" size={34} />
        <FloatingIcon icon={Music} delay={1.8} x={800} y={180} color="text-green-500" size={28} />
        <FloatingIcon icon={Camera} delay={0.8} x={900} y={400} color="text-blue-500" size={32} />
        <FloatingIcon icon={Palette} delay={2.2} x={400} y={550} color="text-indigo-500" size={30} />
        <FloatingIcon icon={Coffee} delay={1.3} x={650} y={350} color="text-amber-500" size={28} />
        <FloatingIcon icon={Book} delay={3.2} x={150} y={300} color="text-teal-500" size={26} />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          className="text-center z-10 px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
        >
          <motion.h1 
            className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-500 to-yellow-500 bg-clip-text text-transparent mb-8 leading-tight"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            About Us
          </motion.h1>
          
          <motion.p 
            className="text-3xl md:text-5xl text-gray-700 mb-12 leading-relaxed font-medium max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            We're not just a company, we're a <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">movement</span> of positive change! ✨
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r ${achievement.color} rounded-3xl p-8 text-white shadow-2xl border-4 border-white min-w-48`}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <achievement.icon size={48} className="mx-auto mb-4" />
                <div className="text-4xl font-black mb-2">{achievement.number}</div>
                <div className="text-lg font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl font-black text-gray-800 mb-8">
              Our <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Born from a dream to make the world a calmer, happier place, CalmChase has grown into a global community of peace-seekers and dream-chasers! 🌍
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Target, title: "Our Mission", text: "To empower every soul on Earth to find their inner peace while chasing their wildest dreams!", color: "from-pink-400 to-rose-500" },
                { icon: Lightbulb, title: "Our Vision", text: "A world where stress is replaced by serenity, and chaos gives way to calm confidence!", color: "from-purple-400 to-indigo-500" },
                { icon: Smile, title: "Our Values", text: "Joy, Authenticity, Growth, and Community - these aren't just words, they're our way of life!", color: "from-cyan-400 to-blue-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${item.color} rounded-3xl p-8 text-white shadow-2xl`}
                  whileHover={{ scale: 1.05, y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <item.icon size={48} className="mr-6" />
                    <h3 className="text-3xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-xl leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-4 border-white/60">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-80 object-cover rounded-2xl mb-8 shadow-xl"
                />
                <h3 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                  The Magic Happens Here! ✨
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Every day, our team works with passion and purpose to create experiences that transform lives. We believe in the power of human connection and the magic that happens when people come together with a shared vision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-100/60 via-purple-100/60 to-cyan-100/60"
          style={{ y: floatingY }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl font-black text-gray-800 mb-8">
              Meet Our <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              The incredible humans behind the magic! Each one bringing their unique superpowers to make CalmChase extraordinary! 🦸‍♀️🦸‍♂️
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 100, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.05, y: -15, rotate: 2 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4
                }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-4 border-white/70 hover:shadow-3xl transition-all duration-500">
                  <div className="relative mb-6">
                    <motion.img 
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star size={24} className="text-white" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex justify-center mt-6 space-x-3">
                    {[Heart, Sparkles, Smile].map((Icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={18} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl font-black text-gray-800 mb-8">
              Join Our <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Digital Family
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Follow us across the digital universe! We're spreading positivity, sharing wisdom, and building community everywhere! 🌟
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                className="group block"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring"
                }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-r ${platform.color} rounded-3xl p-8 text-white shadow-2xl border-4 border-white hover:shadow-3xl transition-all duration-500`}>
                  <div className="flex items-center justify-between mb-6">
                    <platform.icon size={48} />
                    <motion.div
                      className="text-right"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-3xl font-black">{platform.followers}</div>
                      <div className="text-sm opacity-90">Followers</div>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-lg opacity-90 mb-4">{platform.handle}</p>
                  
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl py-3 font-bold text-lg transition-all duration-300">
                    Follow Us! 🚀
                  </Button>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl border-4 border-white">
              <h3 className="text-5xl font-black mb-6">Ready to Join the Movement? 🎉</h3>
              <p className="text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Don't just follow us - become part of our incredible community! Together, we're changing the world one calm moment at a time.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Journey 🌟
                </Button>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Join Community 💝
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
