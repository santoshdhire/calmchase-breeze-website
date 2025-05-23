
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

type BreathStep = {
  instruction: string;
  duration: number; // in seconds
  color: string;
};

const breathingPattern: BreathStep[] = [
  { instruction: "Inhale", duration: 4, color: "from-blue-400 to-cyan-300" },
  { instruction: "Hold", duration: 7, color: "from-purple-400 to-pink-300" },
  { instruction: "Exhale", duration: 8, color: "from-green-400 to-emerald-300" },
];

const quotes = [
  "Your mind will answer most questions if you learn to relax and wait for the answer.",
  "The greatest weapon against stress is our ability to choose one thought over another.",
  "Within you lies a calm that never leaves.",
  "Mindfulness isn't difficult. We just need to remember to do it.",
  "Peace comes from within. Do not seek it without.",
  "Wherever you go, there you are.",
  "The best way to capture moments is to pay attention.",
  "Be present above all else.",
  "Respond, don't react.",
  "Every moment is a fresh beginning."
];

const MindfulnessInteractive = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(breathingPattern[0].duration);
  const [quote, setQuote] = useState("");
  const [completedCycles, setCompletedCycles] = useState(0);
  
  const circleAnimation = useAnimation();
  const textAnimation = useAnimation();
  
  // Randomize quote selection
  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  
  // Progress to next step in breathing cycle
  const progressStep = useCallback(() => {
    const nextStep = (currentStep + 1) % breathingPattern.length;
    setCurrentStep(nextStep);
    setSecondsLeft(breathingPattern[nextStep].duration);
    
    // If we've completed a full cycle
    if (nextStep === 0) {
      setCompletedCycles(prevCycles => prevCycles + 1);
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  }, [currentStep]);
  
  // Handle countdown and animations
  useEffect(() => {
    if (!isActive) return;
    
    // Animation for current step
    const currentBreathStep = breathingPattern[currentStep];
    
    switch (currentBreathStep.instruction) {
      case "Inhale":
        circleAnimation.start({
          scale: 1.3,
          transition: { duration: currentBreathStep.duration, ease: "easeInOut" }
        });
        break;
      case "Hold":
        // Keep circle expanded
        break;
      case "Exhale":
        circleAnimation.start({
          scale: 1,
          transition: { duration: currentBreathStep.duration, ease: "easeInOut" }
        });
        break;
    }
    
    // Text fade in animation
    textAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
    
    // Countdown timer
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // After animation completes, fade out text before changing it
          textAnimation.start({
            opacity: 0,
            y: 10,
            transition: { duration: 0.5 }
          }).then(() => {
            progressStep();
          });
          return prev - 1;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isActive, currentStep, circleAnimation, textAnimation, progressStep]);
  
  // Toggle breathing exercise
  const toggleActive = () => {
    if (isActive) {
      // Reset when stopping
      setCurrentStep(0);
      setSecondsLeft(breathingPattern[0].duration);
      circleAnimation.start({ scale: 1 });
    }
    setIsActive(!isActive);
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 -z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.2
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.2 + Math.random() * 0.3, 0.5 + Math.random() * 0.3, 0.2 + Math.random() * 0.3]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur opacity-50"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-4 px-4 py-2">
              Take a <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Mindful Moment</span>
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mt-4">
            Practice a guided breathing exercise to calm your mind and reduce stress.
          </p>
        </motion.div>
        
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Breathing exercise */}
          <div className="relative mb-10 flex flex-col items-center">
            {/* Breathing circle with 3D glow */}
            <div className="mb-10 relative group">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: isActive ? [1, 1.05, 1] : 1,
                  opacity: isActive ? [0.7, 0.9, 0.7] : 0.7
                }}
                transition={{
                  duration: 4,
                  repeat: isActive ? Infinity : 0,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <motion.div 
                animate={circleAnimation}
                className={`w-64 h-64 rounded-full bg-gradient-to-r ${breathingPattern[currentStep].color} shadow-lg flex items-center justify-center relative z-10`}
              >
                <motion.div 
                  animate={textAnimation}
                  className="text-center text-white"
                >
                  <div className="text-3xl font-bold mb-2">{breathingPattern[currentStep].instruction}</div>
                  <div className="text-lg opacity-90">{secondsLeft}s</div>
                </motion.div>
              </motion.div>
              
              {/* Progress circles */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {breathingPattern.map((_, index) => (
                  <div
                    key={index}
                    className={`h-3 w-3 rounded-full transition-colors duration-500 ${
                      index === currentStep
                        ? "bg-blue-400 shadow-md shadow-blue-400/50"
                        : "bg-gray-400/30"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Control button with glow */}
            <div className="relative group">
              <div className={`absolute -inset-1 rounded-full blur-sm transition-all duration-300 ${
                isActive 
                  ? "bg-red-500/70 group-hover:bg-red-600/90"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-90"
              }`}></div>
              <button
                onClick={toggleActive}
                className={`relative px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  isActive 
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                }`}
              >
                {isActive ? "Stop" : "Start Breathing Exercise"}
              </button>
            </div>
            
            {/* Mindfulness quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-12 max-w-xl text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg"
              >
                <p className="text-lg text-white italic">"{quote}"</p>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress indicator */}
            {completedCycles > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-center"
              >
                <p className="text-white/80">
                  <span className="font-bold text-teal-300 text-lg">{completedCycles}</span> {completedCycles === 1 ? 'cycle' : 'cycles'} completed
                </p>
              </motion.div>
            )}
          </div>
          
          {/* Benefits cards with 3D effect */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          >
            {[
              {
                title: "Reduce Stress",
                description: "Breathing exercises activate your parasympathetic nervous system, reducing stress hormones.",
                icon: "💆"
              },
              {
                title: "Improve Focus",
                description: "Regular mindfulness practice enhances attention and decision-making abilities.",
                icon: "🧠"
              },
              {
                title: "Better Sleep",
                description: "Calming your mind before bed leads to improved sleep quality and duration.",
                icon: "😴"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessInteractive;
