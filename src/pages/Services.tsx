import React from 'react';
import { Weight, Apple, FileWarning, Heart, Users, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Weight className="h-12 w-12 text-primary-600" />,
      title: "Weight Management",
      description: "Personalized weight loss or gain programs based on your metabolism, lifestyle, and goals.",
      features: [
        "Customized meal planning",
        "Progress tracking",
        "Behavioral coaching",
        "Regular check-ins"
      ],
      price: "₹500/session"
    },
    {
      icon: <Apple className="h-12 w-12 text-primary-600" />,
      title: "Personalized Meal Plans",
      description: "Detailed meal plans tailored to your preferences, allergies, and nutritional needs.",
      features: [
        "Weekly meal plans",
        "Shopping lists",
        "Recipe suggestions",
        "Portion guidance"
      ],
      price: "₹500/session"
    },
    {
      icon: <FileWarning className="h-12 w-12 text-primary-600" />,
      title: "Sports Nutrition",
      description: "Optimize your athletic performance with targeted nutritional strategies.",
      features: [
        "Performance nutrition",
        "Pre/post workout plans",
        "Supplement guidance",
        "Hydration strategies"
      ],
      price: "₹500/session"
    },
    {
      icon: <Heart className="h-12 w-12 text-primary-600" />,
      title: "Medical Nutrition",
      description: "Specialized nutrition plans for managing health conditions and chronic diseases.",
      features: [
        "Condition-specific plans",
        "Medical coordination",
        "Symptom management",
        "Progress monitoring"
      ],
      price: "₹500/session"
    },
    {
      icon: <Users className="h-12 w-12 text-primary-600" />,
      title: "Corporate Wellness",
      description: "Comprehensive nutrition programs for workplace health improvement.",
      features: [
        "Group workshops",
        "Individual counseling",
        "Health assessments",
        "Progress reports"
      ],
      price: "Custom pricing"
    },
    {
      icon: <Coffee className="h-12 w-12 text-primary-600" />,
      title: "Nutrition Workshops",
      description: "Educational sessions on various nutrition topics for groups and organizations.",
      features: [
        "Interactive sessions",
        "Practical demos",
        "Q&A sessions",
        "Take-home materials"
      ],
      price: "Custom pricing"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Nutrition Services Tailored to Your Needs
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our range of personalized nutrition services designed to help you achieve 
              your health and wellness goals.
            </p>
            <Link
              to="/appointments"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-primary-600 mb-6">
                    {service.price}
                  </div>
                  <Link
                    to="/appointments"
                    className="block text-center bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;