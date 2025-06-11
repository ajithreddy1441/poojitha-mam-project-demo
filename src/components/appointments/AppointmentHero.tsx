import React from 'react';
import { Clock, Calendar, CreditCard, CheckCircle } from 'lucide-react';

const AppointmentHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Schedule Your Nutritional Consultation
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Take the first step toward your health transformation. Book a one-on-one consultation to discuss your nutritional needs and goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 inline-flex rounded-full mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Choose a Date</h3>
              <p className="text-gray-600">Select a day that works best for your schedule.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 inline-flex rounded-full mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pick a Time</h3>
              <p className="text-gray-600">Morning, afternoon, or evening slots available.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 inline-flex rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Confirm Booking</h3>
              <p className="text-gray-600">Secure your appointment with a simple booking process.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 inline-flex rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Prepared</h3>
              <p className="text-gray-600">Receive pre-appointment instructions via email.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHero;