import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Transforming Lives Through Nutrition
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience in nutritional science and counseling, 
                I'm dedicated to helping you achieve optimal health through personalized 
                nutrition strategies and sustainable lifestyle changes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg"
                alt="Professional nutritionist"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Text Section */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My passion for nutrition began during my own health journey, which led me to pursue 
                a Master's degree in Clinical Nutrition from the University of Health Sciences. 
                This academic foundation, combined with practical experience, has shaped my 
                evidence-based yet personalized approach to nutrition counseling.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Throughout my career, I've had the privilege of working with diverse clients, 
                from professional athletes to individuals managing chronic health conditions. 
                Each client has taught me valuable lessons about the unique relationship 
                between nutrition, lifestyle, and overall wellbeing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, I continue to expand my knowledge through ongoing education and research, 
                staying current with the latest developments in nutritional science to provide 
                my clients with the most effective, science-based recommendations for their 
                health goals.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/photos/profile-varsha.jpg" 
                alt="My Journey" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;