import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-green-100">
            Take the first step toward a healthier you today. Schedule a consultation and discover how personalized nutrition can change your life.
          </p>
          
          <Link 
            to="/appointments" 
            className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-medium inline-flex items-center transition-colors duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;