
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal, Brain, Shield, Users, Calendar, ArrowRight, Check } from 'lucide-react';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('ssb');

  const programs = {
    ssb: {
      title: "SSB Preparation Program",
      subtitle: "Join the Forces with Confidence",
      description: "Our comprehensive training program with excellent results for candidates aspiring to join the defence forces. Learn from experienced mentors and build the skills needed to excel.",
      icon: Medal,
      color: "from-blue-600 to-indigo-600",
      features: [
        "Personalized coaching from ex-servicemen",
        "Mock interviews and group tasks",
        "Physical training and mental conditioning",
        "Personality development workshops",
        "40+ successful selections to date"
      ],
      testimonial: {
        quote: "The structured approach and mentorship at CalmChase gave me the edge I needed to succeed in my SSB interview.",
        author: "Lt. Rohit Sharma",
        role: "Selected in Indian Army"
      }
    },
    digital: {
      title: "Digital Detox Programs",
      subtitle: "7-Day and 21-Day Transformations",
      description: "Break free from digital addiction and regain focus with our transformative programs designed to reconnect you with yourself and nature through mindful activities.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      features: [
        "Structured digital disengagement schedule",
        "Mindfulness and meditation practices",
        "Nature immersion activities",
        "Physical and mental wellness routines",
        "Community support and accountability"
      ],
      testimonial: {
        quote: "The 21-day digital detox changed my relationship with technology forever. I'm now more productive and present in my daily life.",
        author: "Neha Patel",
        role: "Software Engineer"
      }
    },
    personality: {
      title: "Personality Development Program",
      subtitle: "Unleash Your Full Potential",
      description: "Holistic programs focused on leadership, communication, social intelligence, and decision-making skills to transform your personal and professional life.",
      icon: Shield,
      color: "from-green-600 to-teal-600",
      features: [
        "Public speaking and communication workshops",
        "Leadership training and team building",
        "Emotional intelligence development",
        "Confidence building exercises",
        "Professional etiquette and networking"
      ],
      testimonial: {
        quote: "I was always the shy person in the room until I joined CalmChase. The transformation in my confidence and communication skills has been remarkable.",
        author: "Ananya Desai",
        role: "Marketing Executive"
      }
    },
    adventure: {
      title: "Adventure Club",
      subtitle: "Challenge Yourself, Discover Your Strength",
      description: "Join our thriving adventure community to build resilience and confidence through outdoor activities, challenges, and team adventures.",
      icon: Users,
      color: "from-orange-600 to-red-600",
      features: [
        "Regular trekking and hiking expeditions",
        "Rock climbing and rappelling activities",
        "Wilderness survival training",
        "Team challenges and competitions",
        "200+ active adventure community members"
      ],
      testimonial: {
        quote: "The Adventure Club pushed me beyond my comfort zone in ways I never imagined. I've discovered strengths I didn't know I had.",
        author: "Vikram Singh",
        role: "Adventure Club Member"
      }
    }
  };

  const activeProgram = programs[activeTab as keyof typeof programs];

  const ScheduleItem = ({ time, activity }: { time: string; activity: string }) => (
    <div className="flex items-start mb-6">
      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mr-4">
        <Calendar className="text-white" size={20} />
      </div>
      <div>
        <p className="text-white/90 font-medium">{time}</p>
        <p className="text-white/80">{activity}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Programs</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Transform your life with our holistic personality development platform designed to enhance your skills and wellbeing.
            </motion.p>
          </div>
          
          {/* Program Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {Object.entries(programs).map(([key, program]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${program.color} text-white shadow-lg`
                    : "bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700"
                }`}
              >
                <program.icon size={18} />
                {program.title.split(" ")[0]}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Program Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Left Column */}
              <div>
                <div className={`p-2 rounded-full w-fit bg-gradient-to-r ${activeProgram.color} mb-6`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <activeProgram.icon className="text-white" size={32} />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {activeProgram.title}
                </h2>
                
                <h3 className="text-xl md:text-2xl text-gray-700 mb-6">
                  {activeProgram.subtitle}
                </h3>
                
                <p className="text-gray-600 mb-8 text-lg">
                  {activeProgram.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {activeProgram.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`rounded-full p-1 bg-gradient-to-r ${activeProgram.color}`}>
                        <Check className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-full p-2 bg-gradient-to-r ${activeProgram.color}`}>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                        {activeProgram.testimonial.author.split(" ")[0][0] + activeProgram.testimonial.author.split(" ")[1][0]}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-2">"{activeProgram.testimonial.quote}"</p>
                      <p className="font-medium text-gray-900">{activeProgram.testimonial.author}</p>
                      <p className="text-sm text-gray-500">{activeProgram.testimonial.role}</p>
                    </div>
                  </div>
                </div>
                
                <button className={`bg-gradient-to-r ${activeProgram.color} text-white px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transform hover:translate-y-1 transition-all duration-300`}>
                  Enroll Now <ArrowRight size={20} />
                </button>
              </div>
              
              {/* Right Column */}
              <div>
                <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${activeProgram.color} p-8 text-white shadow-xl h-full`}>
                  <h3 className="text-2xl font-bold mb-6">Program Schedule</h3>
                  
                  <div className="space-y-6">
                    {activeTab === 'ssb' && (
                      <div className="space-y-6">
                        <ScheduleItem time="Week 1" activity="Orientation, basic fitness assessment, and introduction to SSB procedures" />
                        <ScheduleItem time="Week 2" activity="Psychological tests preparation and group tasks training" />
                        <ScheduleItem time="Week 3-4" activity="Personal interview techniques, GTO tasks, and conference preparation" />
                        <ScheduleItem time="Week 5" activity="Mock SSB boards, feedback sessions, and final preparation" />
                      </div>
                    )}
                    
                    {activeTab === 'digital' && (
                      <div className="space-y-6">
                        <ScheduleItem time="Day 1-2" activity="Digital device handover and introduction to mindfulness practices" />
                        <ScheduleItem time="Day 3-5" activity="Nature immersion activities and mindful awareness training" />
                        <ScheduleItem time="Day 6-14" activity="Deep work sessions, physical activity, and creative expression" />
                        <ScheduleItem time="Day 15-21" activity="Community engagement, reflection practices, and reintegration planning" />
                      </div>
                    )}
                    
                    {activeTab === 'personality' && (
                      <div className="space-y-6">
                        <ScheduleItem time="Session 1-3" activity="Self-awareness and personal strengths assessment" />
                        <ScheduleItem time="Session 4-6" activity="Communication mastery and public speaking practice" />
                        <ScheduleItem time="Session 7-9" activity="Leadership skills and emotional intelligence development" />
                        <ScheduleItem time="Session 10-12" activity="Professional presence and networking strategies" />
                      </div>
                    )}
                    
                    {activeTab === 'adventure' && (
                      <div className="space-y-6">
                        <ScheduleItem time="Month 1" activity="Introductory treks and basic outdoor skills training" />
                        <ScheduleItem time="Month 2" activity="Intermediate hiking and team-building challenges" />
                        <ScheduleItem time="Month 3" activity="Rock climbing, rappelling, and survival skills" />
                        <ScheduleItem time="Month 4" activity="Major expedition and wilderness navigation challenge" />
                      </div>
                    )}
                    
                    <div className="pt-6 border-t border-white/20">
                      <h4 className="font-medium mb-3">Program Details:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-white/80">
                        <li>Small batch sizes for personalized attention</li>
                        <li>Expert instructors and mentors</li>
                        <li>All necessary materials and resources provided</li>
                        <li>Post-program support and community access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Programs;
