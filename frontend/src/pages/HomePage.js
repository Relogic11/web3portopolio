import React from 'react';
import Navigation from '../components/Navigation';
import HeroSlider from '../components/HeroSlider';
import ProjectsGrid from '../components/ProjectsGrid';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ProjectsGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;