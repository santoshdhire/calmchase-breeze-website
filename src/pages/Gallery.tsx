
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Gallery = () => {
  // Sample gallery categories and images
  const categories = [
    "All",
    "SSB Programs",
    "Digital Detox",
    "Personality Development",
    "Adventure Club"
  ];
  
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  // This would typically come from your content management system
  const galleryItems = [
    {
      category: "SSB Programs",
      title: "Group Task Activity",
      description: "Candidates working together to solve complex problems during SSB preparation."
    },
    {
      category: "Digital Detox",
      title: "Meditation Session",
      description: "Participants practicing mindfulness during the 21-day digital detox program."
    },
    {
      category: "Personality Development",
      title: "Public Speaking Workshop",
      description: "Students developing communication skills through public speaking exercises."
    },
    {
      category: "Adventure Club",
      title: "Mountain Trekking",
      description: "Adventure club members building resilience through challenging treks."
    },
    {
      category: "SSB Programs",
      title: "Interview Preparation",
      description: "Mock interview sessions to prepare candidates for SSB interviews."
    },
    {
      category: "Digital Detox",
      title: "Nature Connect",
      description: "Digital detox participants reconnecting with nature through outdoor activities."
    },
    {
      category: "Personality Development",
      title: "Team Building",
      description: "Interactive team building exercises to develop leadership skills."
    },
    {
      category: "Adventure Club",
      title: "Rock Climbing",
      description: "Building confidence through challenging physical activities."
    },
    {
      category: "SSB Programs",
      title: "Graduation Ceremony",
      description: "Successful candidates celebrating their selection into defense forces."
    }
  ];
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore moments from our programs, events, and success stories.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-white/50 backdrop-blur-sm hover:bg-white text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-lg">{item.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
