
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
import { ThemeProvider } from 'next-themes';

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
    </ThemeProvider>
  );
};

export default Index;
