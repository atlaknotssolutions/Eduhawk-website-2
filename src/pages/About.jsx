import { useState, useEffect } from "react";
import AboutImage from "../Images/About us page.gif";
import imageAbout2 from "../Images/ABOUT SERVICE.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const COUNTRIES = [
  { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
  { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
  { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
  { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
  { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
  { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    loc: "Delhi → Russia",
    text: "Edu-Hawk guided me every step of the way. No hidden charges, clear advice. Got into a top NMC-approved university in Russia!",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    loc: "Mumbai → Georgia",
    text: "The counsellors were transparent and genuinely cared about my future. Best decision to trust Edu-Hawk for my MBBS abroad journey.",
    stars: 5,
  },
  {
    name: "Ananya Patel",
    loc: "Ahmedabad → Kazakhstan",
    text: "From application to post-arrival, they supported me fully. I feel confident about my FMGE preparation with their guidance.",
    stars: 5,
  },
];

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2070",
    title: "Your Dream Medical Career Starts Here",
    subtitle:
      "Expert MBBS Abroad Counselling • NMC Approved Universities • Transparent Process",
    cta: "Book Free Counselling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2070",
    title: "Study MBBS in Russia & Georgia",
    subtitle:
      "Top Universities • Affordable Fees • Complete End-to-End Support",
    cta: "Get Started Today",
  },
  {
    image:
      "https://psgimsr.ac.in/wp-content/uploads/2024/07/20240717_220126.jpg",
    title: "Admission Made Simple & Secure",
    subtitle:
      "No Hidden Charges • Personalized Guidance • 2000+ Happy Students",
    cta: "Free Consultation Now",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is MBBS abroad from these countries valid in India?",
    answer:
      "Yes, all universities we recommend are NMC (National Medical Commission) approved. After completing MBBS, students can appear for the FMGE/NEXT exam to practice in India.",
  },
  {
    question: "What is the total cost of MBBS abroad?",
    answer:
      "The total cost (including tuition, hostel, food & miscellaneous) usually ranges between ₹15 Lakh to ₹50 Lakh depending on the country and university. We provide complete transparent fee breakdowns.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The entire process usually takes 2–6 months depending on the country, university, and how early you start. We recommend starting as early as possible after NEET results.",
  },
];

export default function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const navigate = useNavigate();
  // ✅ FIXED: PDF download function
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "../src/Images/Eduhawk.pdf"; // public folder mein PDF rakhna zaroori hai
    link.download = "Eduhawk.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7500);

    return () => {
      clearInterval(heroInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our counsellor will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>MBBS Abroad Consultancy in India | About EduHawk</title>
        <meta
          name="description"
          content="EduHawk is a leading MBBS abroad consultancy in India providing admission guidance, university selection, and visa assistance for Indian students."
        />
        <meta
          name="keywords"
          content="MBBS Abroad consultancy, study abroad consultants india, mbbs admission consultants, eduhawk"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 font-sans">
        {/* HERO CAROUSEL */}
        <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 transition-transform duration-[15000ms] brightness-[0.85]"
                style={{
                  transform:
                    idx === currentHeroSlide ? "scale(1.08)" : "scale(1.05)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 lg:px-20">
                <div className="text-center max-w-6xl">
                  <p className="inline-block mb-6 px-6 py-3 bg-[#d4a853]/30 backdrop-blur-md rounded-full text-white font-semibold tracking-wider text-base uppercase">
                    EDU HAWK – Where Innovation Meets Excellence
                  </p>

                  {idx === currentHeroSlide ? (
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                      {slide.title}
                    </h2>
                  )}

                  <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light mb-10 max-w-4xl mx-auto">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <button className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg">
                      {slide.cta} →
                    </button>

                    {/* ✅ FIXED: onClick attached correctly */}
                    <button
                      onClick={downloadPDF}
                      className="border-2 cursor-pointer border-white/70 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeroSlide(i)}
                className={`w-4 h-4 rounded-full transition-all duration-500 shadow-md ${
                  i === currentHeroSlide
                    ? "bg-[#f0c070] scale-125 ring-4 ring-[#d4a853]/50"
                    : "bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </section>

        {/* STATS BAR */}
        <div className="max-w-7xl mx-auto px-6 -mt-24 md:-mt-28 relative z-10">
          <div className="bg-white/95 backdrop-blur-xl border border-[#d4a853]/20 rounded-3xl shadow-2xl p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "2000+", l: "Students Placed" },
              { n: "10+", l: "Countries" },
              { n: "100+", l: "Universities/Colleges" },
              { n: "100%", l: "NMC Approved" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-[#d4a853]">
                  {s.n}
                </div>
                <div className="text-[#0a2342] font-semibold mt-2 uppercase tracking-wide text-sm md:text-base">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT US */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-4">
                Welcome to EDU HAWK
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Where innovation meets excellence in overseas medical education.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  At Eduhawk, we understand the complex world of college admissions and the challenges students and families face. Our mission is to simplify this journey through personalized guidance, trusted support, and expert counseling for students planning to 
                  {" "}
                  <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>  
                </p>
                <p className="mb-4">
                  We’re here to guide you through every decision — big or small — on the path to college success and the right global career opportunities.
                </p>
                <p className="font-medium">
                  Together, we turn the challenge of admissions into an opportunity for growth, learning, and success.
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="mt-4 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Join Us Today →
                </button>
              </div>

              <div>
                <img
                  src={AboutImage}
                  alt="EduHawk students and campus life"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-2xl md:text-3xl font-semibold text-[#d4a853] italic">
                "Where Dreams Take Flight – College Counselling Done Right"
              </p>
            </div>
          </div>
        </section>

        <section
  className="relative h-80 bg-cover bg-center md:h-96 animate-fade-in-up"
  style={{
    backgroundImage: "url('https://myphysiogroup.com/wp-content/uploads/2018/12/CTA-background.jpg')"
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />

  <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
    <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl animate-fade-in-up delay-100">
      Start Your Global Journey Today
    </h3>
    <p className="mt-4 max-w-2xl text-lg sm:text-xl animate-fade-in-up delay-200">
      Free profile evaluation • No-obligation consultation
    </p>

    {/* WhatsApp Button */}
    <button
      onClick={() => window.open("https://api.whatsapp.com/send?phone=919630736070", "_blank")}
      className="mt-8 rounded-full bg-white px-10 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 active:scale-95"
    >
      Talk to an Expert →
    </button>
  </div>
</section>

        {/* FAQ SECTION */}
        <section className="py-20 md:py-24 px-6 bg-[#faf8f4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Quick answers to the most common questions about MBBS abroad
                with EDU HAWK
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
              {/* FAQ List */}
              <div className="w-full lg:w-3/5 space-y-5">
                {FAQ_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg md:text-xl font-semibold text-[#0a2342] pr-4">
                        {item.question}
                      </span>
                      <span className="text-3xl font-light text-[#d4a853] flex-shrink-0">
                        {openFaqIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`px-6 md:px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                        openFaqIndex === index
                          ? "max-h-96 py-5 opacity-100"
                          : "max-h-0 py-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image + Tagline */}
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-6">
                <img
                  src={imageAbout2}
                  alt="MBBS abroad service illustration"
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                />
                <h3 className="text-2xl md:text-2xl lg:text-2xl font-serif font-bold tracking-tight text-indigo-800 text-center lg:text-left">
                  Where Dreams Take Flight:
                  <br className="hidden lg:block" /> College Counseling Done
                  Right
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
