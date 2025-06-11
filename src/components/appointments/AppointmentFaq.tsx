import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const AppointmentFaq: React.FC = () => {
  const faqItems: FaqItem[] = [
    {
      question: "How long does a nutritional consultation last?",
      answer: "Initial consultations typically last 60 minutes, allowing us to thoroughly discuss your health history, goals, and current eating patterns. Follow-up appointments are usually 30-45 minutes, focusing on progress and adjustments to your nutrition plan."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any recent medical test results, a list of medications or supplements you're taking, and a 3-day food diary if possible. This helps me understand your current health status and eating patterns to create a more personalized nutrition plan."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes! I provide both in-person and virtual consultations via secure video conferencing. Virtual sessions offer the same personalized attention and care as in-person visits, just with the convenience of connecting from anywhere."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I understand that schedules can change. Please provide at least 24 hours' notice for cancellations or rescheduling to avoid a cancellation fee. Emergencies are, of course, handled with understanding on a case-by-case basis."
    },
    {
      question: "Do you accept insurance?",
      answer: "I am an out-of-network provider for most insurance plans. I can provide you with a superbill that you can submit to your insurance for possible reimbursement. I recommend checking with your insurance provider about coverage for nutrition counseling."
    },
    {
      question: "How many sessions will I need?",
      answer: "This varies based on individual goals and needs. Most clients benefit from an initial consultation followed by 3-6 follow-up sessions. Long-term health changes often require ongoing support, while specific short-term goals might need fewer sessions."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-green-300 shadow-md' : 'border-gray-200'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                <div 
                  className={`px-4 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions about the appointment process?
            </p>
            <a 
              href="mailto:info@nutrilife.com" 
              className="text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              Contact us for more information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentFaq;