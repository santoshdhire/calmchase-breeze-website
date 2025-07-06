
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Star, Heart, Sparkles, Zap, Globe, MessageCircle, Sun, Cloud, Flower, Rainbow, Coffee, Music, Camera } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Creative parallax transforms for light mode
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const floatingElements = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // Bouncy spring animations
  const springConfig = { stiffness: 200, damping: 20, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -150]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -80]), springConfig);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0, color = "text-pink-400" }: { icon: any, delay?: number, x?: number, y?: number, color?: string }) => (
    <motion.div
      className={`absolute ${color} opacity-60`}
      style={{ x, y }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon size={20 + Math.random() * 25} />
    </motion.div>
  );

  const testimonials = [
    { name: "Sarah Johnson", text: "CalmChase transformed my life! 🌟", avatar: "👩‍💼" },
    { name: "Mike Chen", text: "Best mindfulness journey ever! 🧘‍♂️", avatar: "👨‍💻" },
    { name: "Emma Wilson", text: "Peace found at last! 🕊️", avatar: "👩‍🎨" },
    { name: "David Brown", text: "Incredible experience! ✨", avatar: "👨‍🔬" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 overflow-hidden">
      <Navigation />
      
      {/* Playful Animated Cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 pointer-events-none z-50 mix-blend-multiply"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0.7 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Creative Background Elements */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl" />
        
        {/* Floating Creative Icons */}
        <FloatingIcon icon={Sun} delay={0} x={150} y={120} color="text-yellow-400" />
        <FloatingIcon icon={Cloud} delay={1} x={320} y={180} color="text-blue-400" />
        <FloatingIcon icon={Flower} delay={2} x={520} y={140} color="text-pink-500" />
        <FloatingIcon icon={Rainbow} delay={1.5} x={720} y={280} color="text-purple-500" />
        <FloatingIcon icon={Heart} delay={0.5} x={220} y={380} color="text-red-400" />
        <FloatingIcon icon={Sparkles} delay={2.5} x={620} y={480} color="text-indigo-400" />
        <FloatingIcon icon={Star} delay={3} x={80} y={500} color="text-yellow-500" />
        <FloatingIcon icon={Zap} delay={1.8} x={800} y={150} color="text-orange-500" />
        <FloatingIcon icon={Coffee} delay={0.8} x={900} y={350} color="text-amber-500" />
        <FloatingIcon icon={Music} delay={2.2} x={420} y={520} color="text-green-500" />
        <FloatingIcon icon={Camera} delay={1.3} x={650} y={320} color="text-teal-500" />
      </motion.div>

      {/* Hero Section with Vibrant Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          className="text-center z-10 px-4"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-8 leading-tight">
              Say Hello!
            </h1>
            <motion.p 
              className="text-2xl md:text-4xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Let's create something <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">amazing</span> together! 
              <br />Your journey to peace starts with a simple message.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { icon: Mail, bg: "from-pink-400 to-rose-400" },
              { icon: Phone, bg: "from-purple-400 to-indigo-400" },
              { icon: MapPin, bg: "from-cyan-400 to-blue-400" }
            ].map(({ icon: Icon, bg }, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r ${bg} rounded-3xl p-8 shadow-xl border-4 border-white`}
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0], y: -20 }}
                transition={{ duration: 0.4 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Icon size={36} className="text-white" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-r from-pink-300/40 to-purple-300/40 rounded-full shadow-2xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-48 right-24 w-56 h-56 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full shadow-2xl"
          style={{ y: y2 }}
        />
      </section>

      {/* Creative Contact Form Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Contact Info Cards */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-black text-gray-800 mb-16">
                Connect With <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Our Team
                </span>
              </h2>
              
              {[
                { 
                  icon: MapPin, 
                  title: "Visit Our Sanctuary", 
                  info: "123 Mindfulness Avenue, Peaceful Gardens, PG 12345",
                  bg: "from-pink-100 to-rose-100",
                  iconBg: "from-pink-400 to-rose-500",
                  border: "border-pink-200"
                },
                { 
                  icon: Phone, 
                  title: "Call for Guidance", 
                  info: "+1 (555) 123-CALM",
                  bg: "from-purple-100 to-indigo-100",
                  iconBg: "from-purple-400 to-indigo-500",
                  border: "border-purple-200"
                },
                { 
                  icon: Mail, 
                  title: "Send Love Letters", 
                  info: "hello@calmchase.com",
                  bg: "from-cyan-100 to-blue-100",
                  iconBg: "from-cyan-400 to-blue-500",
                  border: "border-cyan-200"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`group bg-gradient-to-r ${item.bg} rounded-3xl p-8 shadow-xl border-2 ${item.border} hover:shadow-2xl transition-all duration-500`}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-8">
                    <motion.div 
                      className={`bg-gradient-to-r ${item.iconBg} p-6 rounded-2xl shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon size={32} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.info}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Vibrant Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-white/50"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-10">
                <h3 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                  Start Your Journey
                </h3>
                <p className="text-gray-600 text-lg">Every great story begins with hello!</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { key: 'name', placeholder: 'Your Beautiful Name', type: 'text', icon: '👋' },
                  { key: 'email', placeholder: 'Your Email Address', type: 'email', icon: '✉️' },
                  { key: 'subject', placeholder: 'What\'s on Your Mind?', type: 'text', icon: '💭' }
                ].map((field, index) => (
                  <motion.div
                    key={field.key}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                      {field.icon}
                    </div>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="pl-16 bg-white/70 border-2 border-purple-200 text-gray-700 placeholder:text-gray-500 h-16 text-lg rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-4 top-6 text-2xl">💌</div>
                  <Textarea
                    placeholder="Share your thoughts, dreams, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="pl-16 bg-white/70 border-2 border-purple-200 text-gray-700 placeholder:text-gray-500 min-h-36 text-lg rounded-2xl focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                    rows={6}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold py-6 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Send className="mr-3" size={24} />
                    Send My Message 🚀
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creative Testimonials Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-cyan-100/50"
          style={{ y: floatingElements }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-7xl font-black text-gray-800 mb-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            What People <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-2 border-white/60"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4
                }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-700 text-lg font-medium mb-4">{testimonial.text}</p>
                <h4 className="text-gray-800 font-bold">{testimonial.name}</h4>
                <div className="flex justify-center mt-3 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Stats Section */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            {[
              { number: "10,000+", label: "Happy Souls", icon: "😊", color: "from-pink-400 to-rose-500" },
              { number: "50+", label: "Countries Reached", icon: "🌍", color: "from-purple-400 to-indigo-500" },
              { number: "24/7", label: "Support Available", icon: "💝", color: "from-cyan-400 to-blue-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r ${stat.color} rounded-3xl p-8 text-white shadow-2xl`}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-xl font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
