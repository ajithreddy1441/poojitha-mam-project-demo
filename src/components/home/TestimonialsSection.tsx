import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Lost 30lbs in 6 months",
      content: "Working with Sarah completely transformed my relationship with food. Her personalized approach helped me lose weight in a sustainable way while actually enjoying what I eat. For the first time, I feel in control of my health.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marathon Runner",
      content: "As an athlete, nutrition is crucial for my performance. The custom meal plans and supplement recommendations have significantly improved my endurance and recovery times. I've set three personal records since we started working together!",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      role: "Managing Type 2 Diabetes",
      content: "Sarah's guidance has been life-changing for managing my diabetes. My blood sugar levels are more stable than they've been in years, and I've reduced my medication with my doctor's approval. Her approach is both scientific and compassionate.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have transformed their health and lives through personalized nutrition guidance.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute -top-6 left-10 bg-green-500 rounded-full p-3">
              <Quote className="h-6 w-6 text-white" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-green-100"
                />
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{testimonials[activeIndex].name}</h4>
                  <p className="text-green-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white hover:bg-green-50 text-green-600 rounded-full p-2 shadow-md transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white hover:bg-green-50 text-green-600 rounded-full p-2 shadow-md transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;