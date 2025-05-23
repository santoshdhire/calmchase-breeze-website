
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronRight, Award } from 'lucide-react';

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = [
    {
      question: "What is one of the key benefits of a digital detox?",
      options: [
        "Becoming more dependent on technology",
        "Improved focus and mental clarity",
        "Learning to code better",
        "Gaining more social media followers"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT a focus area of CalmChase's personality development program?",
      options: [
        "Social Intelligence",
        "Communication Skills",
        "Technical Programming",
        "Decision-making"
      ],
      correctAnswer: 2
    },
    {
      question: "How many successful selections to defence forces has CalmChase achieved?",
      options: [
        "Over 20",
        "Over 30",
        "Over 40",
        "Over 50"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the duration of CalmChase's extended digital detox program?",
      options: [
        "7 days",
        "14 days",
        "21 days",
        "30 days"
      ],
      correctAnswer: 2
    },
    {
      question: "What is CalmChase's tagline?",
      options: [
        "Develop Your Mind",
        "Chase Your Goals With Calmness",
        "Succeed With Confidence",
        "Transform Your Future"
      ],
      correctAnswer: 1
    }
  ];

  useEffect(() => {
    if (isCorrect !== null) {
      const timer = setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        } else {
          setShowResults(true);
        }
        setSelectedOption(null);
        setIsCorrect(null);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isCorrect, currentQuestion]);

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    const correct = optionIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Test Your 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Knowledge</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Take this quick quiz to see how much you know about personal development
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-lg border border-blue-100"
        >
          <div className="p-6 md:p-10">
            {!showResults ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">Score: {score}</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
                  <motion.div 
                    initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                      {questions[currentQuestion].question}
                    </h3>
                    
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleOptionSelect(index)}
                          disabled={selectedOption !== null}
                          whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
                          whileTap={{ scale: selectedOption === null ? 0.98 : 1 }}
                          className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-200 flex justify-between items-center ${
                            selectedOption === index
                              ? index === questions[currentQuestion].correctAnswer
                                ? "border-green-500 bg-green-50"
                                : "border-red-500 bg-red-50"
                              : selectedOption !== null && index === questions[currentQuestion].correctAnswer
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 bg-white hover:border-blue-300"
                          }`}
                        >
                          <span className={`${
                            selectedOption === index
                              ? index === questions[currentQuestion].correctAnswer
                                ? "text-green-700"
                                : "text-red-700"
                              : selectedOption !== null && index === questions[currentQuestion].correctAnswer
                                ? "text-green-700"
                                : "text-gray-800"
                          }`}>{option}</span>
                          
                          {selectedOption !== null && (
                            index === questions[currentQuestion].correctAnswer ? (
                              <Check className="text-green-600" size={20} />
                            ) : selectedOption === index ? (
                              <X className="text-red-600" size={20} />
                            ) : null
                          )}
                        </motion.button>
                      ))}
                    </div>
                    
                    {selectedOption !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-6 p-4 rounded-lg ${
                          isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        <p className="font-medium">{isCorrect ? "Correct!" : "Incorrect!"}</p>
                        <p className="text-sm mt-1">
                          {isCorrect 
                            ? "Great job! You selected the right answer."
                            : `The correct answer is: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`
                          }
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-6"
              >
                <div className="inline-block p-4 rounded-full bg-blue-100 mb-6">
                  <Award className="text-blue-600" size={40} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Quiz Complete!
                </h3>
                
                <p className="text-xl mb-6">
                  You scored <span className="font-bold text-blue-600">{score}</span> out of {questions.length}
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                  <button 
                    onClick={resetQuiz}
                    className="px-6 py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    Try Again
                  </button>
                  
                  <button 
                    onClick={() => window.location.href = '#programs'}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Explore Our Programs</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
                
                <p className="mt-8 text-gray-500 text-sm">
                  Want to learn more about personal development? Check out our blog for in-depth articles.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveQuiz;
