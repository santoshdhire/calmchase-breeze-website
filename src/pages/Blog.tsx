import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Search, Calendar, User, Tag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [featuredPost, setFeaturedPost] = useState<number | null>(null);

  // Sample blog posts - updated type to include optional image property
  const blogPosts = [
    {
      id: 1,
      title: "Building Mental Resilience in High-Pressure Situations",
      excerpt: "Learn the techniques our SSB candidates use to maintain composure under pressure and perform at their best when it matters most.",
      date: "May 15, 2024",
      author: "Major Sharma",
      category: "Mental Wellness",
      readTime: "7 min read",
      color: "from-blue-500 to-indigo-600",
      image: undefined // Added optional image property
    },
    {
      id: 2,
      title: "The Impact of Digital Detox on Cognitive Function",
      excerpt: "Research shows significant improvements in focus and creativity after just 7 days away from screens. Discover the science behind our program.",
      date: "May 7, 2024",
      author: "Dr. Patel",
      category: "Digital Detox",
      readTime: "5 min read",
      color: "from-purple-500 to-pink-600",
      image: undefined // Added optional image property
    },
    {
      id: 3,
      title: "Leadership Lessons from Military Training",
      excerpt: "How military leadership principles can be applied to corporate and personal growth to achieve exceptional results in any field.",
      date: "April 28, 2024",
      author: "Col. Verma",
      category: "Leadership",
      readTime: "6 min read",
      color: "from-green-500 to-teal-600",
      image: undefined // Added optional image property
    },
    {
      id: 4,
      title: "Communication Skills That Transform Relationships",
      excerpt: "Master these five communication techniques to improve both personal and professional relationships and resolve conflicts effectively.",
      date: "April 20, 2024",
      author: "Prof. Nair",
      category: "Communication",
      readTime: "8 min read",
      color: "from-orange-500 to-red-600",
      image: undefined // Added optional image property
    },
    {
      id: 5,
      title: "The Adventure Club: Building Confidence Through Challenges",
      excerpt: "How outdoor activities and adventures build resilience and confidence in young adults by pushing them beyond their comfort zones.",
      date: "April 12, 2024",
      author: "Ravi Kumar",
      category: "Adventure",
      readTime: "4 min read",
      color: "from-cyan-500 to-blue-600",
      image: undefined // Added optional image property
    },
    {
      id: 6,
      title: "From Tech Addiction to Tech Balance",
      excerpt: "Finding the right balance between using technology and maintaining mental wellbeing in today's constantly connected world.",
      date: "April 5, 2024",
      author: "Dr. Mehra",
      category: "Digital Detox",
      readTime: "6 min read",
      color: "from-rose-500 to-pink-600",
      image: undefined // Added optional image property
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  useEffect(() => {
    setFeaturedPost(Math.floor(Math.random() * blogPosts.length));
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory ? post.category === activeCategory : true;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              Insights & 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Inspiration</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore our collection of articles on personal growth, mindfulness, leadership, and more.
            </motion.p>
          </div>
          
          {/* Search and filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-12"
          >
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === null
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/80"
                }`}
              >
                All Topics
              </motion.button>
              
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/80"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            
            {/* Search button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(true)}
              className="bg-white/50 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors duration-200"
            >
              <Search size={20} className="text-gray-700" />
            </motion.button>
          </motion.div>
          
          {/* Search overlay */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-32"
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-2xl mx-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">Search Articles</h2>
                    <button 
                      onClick={() => setIsSearchOpen(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by title, content, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                  </div>
                  
                  {searchTerm && (
                    <div className="mt-6">
                      <p className="text-sm text-gray-500 mb-3">
                        {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found
                      </p>
                      <ul className="space-y-3">
                        {filteredPosts.slice(0, 5).map((post) => (
                          <li key={post.id}>
                            <Link to={`/blog/${post.id}`} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${post.color} flex-shrink-0`}></div>
                              <div>
                                <h3 className="font-medium text-gray-900">{post.title}</h3>
                                <p className="text-sm text-gray-500">{post.category} • {post.readTime}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setIsSearchOpen(false)}
                        className="mt-4 w-full py-2 text-center text-blue-600 font-medium hover:underline"
                      >
                        View all results
                      </button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured Article */}
          {featuredPost !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <Link to={`/blog/${blogPosts[featuredPost].id}`}>
                <div className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-r ${blogPosts[featuredPost].color}`}>
                  {blogPosts[featuredPost].image && (
                    <img 
                      src={blogPosts[featuredPost].image}
                      alt={blogPosts[featuredPost].title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative p-8 md:p-12 text-white">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                        Featured Article
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
                      {blogPosts[featuredPost].title}
                    </h2>
                    
                    <p className="text-white/90 text-xl mb-8 max-w-2xl">
                      {blogPosts[featuredPost].excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="opacity-80" />
                        <span>{blogPosts[featuredPost].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={18} className="opacity-80" />
                        <span>{blogPosts[featuredPost].author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag size={18} className="opacity-80" />
                        <span>{blogPosts[featuredPost].category}</span>
                      </div>
                    </div>
                    
                    <div 
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-full text-white font-medium transition-all duration-200"
                    >
                      Read Article <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <Link to={`/blog/${post.id}`} className="h-40 overflow-hidden">
                  {post.image && (
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  )}
                  {!post.image && (
                    <div className={`h-full bg-gradient-to-r ${post.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/80 font-light italic text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}
                </Link>
                
                <div className="p-6 flex-1 flex flex-col">
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Read More 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setActiveCategory(null);
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
