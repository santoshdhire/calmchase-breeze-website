
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

const InteractiveQuizCompact = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the most effective way to build self-confidence?",
      options: [
        "Avoiding challenges to prevent failure",
        "Setting small, achievable goals and celebrating wins",
        "Comparing yourself constantly to others",
        "Waiting for others to validate your abilities"
      ],
      correct: 1,
      explanation: "Building confidence through small, achievable goals creates a positive feedback loop that strengthens your belief in your abilities."
    },
    {
      question: "Which technique is most effective for managing stress during challenging situations?",
      options: [
        "Ignoring the problem until it goes away",
        "Deep breathing and mindfulness techniques",
        "Overthinking all possible outcomes",
        "Avoiding the situation completely"
      ],
      correct: 1,
      explanation: "Deep breathing and mindfulness help activate your parasympathetic nervous system, reducing stress hormones and improving clarity."
    },
    {
      question: "What is the key characteristic of effective leadership?",
      options: [
        "Always being the loudest person in the room",
        "Making all decisions without input from others",
        "Empowering others and leading by example",
        "Avoiding difficult conversations"
      ],
      correct: 2,
      explanation: "True leadership involves empowering others, showing integrity, and leading through example rather than authority alone."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    // Auto-advance after 2 seconds
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent! You have a great understanding of personal development.";
    if (percentage >= 60) return "Good job! You're on the right track with personal growth.";
    return "Keep learning! There's always room for growth and improvement.";
  };

  if (quizCompleted) {
    return (
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <Trophy className="mx-auto text-yellow-500 mb-4" size={64} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quiz Complete!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              You scored <span className="font-bold text-purple-600 dark:text-purple-400">{score}</span> out of <span className="font-bold">{questions.length}</span>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{getScoreMessage()}</p>
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200"
            >
              <RotateCcw size={20} />
              Take Quiz Again
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Test Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Knowledge</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Quick assessment of your personal development understanding
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
        >
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {questions[currentQuestion].question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  showResult
                    ? index === questions[currentQuestion].correct
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                      : index === selectedAnswer
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                      : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && (
                    <div>
                      {index === questions[currentQuestion].correct && (
                        <CheckCircle className="text-green-500" size={20} />
                      )}
                      {index === selectedAnswer && index !== questions[currentQuestion].correct && (
                        <XCircle className="text-red-500" size={20} />
                      )}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl"
              >
                <p className="text-blue-800 dark:text-blue-300">
                  <strong>Explanation:</strong> {questions[currentQuestion].explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveQuizCompact;
