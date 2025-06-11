import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Home;