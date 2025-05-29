
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import InteractiveQuizCompact from '../components/InteractiveQuizCompact';
import OurActivities from '../components/OurActivities';
import OurPride from '../components/OurPride';
import MindfulnessInteractive from '../components/MindfulnessInteractive';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      <Hero />
      <Features />
      <OurActivities />
      <InteractiveQuizCompact />
      <OurPride />
      <MindfulnessInteractive />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
