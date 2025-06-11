import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Bookmark, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/8844383/pexels-photo-8844383.jpeg" 
              alt="Professional nutritionist in consultation" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Journey to Better Health Starts Here
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hi, I'm Poojitha, a certified nutritionist with over 10 years of experience helping people transform their health through the power of nutrition. My approach combines evidence-based science with personalized strategies that fit your unique lifestyle.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Certified Expert</h3>
                  <p className="text-gray-600">Board-certified nutritionist with advanced degrees in nutritional science and dietetics.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Bookmark className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Personalized Approach</h3>
                  <p className="text-gray-600">Customized nutrition plans that adapt to your unique body, preferences, and lifestyle.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Proven Results</h3>
                  <p className="text-gray-600">Helped over 1,000 clients achieve their health and wellness goals through nutrition.</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              Learn more about my approach
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;