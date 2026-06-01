

import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    title: "Study MBBS Abroad",
    subtitle: "World-Class Medical Education Awaits",
  },
  {
    image: "https://cdn.residencyadvisor.com/images/articles_v1_rewrite/v1_PREMED_AND_MEDICAL_SCHOOL_PREP_INTERNATIONAL_MEDICAL_SCHOOLS_exploring_best_european_countries-step1-international-medical-students-studying--5060.png",
    title: "Global Opportunities",
    subtitle: "Top Universities • Affordable Fees • English Medium",
  },
  {
    image: "https://cdn.residencyadvisor.com/images/articles_v1_rewrite/v1_PREMED_AND_MEDICAL_SCHOOL_PREP_INTERNATIONAL_MEDICAL_SCHOOLS_rise_international_medical_schools-step2-international-medical-school-campus-and--5798.png",
    title: "Your Medical Journey Starts Here",
    subtitle: "Russia • Georgia • Kazakhstan • Philippines & More",
  },
  {
    image: "https://spaninternational.org/wp-content/uploads/2025/06/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-sitting-desk-work-computer-with-medical-tools-holding-globe-her-thumb-up-isolation-yellow-background-1.jpg",
    title: "Dream Big, Study Smart",
    subtitle: "NEET Qualified? Let's Find Your Perfect University",
  },
];

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* === Beautiful Carousel Header === */}
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-[0.65]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Dots navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* === Main Blog Content - Improved Design === */}
      <section id="blog" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Optional small banner image or keep clean */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-10 px-8 text-white text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Unlocking Global Opportunities in Medical Education
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                Your trusted guide to MBBS abroad — quality education, affordable fees & bright future
              </p>
            </div>

            <div className="p-6 md:p-10 lg:p-14 prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:underline">
              <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 border-l-4 border-blue-600 pl-4">
                Introduction
              </h2>
              <p>
                If you want to pursue a medical education abroad with world-class opportunities, we are here for you. We guide you throughout the admission process for top medical colleges worldwide. The path to becoming a successful doctor is exciting yet very challenging.
              </p>
              <p>
                In today’s interconnected world, aspiring doctors from India have more choices than ever before to pursue quality medical education abroad.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 border-l-4 border-blue-600 pl-4">
                Top Medical Colleges That Accept Indian Students
              </h2>
              <p>
                Every year thousands of Indian students pursue MBBS abroad and cutoffs keep rising due to limited seats and high competition. Choosing the right university becomes extremely important.
              </p>

              <div className="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-blue-700 font-semibold text-lg mb-3">
                  <a href="https://eduhawk.in/" className="hover:underline flex items-center gap-2">
                    Explore Top Universities for MBBS Abroad →
                  </a>
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 border-l-4 border-blue-600 pl-4">
                Why Indian Students Choose Medical Colleges Abroad
              </h2>
              <p>
                Affordable fees • English medium • Modern infrastructure • Global exposure • No donation in most cases — these are the biggest reasons.
              </p>
              <p>
                Trusted destinations: Russia, Bangladesh, Nepal, Kazakhstan, Uzbekistan, Kyrgyzstan, Georgia, Philippines and more.
              </p>

              {/* Add more sections similarly with improved spacing & styling */}

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-5 border-l-4 border-blue-600 pl-4">
                Conclusion
              </h2>
              <p className="font-medium text-lg">
                At <strong className="text-blue-700">Eduhawk</strong>, we walk with you from dream → application → admission → successful settlement abroad.
              </p>

              <div className="mt-12 text-center">
                <a
                  href="https://eduhawk.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-5 px-12 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Free Consultation Today →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;