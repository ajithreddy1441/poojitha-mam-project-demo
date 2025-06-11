import React from 'react';
import { Link } from 'react-router-dom';
import { Weight, Apple, FileWarning as Running, Heart, Users, Coffee } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-green-100 p-3 inline-flex rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="text-green-600 font-medium hover:text-green-700 inline-flex items-center transition-colors"
      >
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Weight className="h-6 w-6 text-green-600" />,
      title: "Weight Management",
      description: "Sustainable weight loss or gain strategies tailored to your metabolism and lifestyle."
    },
    {
      icon: <Apple className="h-6 w-6 text-green-600" />,
      title: "Personalized Meal Plans",
      description: "Custom nutrition plans that fit your preferences, dietary needs, and health goals."
    },
    {
      icon: <Running className="h-6 w-6 text-green-600" />,
      title: "Sports Nutrition",
      description: "Optimize your athletic performance with targeted nutritional strategies."
    },
    {
      icon: <Heart className="h-6 w-6 text-green-600" />,
      title: "Medical Nutrition Therapy",
      description: "Specialized nutrition guidance for managing health conditions and chronic diseases."
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Corporate Wellness",
      description: "Workplace nutrition programs to boost employee health and productivity."
    },
    {
      icon: <Coffee className="h-6 w-6 text-green-600" />,
      title: "Nutrition Workshops",
      description: "Interactive group sessions on various nutrition topics for communities and organizations."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nutritional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive nutrition services designed to help you reach your health goals and transform your relationship with food.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center transition-colors duration-300"
          >
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;