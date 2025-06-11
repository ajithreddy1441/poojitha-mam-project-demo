import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Transform Your Health Through Personalized Nutrition
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-delay">
            Discover a healthier, more vibrant you with expert nutritional guidance tailored to your unique needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Link 
              to="/appointments" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-colors duration-300"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;