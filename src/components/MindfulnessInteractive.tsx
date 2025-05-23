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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 -z-10"></div>
      
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.05
            }}
            animate={{
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 60 + 60,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Take a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mindful Moment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice a guided breathing exercise to calm your mind and reduce stress.
          </p>
        </motion.div>
        
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Breathing exercise */}
          <div className="relative mb-10 flex flex-col items-center">
            {/* Breathing circle */}
            <div className="mb-10 relative">
              <motion.div 
                animate={circleAnimation}
                className={`w-64 h-64 rounded-full bg-gradient-to-r ${breathingPattern[currentStep].color} shadow-lg flex items-center justify-center`}
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
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {breathingPattern.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentStep
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Control button */}
            <button
              onClick={toggleActive}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                isActive 
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              }`}
            >
              {isActive ? "Stop" : "Start Breathing Exercise"}
            </button>
            
            {/* Mindfulness quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-10 max-w-xl text-center"
              >
                <p className="text-lg text-gray-700 italic">"{quote}"</p>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress indicator */}
            {completedCycles > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-purple-600">{completedCycles}</span> {completedCycles === 1 ? 'cycle' : 'cycles'} completed
                </p>
              </motion.div>
            )}
          </div>
          
          {/* Benefits cards */}
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
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessInteractive;
