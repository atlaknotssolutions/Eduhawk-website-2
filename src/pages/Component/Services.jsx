import React, { useState, useEffect } from "react";
import ExpertGuidance from "../../Images/Service Image/Expert Guidance.jpg";
import Globalmap from "../../Images/Service Image/global-map.png";
import Globalmap2 from "../../Images/Service Image/backround one.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Random high-quality study abroad themed images (Unsplash – free to use)
const slideImages = [
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80", // University campus
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80", // Student with books & globe
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Library / global education vibe
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: slideImages[0],
      title: "Your Dream University is One Conversation Away",
    },
    {
      img: slideImages[1],
      title: "From Dream to Degree — We’re With You",
    },
    {
      img: slideImages[2],
      title: "Study Abroad Made Simple, Trusted & Successful",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
    
     <Helmet>
                      <title>MBBS Abroad Services | Admission and Visa Assistance </title>
                      <meta name="description" content="Complete MBBS abroad services including counseling, admission, documentation and visa support for Indian students." />
                      <meta name="keywords" content="mbbs services, mbbs admission services, study abroad services" />
                    </Helmet>
    <div className="bg-gray-50 font-sans antialiased">
      {/* ─── Hero Carousel ──────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSlide === idx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
            <img
              src={slide.img}
              alt={slide.title}
              className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 flex items-center justify-center px-5">
              {currentSlide === idx ? (
                <h1 className="max-w-5xl text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl transition-all duration-1000 delay-300 opacity-100 translate-y-0">
                  {slide.title}
                </h1>
              ) : (
                <h2 className="max-w-5xl text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl transition-all duration-1000 delay-300 opacity-0 translate-y-12">
                  {slide.title}
                </h2>
              )}
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-500 ${
                currentSlide === idx
                  ? "w-12 bg-white shadow-xl scale-125"
                  : "bg-white/50 hover:bg-white/80 hover:scale-110"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── Intro + Benefits ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:py-32 animate-fade-in-up">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl animate-pulse-slow">
            EduHawk
          </h2>
          <p className="mt-5 text-xl font-medium text-blue-800 sm:text-2xl transition-all duration-700 delay-200">
            Your Trusted Bridge to World-Class Education
          </p>

          <div className="mt-12 grid gap-10 text-left text-lg leading-relaxed text-gray-700 sm:grid-cols-2">
            <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="animate-fade-in-up delay-100">
                <h3 className="text-xl font-semibold text-blue-800">
                  → Personalized Counseling
                </h3>
                <p className="mt-3 text-gray-600">
                  One-on-one guidance tailored to your profile, goals & budget.
                </p>
              </div>
              <div className="animate-fade-in-up delay-200">
                <h3 className="text-xl font-semibold text-blue-800">
                  → Application Mastery
                </h3>
                <p className="mt-3 text-gray-600">
                  SOPs, LORs, essays — written & polished to stand out.
                </p>
              </div>
            </div>

            <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="animate-fade-in-up delay-300">
                <h3 className="text-xl font-semibold text-blue-800">
                  → Visa & Scholarship Support
                </h3>
                <p className="mt-3 text-gray-600">
                  Latest rules, strong documentation, interview preparation.
                </p>
              </div>
              <div className="animate-fade-in-up delay-400">
                <h3 className="text-xl font-semibold text-blue-800">
                  → Lifetime Guidance
                </h3>
                <p className="mt-3 text-gray-600">
                  Support doesn’t end after admission — we stay connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Banner / CTA Strip ─────────────────────────────────────────── */}
      <section
        className="relative h-80 bg-cover bg-center md:h-96 animate-fade-in-up"
        style={{ backgroundImage: "url('Images/fixed.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl animate-fade-in-up delay-100">
            Start Your Global Journey Today
          </h3>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl animate-fade-in-up delay-200">
            Free profile evaluation • No-obligation consultation
          </p>
          <Link to="/contact">
            <button className="mt-8 rounded-full bg-white px-10 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 active:scale-95" onClick={() => window.open("https://api.whatsapp.com/send?phone=919630736070", "_blank")}>
              Talk to an Expert →
            </button>
          </Link>
        </div>
      </section>

      {/* ─── Feature Cards ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <h3 className="mb-16 text-center text-4xl font-bold text-gray-800 sm:text-5xl animate-fade-in-up">
          Why Students Choose EduHawk
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl animate-fade-in-up delay-100">
            <div className="h-60 overflow-hidden">
              <img
                src={ExpertGuidance}
                alt="Expert Guidance"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-800 transition-colors group-hover:text-blue-700">
                Expert Guidance
              </h4>
              <div className="mx-auto my-5 h-1 w-16 rounded bg-gradient-to-r from-blue-600 to-indigo-600 transition-all group-hover:w-24" />
              <p className="text-gray-600">
                10+ years helping students get into top universities worldwide.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl animate-fade-in-up delay-200">
            <div className="h-60 overflow-hidden bg-gray-50 flex items-center justify-center p-8">
              <img
                src={Globalmap}
                alt="Global Network"
                className="max-h-40 w-auto object-contain transition-transform duration-1000 group-hover:scale-125"
              />
            </div>
            <div className="p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-800 transition-colors group-hover:text-blue-700">
                Global Network
              </h4>
              <div className="mx-auto my-5 h-1 w-16 rounded bg-gradient-to-r from-blue-600 to-indigo-600 transition-all group-hover:w-24" />
              <p className="text-gray-600">
                Direct partnerships with 300+ universities in 15+ countries.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl animate-fade-in-up delay-300">
            <div className="h-60 overflow-hidden">
              <img
                src={Globalmap2}
                alt="Success Stories"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-800 transition-colors group-hover:text-blue-700">
                Proven Success
              </h4>
              <div className="mx-auto my-5 h-1 w-16 rounded bg-gradient-to-r from-blue-600 to-indigo-600 transition-all group-hover:w-24" />
              <p className="text-gray-600">
                94% visa success rate • Hundreds of happy students every year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    </>
  );
};

export default Services;
