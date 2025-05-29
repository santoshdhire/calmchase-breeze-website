import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Gallery = () => {
  const categories = [
    "All",
    "SSB Programs",
    "Digital Detox",
    "Personality Development",
    "Adventure Club"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryItems = [
    {
      category: "SSB Programs",
      title: "Group Task Activity",
      description: "Candidates working together to solve complex problems during SSB preparation.",
      color: "from-blue-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    },
    {
      category: "Digital Detox",
      title: "Meditation Session",
      description: "Participants practicing mindfulness during the 21-day digital detox program.",
      color: "from-purple-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1551818905-29c07d4802d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
    },
    {
      category: "Personality Development",
      title: "Public Speaking Workshop",
      description: "Students developing communication skills through public speaking exercises.",
      color: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Adventure Club",
      title: "Mountain Trekking",
      description: "Adventure club members building resilience through challenging treks.",
      color: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
    },
    {
      category: "SSB Programs",
      title: "Interview Preparation",
      description: "Mock interview sessions to prepare candidates for SSB interviews.",
      color: "from-blue-600 to-cyan-500",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Digital Detox",
      title: "Nature Connect",
      description: "Digital detox participants reconnecting with nature through outdoor activities.",
      color: "from-pink-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
    },
    {
      category: "Personality Development",
      title: "Team Building",
      description: "Interactive team building exercises to develop leadership skills.",
      color: "from-teal-500 to-green-600",
      image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Adventure Club",
      title: "Rock Climbing",
      description: "Building confidence through challenging physical activities.",
      color: "from-red-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1303&q=80"
    },
    {
      category: "SSB Programs",
      title: "Graduation Ceremony",
      description: "Successful candidates celebrating their selection into defense forces.",
      color: "from-indigo-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        } else if (e.key === 'ArrowRight') {
          setSelectedImage((prev) => 
            prev !== null ? Math.min(prev + 1, filteredItems.length - 1) : null
          );
        } else if (e.key === 'ArrowLeft') {
          setSelectedImage((prev) => 
            prev !== null ? Math.max(prev - 1, 0) : null
          );
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredItems.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Gallery</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Explore moments from our transformative programs that change lives.
            </motion.p>
          </div>
          
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Gallery Grid with Masonry Layout */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                className="break-inside-avoid cursor-pointer"
              >
                <div className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[350px] sm:h-[${Math.floor(Math.random() * 150) + 250}px]`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-br opacity-70 transition-opacity duration-300 group-hover:opacity-80" style={{
                    backgroundImage: `linear-gradient(to bottom right, ${item.color.includes('from-blue-500') ? '#3b82f6' : 
                      item.color.includes('from-purple-500') ? '#a855f7' :
                      item.color.includes('from-green-500') ? '#22c55e' :
                      item.color.includes('from-orange-500') ? '#f97316' :
                      item.color.includes('from-blue-600') ? '#2563eb' :
                      item.color.includes('from-pink-500') ? '#ec4899' :
                      item.color.includes('from-teal-500') ? '#14b8a6' :
                      item.color.includes('from-red-500') ? '#ef4444' :
                      item.color.includes('from-indigo-500') ? '#6366f1' : '#3b82f6'
                    }, ${
                      item.color.includes('to-indigo-600') ? '#4f46e5' : 
                      item.color.includes('to-pink-600') ? '#db2777' :
                      item.color.includes('to-emerald-600') ? '#059669' :
                      item.color.includes('to-red-600') ? '#dc2626' :
                      item.color.includes('to-cyan-500') ? '#06b6d4' :
                      item.color.includes('to-purple-600') ? '#9333ea' :
                      item.color.includes('to-green-600') ? '#16a34a' :
                      item.color.includes('to-orange-600') ? '#ea580c' :
                      item.color.includes('to-blue-600') ? '#2563eb' : '#4f46e5'
                    })`
                  }}></div>
                  
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium w-fit mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150">{item.title}</h3>
                    <p className="text-white/90 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">{item.description}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-1 bg-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Full screen image viewer */}
      {selectedImage !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-6 right-6 z-50">
            <button 
              onClick={() => setSelectedImage(null)}
              className="text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="relative w-full max-w-6xl max-h-[80vh] flex items-center justify-center" 
               onClick={(e) => e.stopPropagation()}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden w-full h-[70vh]"
            >
              <img 
                src={filteredItems[selectedImage].image} 
                alt={filteredItems[selectedImage].title}
                className="w-full h-full object-contain" 
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {filteredItems[selectedImage].title}
                </h2>
                <p className="text-xl text-white/90 mb-2">
                  {filteredItems[selectedImage].description}
                </p>
                <p className="text-white/70">
                  {filteredItems[selectedImage].category}
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-between w-full max-w-6xl mt-6">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (selectedImage > 0) setSelectedImage(selectedImage - 1);
              }}
              disabled={selectedImage === 0}
              className={`px-4 py-2 text-white rounded-lg ${selectedImage === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20'}`}
            >
              Previous
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (selectedImage < filteredItems.length - 1) setSelectedImage(selectedImage + 1);
              }}
              disabled={selectedImage === filteredItems.length - 1}
              className={`px-4 py-2 text-white rounded-lg ${selectedImage === filteredItems.length - 1 ? 'opacity-50 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20'}`}
            >
              Next
            </button>
          </div>
        </motion.div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
