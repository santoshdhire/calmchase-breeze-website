
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, Tag, ArrowLeft, Share2, ThumbsUp, MessageCircle, Bookmark } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Building Mental Resilience in High-Pressure Situations",
    excerpt: "Learn the techniques our SSB candidates use to maintain composure under pressure and perform at their best when it matters most.",
    content: `
      <p class="text-lg mb-6">When faced with high-pressure situations, especially during SSB interviews and tests, mental resilience becomes the defining factor between success and failure. At CalmChase, we've developed comprehensive techniques to help candidates maintain their composure when it matters most.</p>
      
      <h2 class="text-2xl font-bold mt-10 mb-4">Understanding Mental Resilience</h2>
      <p class="mb-4">Mental resilience isn't simply about "being tough." It's a sophisticated set of psychological skills that allows individuals to:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Process and manage stress effectively</li>
        <li>Maintain cognitive function under pressure</li>
        <li>Adapt quickly to changing circumstances</li>
        <li>Recover from setbacks without losing momentum</li>
        <li>Preserve decision-making quality regardless of external pressure</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-10 mb-4">Key Techniques We Teach</h2>
      
      <h3 class="text-xl font-semibold mt-8 mb-3">1. Tactical Breathing</h3>
      <p class="mb-4">The 4-4-4-4 method (inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds) activates the parasympathetic nervous system, immediately reducing physiological stress responses.</p>
      
      <h3 class="text-xl font-semibold mt-8 mb-3">2. Cognitive Reframing</h3>
      <p class="mb-4">We train candidates to quickly identify negative thought patterns and replace them with constructive perspectives that support performance rather than undermine it.</p>
      
      <h3 class="text-xl font-semibold mt-8 mb-3">3. Visualization Techniques</h3>
      <p class="mb-4">Regular practice of detailed success visualization creates neural pathways that the brain can access during high-pressure situations, making optimal performance feel familiar even in challenging circumstances.</p>
      
      <h3 class="text-xl font-semibold mt-8 mb-3">4. Micro-Recovery Practices</h3>
      <p class="mb-4">Short, strategic mental breaks even during intense activities help prevent cognitive fatigue and maintain peak performance throughout extended challenges.</p>
      
      <h2 class="text-2xl font-bold mt-10 mb-4">Real Results</h2>
      <p class="mb-4">Candidates who master these techniques consistently report:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Clearer thinking during complex problem-solving exercises</li>
        <li>Reduced anxiety before and during interviews</li>
        <li>Better recall of prepared material</li>
        <li>Improved group task performance</li>
        <li>Higher overall confidence throughout the selection process</li>
      </ul>
      
      <p class="text-lg mt-10">The ability to perform at your best when under pressure isn't just valuable for SSB selection—it's a life skill that serves our candidates in every challenging situation they'll face in their military careers and beyond.</p>
    `,
    date: "May 15, 2024",
    author: "Major Sharma",
    authorRole: "SSB Training Director",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Mental Wellness",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-blue-500 to-indigo-600",
    tags: ["Mental Wellness", "SSB Preparation", "Leadership", "Stress Management"]
  },
  {
    id: 2,
    title: "The Impact of Digital Detox on Cognitive Function",
    excerpt: "Research shows significant improvements in focus and creativity after just 7 days away from screens. Discover the science behind our program.",
    content: `
      <p class="text-lg mb-6">In our increasingly connected world, the constant barrage of notifications, information, and digital stimulation is taking a significant toll on our cognitive abilities. At CalmChase, our Digital Detox programs are designed based on cutting-edge neuroscience research to help participants reclaim their mental clarity, focus, and creativity.</p>
      
      <h2 class="text-2xl font-bold mt-10 mb-4">The Science Behind Digital Overload</h2>
      <p class="mb-4">Recent studies from leading cognitive research institutions reveal some alarming findings about how constant digital consumption affects the brain:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Attention spans have decreased by nearly 25% over the past decade</li>
        <li>Task-switching from digital distractions can decrease productivity by up to 40%</li>
        <li>Heavy social media use correlates with increased anxiety and decreased deep thinking</li>
        <li>Sleep quality diminishes with evening screen exposure, affecting next-day cognitive performance</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-10 mb-4">The 7-Day Transformation</h2>
      <p class="mb-4">Our research with program participants shows remarkable improvements after just one week of structured digital detox:</p>
      
      <h3 class="text-xl font-semibold mt-8 mb-3">Days 1-2: The Adjustment Phase</h3>
      <p class="mb-4">Participants typically experience mild withdrawal symptoms, including checking phantom notifications and feeling anxious about "missing out." However, sleep quality begins to improve almost immediately.</p>
      
      <h3 class="text-xl font-semibold mt-8 mb-3">Days 3-5: Cognitive Renewal</h3>
      <p class="mb-4">By the middle of the week, attention spans measurably increase. Participants report being able to focus on single tasks for 30-45 minutes without distraction, compared to just 3-5 minutes at the beginning of the program.</p>
      
      <h3 class="text-xl font-semibold mt-8 mb-3">Days 6-7: Creative Awakening</h3>
      <p class="mb-4">The most dramatic changes occur toward the end of the week. With minds freed from constant input, participants experience significant creativity boosts, novel problem-solving approaches, and report a 65% increase in "aha moment" insights.</p>
      
      <h2 class="text-2xl font-bold mt-10 mb-4">Beyond the 7-Day Program</h2>
      <p class="mb-4">The benefits of our Digital Detox program extend well beyond the initial week. Graduates of our program report:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>More mindful technology use when they return to digital devices</li>
        <li>Improved relationship satisfaction as they engage more deeply with those around them</li>
        <li>Better work performance with new strategies for focused productivity</li>
        <li>Continued creative thinking with regular "digital sabbaticals"</li>
      </ul>
      
      <p class="text-lg mt-10">Our 21-day program builds on these foundations, creating lasting neural pathways that support sustained cognitive improvement and a healthier relationship with technology in our connected world.</p>
    `,
    date: "May 7, 2024",
    author: "Dr. Patel",
    authorRole: "Cognitive Neuroscientist",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Digital Detox",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "from-purple-500 to-pink-600",
    tags: ["Digital Detox", "Brain Health", "Productivity", "Mindfulness"]
  },
  // ... other blog posts with similar structure
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === Number(id));
  
  // If no post is found, redirect to the blog page
  if (!post) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Post not found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-200"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  // Calculate related posts (posts in the same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(relatedPost => relatedPost.category === post.category && relatedPost.id !== post.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <section className="pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-6 group"
            >
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Articles
            </button>
          </motion.div>
          
          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-10">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="opacity-80" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="opacity-80" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={18} className="opacity-80" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] shadow-xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-30`}></div>
            </div>
          </motion.div>
          
          {/* Author card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 shadow-md"
          >
            <img 
              src={post.authorImage} 
              alt={post.author} 
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-200 dark:border-purple-400" 
            />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">{post.author}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{post.authorRole}</p>
            </div>
          </motion.div>
          
          {/* Article Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></motion.div>
          
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 mb-10"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags && post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Interaction buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-between items-center border-t border-b border-gray-200 dark:border-gray-700 py-6 my-10"
          >
            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <ThumbsUp size={20} />
                <span>Like</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <MessageCircle size={20} />
                <span>Comment</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Bookmark size={20} />
                <span>Save</span>
              </button>
            </div>
            
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Share2 size={20} />
              <span>Share</span>
            </button>
          </motion.div>
          
          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Link 
                    to={`/blog/${relatedPost.id}`} 
                    key={relatedPost.id}
                    className="group"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-md transition-all duration-300"
                    >
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      
                      <div className="p-4">
                        <span className="text-sm text-blue-600 dark:text-blue-400">{relatedPost.category}</span>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{relatedPost.readTime}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
