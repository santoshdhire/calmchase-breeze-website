
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  // Sample blog posts - these would typically come from a CMS or database
  const blogPosts = [
    {
      title: "Building Mental Resilience in High-Pressure Situations",
      excerpt: "Learn the techniques our SSB candidates use to maintain composure under pressure.",
      date: "May 15, 2024",
      author: "Major Sharma",
      category: "Mental Wellness"
    },
    {
      title: "The Impact of Digital Detox on Cognitive Function",
      excerpt: "Research shows significant improvements in focus and creativity after just 7 days away from screens.",
      date: "May 7, 2024",
      author: "Dr. Patel",
      category: "Digital Detox"
    },
    {
      title: "Leadership Lessons from Military Training",
      excerpt: "How military leadership principles can be applied to corporate and personal growth.",
      date: "April 28, 2024",
      author: "Col. Verma",
      category: "Leadership"
    },
    {
      title: "Communication Skills That Transform Relationships",
      excerpt: "Master these five communication techniques to improve both personal and professional relationships.",
      date: "April 20, 2024",
      author: "Prof. Nair",
      category: "Communication"
    },
    {
      title: "The Adventure Club: Building Confidence Through Challenges",
      excerpt: "How outdoor activities and adventures build resilience and confidence in young adults.",
      date: "April 12, 2024",
      author: "Ravi Kumar",
      category: "Adventure"
    },
    {
      title: "From Tech Addiction to Tech Balance",
      excerpt: "Finding the right balance between using technology and maintaining mental wellbeing.",
      date: "April 5, 2024",
      author: "Dr. Mehra",
      category: "Digital Detox"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              CalmChase 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips and success stories to help you on your journey towards personal growth and wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-blue-600">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Read More 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
