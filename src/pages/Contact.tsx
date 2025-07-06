
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Star, Heart, Sparkles, Zap, Globe, MessageCircle } from 'lucide-react';
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

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const floatingElements = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -200]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -100]), springConfig);

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
    // Add form submission logic here
  };

  const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0 }: { icon: any, delay?: number, x?: number, y?: number }) => (
    <motion.div
      className="absolute text-blue-300/20 dark:text-blue-400/20"
      style={{ x, y }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon size={24 + Math.random() * 20} />
    </motion.div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 overflow-hidden">
      <Navigation />
      
      {/* Animated Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Parallax Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-indigo-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        {/* Animated Floating Elements */}
        <FloatingIcon icon={Star} delay={0} x={100} y={100} />
        <FloatingIcon icon={Heart} delay={1} x={300} y={200} />
        <FloatingIcon icon={Sparkles} delay={2} x={500} y={150} />
        <FloatingIcon icon={Zap} delay={1.5} x={700} y={300} />
        <FloatingIcon icon={Globe} delay={0.5} x={200} y={400} />
        <FloatingIcon icon={MessageCircle} delay={2.5} x={600} y={500} />
      </motion.div>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-center z-10 px-4"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Let's Connect
            </h1>
            <motion.p 
              className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Ready to embark on an extraordinary journey? We're here to make magic happen together.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[Mail, Phone, MapPin].map((Icon, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-full p-6 border border-white/20"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Icon size={32} className="text-white" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-blue-500/20 rounded-full blur-xl"
          style={{ y: y2 }}
        />
      </section>

      {/* Interactive Contact Form Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Contact Info with Parallax Cards */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-12">
                Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
              </h2>
              
              {[
                { icon: MapPin, title: "Visit Us", info: "123 Innovation Street, Tech City, TC 12345" },
                { icon: Phone, title: "Call Us", info: "+1 (555) 123-CALM" },
                { icon: Mail, title: "Email Us", info: "hello@calmchase.com" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.info}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Contact Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { key: 'name', placeholder: 'Your Name', type: 'text' },
                  { key: 'email', placeholder: 'Your Email', type: 'email' },
                  { key: 'subject', placeholder: 'Subject', type: 'text' }
                ].map((field, index) => (
                  <motion.div
                    key={field.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32 text-lg rounded-xl focus:border-blue-400 focus:ring-blue-400/20"
                    rows={6}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map/Location Section with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"
          style={{ y: floatingElements }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-6xl font-bold text-white mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            Find Us in the <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Universe</span>
          </motion.h2>

          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="text-white text-2xl font-semibold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🗺️ Interactive Map Coming Soon
              </motion.div>
              
              {/* Animated location pulse */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-4 h-4 bg-red-500 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
