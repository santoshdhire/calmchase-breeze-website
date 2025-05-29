import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

const MindfulnessInteractive = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  const durations = [30, 60, 120, 300];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    let breathInterval: NodeJS.Timeout;
    
    if (isActive) {
      breathInterval = setInterval(() => {
        setBreathPhase(phase => {
          switch (phase) {
            case 'inhale': return 'hold';
            case 'hold': return 'exhale';
            case 'exhale': return 'inhale';
            default: return 'inhale';
          }
        });
      }, 4000);
    }

    return () => clearInterval(breathInterval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(selectedDuration);
    setBreathPhase('inhale');
  };

  const selectDuration = (duration: number) => {
    setSelectedDuration(duration);
    setTimeLeft(duration);
    setIsActive(false);
    setBreathPhase('inhale');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getBreathInstruction = () => {
    switch (breathPhase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
    }
  };

  return (
    <section className="py-8 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Take a <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Mindful Moment</span>
          </h2>
          <p className="text-lg text-gray-600">
            Practice breathing exercises to center yourself and find inner peace.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Timer Display */}
          <div className="text-center mb-6">
            <div className="text-4xl font-semibold text-gray-800">{formatTime(timeLeft)}</div>
            <p className="text-lg text-blue-600 font-medium">{getBreathInstruction()}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={toggleTimer}
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-200"
            >
              {isActive ? <Pause size={24} className="text-blue-700" /> : <Play size={24} className="text-blue-700" />}
            </button>
            <button
              onClick={resetTimer}
              className="p-3 rounded-full bg-yellow-100 hover:bg-yellow-200 transition-colors duration-200"
            >
              <RotateCcw size={24} className="text-yellow-700" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
              <Volume2 size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Duration Options */}
          <div className="flex items-center justify-center gap-3">
            {durations.map(duration => (
              <button
                key={duration}
                onClick={() => selectDuration(duration)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedDuration === duration
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } transition-colors duration-200`}
              >
                {duration / 60} min
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessInteractive;
