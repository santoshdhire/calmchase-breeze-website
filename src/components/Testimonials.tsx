
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content: "CalmChase has completely transformed my approach to stress management. The mindfulness sessions are incredibly effective.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      content: "As someone who works long hours, CalmChase helps me find balance and maintain my mental wellness throughout the day.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      content: "The sleep stories feature has been a game-changer for my insomnia. I now sleep better than I have in years.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Entrepreneur",
      content: "CalmChase provides the perfect blend of relaxation and energy. It's become an essential part of my daily routine.",
      rating: 5,
      avatar: "DT"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-blue-200">
            Join thousands of satisfied users on their wellness journey
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-white/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>
            
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <div className="flex items-center justify-center mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-blue-200">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/30"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-blue-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/30"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
