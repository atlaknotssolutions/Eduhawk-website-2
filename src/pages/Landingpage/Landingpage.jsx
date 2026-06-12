import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DollarSign,
  Landmark,
  TrendingDown,
  GraduationCap,
  Plane,
  Users,
  Target,
  ClipboardList,
  Home,
  Star,
  X,
} from "lucide-react";
import Eduhawk from "../../assets/Eduhawk.png";
import ReCAPTCHA from "react-google-recaptcha";
import landingpage from "../../assets/landingpage.png";

const NAV_LINKS = [
  "Home",
  "Countries",
  "Process",
  "Benefits",
  "Testimonials",
  "FAQ",
  "Contact",
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1920&q=85",
  landingpage,
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=85",
];

const COUNTRIES = [
  {
    name: "Russia",
    path: "mbbs-abroad/russia",
    rank: "#1 Choice",
    color: "#06b6d4",
    uniImage:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=366,fit=crop/A1a5NrBXj9i91Mlj/moscow-university-AMq8zkJ3pRuwa2XD.jpg",
  },
  {
    name: "Kazakhstan",
    path: "mbbs-abroad/kazakhstan",
    rank: "Top Rated",
    color: "#22d3ee",
    uniImage:
      "https://www.jagvimal.com/assets/admin/images/universities/logo/small/Asfendiyarov%20Kazakh%20National%20Medical%20University%20banner.JPG-62733.JPG",
  },
  {
    name: "Georgia",
    path: "mbbs-abroad/georgia",
    rank: "EU Standard",
    color: "#0ea5e9",
    uniImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhv3S_ZVqbAoA5OnTQqpiecgg_ofNulvypQ&s",
  },
  {
    name: "Bangladesh",
    path: "mbbs-abroad/bangladesh",
    rank: "NMC Approved",
    color: "#06b6d4",
    uniImage:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/2.%E0%A6%B6%E0%A6%BE%E0%A6%AA%E0%A6%B2%E0%A6%BE_%E0%A6%9A%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%B0.jpg",
  },
  {
    name: "Nepal",
    path: "mbbs-abroad/nepal",
    rank: "Affordable",
    color: "#10b981",
    uniImage: "https://asmi.edu.kg/wp-content/uploads/slider2/DJI_0086.jpeg",
  },
  {
    name: "Kyrgyzstan",
    path: "mbbs-abroad/kyrgyzstan",
    rank: "Low Cost",
    color: "#eab308",
    uniImage:
      "https://rmgoe.org/universities/Abroad/image/1735537684_kyrgyz-state-medical-academy.webp",
  },
  {
    name: "Uzbekistan",
    path: "mbbs-abroad/uzbekistan",
    rank: "Emerging",
    color: "#8b5cf6",
    uniImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFC5qIm9jdlTqfCLroiFgRg-kzrz8xAjT4AA&s",
  },
  {
    name: "Tajikistan",
    path: "mbbs-abroad/tajikistan",
    rank: "Budget Friendly",
    color: "#ec4899",
    uniImage:
      "https://www.worldwidecolleges.com/wp-content/uploads/2021/11/atsmu-ori.jpg",
  },
  {
    name: "Egypt",
    path: "mbbs-abroad/egypt",
    rank: "Ancient Legacy",
    color: "#f59e0b",
    uniImage:
      "https://medicine.cu.edu.eg/wp-content/uploads/FB_IMG_1696877122196.jpg",
  },
  {
    name: "Vietnam",
    path: "mbbs-abroad/vietnam",
    rank: "Fast Growing",
    color: "#22c55e",
    uniImage:
      "https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2024/04/Hanoi-Medical-University-Vietnam-2.webp",
  },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: "No Donation",
    desc: "Zero hidden donation or capitation fees",
  },
  {
    icon: Landmark,
    title: "NMC/MCI Approved",
    desc: "All universities are NMC & WHO recognized",
  },
  {
    icon: TrendingDown,
    title: "Low Fees",
    desc: "Complete package starting from ₹18 Lakh",
  },
  {
    icon: GraduationCap,
    title: "English Medium",
    desc: "Full English medium + FMGE coaching support",
  },
  {
    icon: Plane,
    title: "100% Visa Assistance",
    desc: "High visa success rate with full documentation help",
  },
  {
    icon: Users,
    title: "Post Admission Support",
    desc: "Hostel, airport pickup & ongoing student support",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Free Counseling",
    desc: "Personalized guidance based on your NEET score & budget",
    icon: Target,
  },
  {
    num: "02",
    title: "Document Preparation",
    desc: "We handle all documents including NEET scorecard & transcripts",
    icon: ClipboardList,
  },
  {
    num: "03",
    title: "University Selection & Admission",
    desc: "Secure admission in best NMC-approved university",
    icon: Landmark,
  },
  {
    num: "04",
    title: "Visa & Travel",
    desc: "Complete visa processing and pre-departure orientation",
    icon: Plane,
  },
  {
    num: "05",
    title: "Post Landing Support",
    desc: "Airport pickup, accommodation & 24×7 student support",
    icon: Home,
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    city: "Bhopal, MP",
    text: "Bahut acha support mila admission process me. Documentation bhi smoothly ho gaya. Thank you team. Professional team and honest advice. They guide properly and do not mislead.",
    avatar: "PS",
    year: "MBBS 3rd Year, Russia",
  },
  {
    name: "Arjun Patel",
    city: "Bhopal, MP",
    text: "As a parent, I was very confused about MBBS abroad, but Edu Hawk team guided us properly. Now I feel confident about my child’s future",
    avatar: "AP",
    year: "MBBS 2nd Year, Georgia",
  },
];

export default function Landingpage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "MBBS Abroad Inquiry",
    message: "",
    country: "",
  });

  // Hero Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setStatus({
        loading: false,
        message: "Please complete the reCAPTCHA verification",
        error: true,
      });
      return;
    }

    try {
      const response = await fetch(
        "https://api.eduhawk.in/api/contact/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim() || undefined,
            subject: formData.subject,
            country: formData.country || undefined,
            message:
              formData.message.trim() +
              (formData.country
                ? `\n\nPreferred Country: ${formData.country}`
                : ""),
            captcha: captchaToken,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: "Thank you! Your message has been sent successfully.",
          error: false,
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "MBBS Abroad Inquiry",
          message: "",
          country: "",
        });
        recaptchaRef.current?.reset();
      } else {
        setStatus({
          loading: false,
          message: data.message || "Failed to send message. Please try again.",
          error: true,
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        message: "Network error. Please check your internet connection.",
        error: true,
      });
    }
  };

  const openCounseling = () => setShowModal(true);

  // Navigate to Country Page
  const handleCountryClick = (path) => {
    navigate(`/${path}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-['Sora'] bg-slate-50 text-slate-950 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
        .glass {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(6,182,212,0.15);
        }
        .modal-scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .modal-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .hero-bg { transition: opacity 1.5s ease-in-out; }
        .country-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,0,0,0.1); }
        .benefit-card:hover { transform: translateY(-8px); }
        .uni-image { height: 180px; object-fit: cover; border-radius: 16px; }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-5 lg:px-10 transition-all duration-300 ${
          scrolled ? "shadow-md bg-white/95" : "bg-white/90 shadow-sm"
        }`}
      >
        <div className="flex items-center gap-3">
          <img src={Eduhawk} alt="Eduhawk Logo" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-600 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <button
            onClick={openCounseling}
            className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Free Counseling
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-slate-700"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-white/95 shadow-xl border-t border-slate-200 z-40">
          <div className="flex flex-col gap-4 px-5 py-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-slate-700 hover:text-cyan-600 transition-colors"
              >
                {link}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openCounseling();
              }}
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full font-semibold hover:scale-[1.02] transition-all"
            >
              Free Counseling
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen relative flex items-center pt-20 overflow-hidden"
      >
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className="hero-bg absolute inset-0 bg-cover bg-center transition-opacity duration-1500 h-full w-full"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentBgIndex === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 z-10" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
            2026-27 ADMISSIONS OPEN
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6 text-white">
            Your Dream of{" "}
            <span className="font-['Playfair_Display'] italic bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              MBBS Abroad
            </span>{" "}
            Starts Here
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-10">
            India's trusted MBBS abroad consultancy. NMC approved universities •
            Low fees • No donation
          </p>
          <button
            onClick={openCounseling}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-2xl font-semibold text-lg hover:scale-105 transition-all shadow-2xl"
          >
            Get Free Counseling Now →
          </button>
        </div>
      </section>

      {/* COUNTRIES SECTION */}
      <section id="countries" className="py-24 px-6 lg:px-10 bg-white">
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-sm font-bold tracking-widest mb-3">
            POPULAR DESTINATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Top Countries for MBBS Abroad
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {COUNTRIES.map((country) => (
            <div
              key={country.name}
              onClick={() => handleCountryClick(country.path)}
              className="country-card glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={country.uniImage}
                alt={country.name}
                className="uni-image w-full"
              />
              <div className="p-8">
                <div
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-2"
                  style={{
                    backgroundColor: `${country.color}15`,
                    color: country.color,
                  }}
                >
                  {country.rank}
                </div>
                <h3 className="text-3xl font-bold">{country.name}</h3>

                <p className="text-cyan-600 text-sm mt-4 group-hover:underline">
                  View Details →
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-24 px-6 lg:px-10 bg-slate-50">
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-sm font-bold tracking-widest mb-3">
            WHY EDU-HAWK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What You Get With Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <div
              key={i}
              className="benefit-card glass rounded-3xl p-8 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 mb-6">
                <benefit.icon size={42} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 px-6 lg:px-10 bg-white">
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-sm font-bold tracking-widest mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple 5-Step Process
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="glass rounded-3xl p-8 flex gap-8 items-start hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                <step.icon size={42} strokeWidth={2} />
              </div>
              <div>
                <div className="text-cyan-600 font-bold text-sm tracking-widest">
                  STEP {step.num}
                </div>
                <h3 className="text-2xl font-semibold mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 px-6 lg:px-10 bg-slate-50">
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-sm font-bold tracking-widest mb-3">
            SUCCESS STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Our Happy Students</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="glass rounded-3xl p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={22} fill="#fbbf24" stroke="#fbbf24" />
                ))}
              </div>
              <p className="italic text-slate-700 leading-relaxed mb-8">
                “{t.text}”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-500">
                    {t.year} • {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MBBS in Abroad for Indian Students
          </h2>

          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Get admission in world-ranking top medical universities approved by
            NMC, WHO at lowest fees & sophisticated education facilities.
          </p>

          {/* <!-- Countries Grid --> */}
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div class="group flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform group-hover:scale-110">
                <img
                  src="https://flagcdn.com/w320/ru.png"
                  alt="Russia"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-gray-800">Russia</h3>
              <p class="text-sm text-gray-500">42+ Universities</p>
            </div>

            <div class="group flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform group-hover:scale-110">
                <img
                  src="https://flagcdn.com/w320/kz.png"
                  alt="Kazakhstan"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-gray-800">Kazakhstan</h3>
              <p class="text-sm text-gray-500">13+ Universities</p>
            </div>

            <div class="group flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform group-hover:scale-110">
                <img
                  src="https://flagcdn.com/w320/ge.png"
                  alt="Georgia"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-gray-800">Georgia</h3>
              <p class="text-sm text-gray-500">22+ Colleges</p>
            </div>

            <div class="group flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform group-hover:scale-110">
                <img
                  src="https://flagcdn.com/w320/uz.png"
                  alt="Uzbekistan"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-gray-800">Uzbekistan</h3>
              <p class="text-sm text-gray-500">18+ Universities</p>
            </div>

            <div class="group flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform group-hover:scale-110">
                <img
                  src="https://flagcdn.com/w320/np.png"
                  alt="Nepal"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-gray-800">Nepal</h3>
              <p class="text-sm text-gray-500">18+ Colleges</p>
            </div>

            <div class="group flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform group-hover:scale-110">
                <img
                  src="https://flagcdn.com/w320/bd.png"
                  alt="Bangladesh"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-gray-800">Bangladesh</h3>
              <p class="text-sm text-gray-500">56+ Colleges</p>
            </div>

            <div class="group flex flex-col items-center">
              <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform group-hover:scale-110">
                <img
                  src="https://flagcdn.com/w320/kg.png"
                  alt="Kyrgyzstan"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="font-semibold text-gray-800">Kyrgyzstan</h3>
              <p class="text-sm text-gray-500">28+ Colleges</p>
            </div>

            {/* <!-- Extra space for more countries if needed --> */}
          </div>
        </div>
      </div>

      {/* <!-- Who We Are Section --> */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/qyTUxmWeeUs?si=1JixL-Pr2GEv7hML"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <span className="text-blue-600 font-medium text-sm tracking-widest">
                  WHO WE ARE
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
                  Empowering Medical Aspirations Globally
                </h2>
              </div>

              <div className="text-lg text-gray-600 leading-relaxed space-y-5">
                <p>
                  Established in <strong>2020</strong>, Edu Hawk helps students
                  who missed the opportunity to study medicine in India pursue
                  their dreams abroad.
                </p>

                <p>
                  We focus on{" "}
                  <strong>
                    quality, cost-effectiveness, safety, and trust
                  </strong>
                  . Our experienced team supports students at every step.
                </p>
              </div>

              {/* View More Button */}
              <div className="pt-4">
                <button
                  onClick={() => setShowMoreContent(!showMoreContent)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3 group"
                >
                  {showMoreContent ? "View Less" : "View More"}
                  <span
                    className={`text-xl transition-transform group-hover:translate-x-1 ${
                      showMoreContent ? "rotate-180" : ""
                    }`}
                  >
                    →
                  </span>
                </button>

                {showMoreContent && (
                  <div className="text-lg text-gray-600 leading-relaxed space-y-5 pt-6 border-t border-gray-200 mt-6">
                    Embracing digital transformation, we provide seamless online
                    services with personalized and committed guidance.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bg-gradient-to-br from-cyan-600 to-violet-700  text-white overflow-hidden py-16 md:py-24">
        {/* <!-- Background Pattern --> */}
        <div class="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>

        <div class="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Talk to our Experts
          </h1>

          <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            for <span class="font-bold text-yellow-400">FREE</span> and get a
            personalized admission roadmap for{" "}
            <span class="font-semibold">2026 intake</span>
          </p>

          {/* <!-- Stats --> */}
          <div class="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-yellow-400">
                400+
              </div>
              <div class="text-sm md:text-base mt-1 opacity-90">
                Students Placed
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-yellow-400">
                100%
              </div>
              <div class="text-sm md:text-base mt-1 opacity-90">
                Visa Support
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-yellow-400">
                10+
              </div>
              <div class="text-sm md:text-base mt-1 opacity-90">Countries</div>
            </div>
          </div>

          {/* <!-- MBBS Abroad Section --> */}

          <button class="bg-white text-blue-900 hover:bg-yellow-400 hover:text-blue-950 font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
            Book Your Free Counselling
          </button>

          <p class="mt-6 text-sm opacity-75">
            Limited slots available • Hurry up!
          </p>
        </div>

        <div class="absolute -top-12 -right-12 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-12 -left-12 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-600 text-sm font-bold tracking-widest mb-3">
              COMMON QUESTIONS
            </p>
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Is NEET mandatory for MBBS abroad?",
                a: "Yes, NEET qualification is mandatory as per NMC guidelines.",
              },
              {
                q: "What is the total fee structure?",
                a: "Total package ranges between ₹18 Lakh to ₹55 Lakh depending on country and university.",
              },
              {
                q: "Do you provide visa assistance?",
                a: "Yes, we provide complete visa documentation support with high success rate.",
              },
              {
                q: "Is FMGE coaching included?",
                a: "Yes, we provide guidance and support for FMGE preparation.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-4">Q. {faq.q}</h3>
                <p className="text-slate-600">Ans. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 px-6 lg:px-10 bg-gradient-to-br from-cyan-600 to-violet-700 text-white"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your MBBS Journey Abroad?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get free personalized counseling from our experts today.
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex gap-4 items-center">📞 +91 9630736070</div>
              <div className="flex gap-4 items-center">✉️ admin@eduhawk.in</div>
              <div className="flex gap-4 items-center">
                📍 Bhopal, Madhya Pradesh
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-10 text-slate-950">
            <h3 className="text-2xl font-bold mb-8">
              Book Your Free Counseling
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              />

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              >
                <option value="">Preferred Country (Optional)</option>
                {COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="NEET Score, Budget or any query..."
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none resize-y"
              />

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LczDtQsAAAAAFPaJwLYrIPrE6FI69tzbXnFYodI"
                theme="light"
              />

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-2xl font-semibold text-lg hover:scale-[1.02] disabled:opacity-70 transition-all"
              >
                {status.loading ? "Sending..." : "Submit & Get Free Guidance →"}
              </button>

              {status.message && (
                <p
                  className={`text-center font-medium ${
                    status.error ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-slate-950 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-4">
              <img src={Eduhawk} alt="Eduhawk Logo" className="h-14 mb-6" />
              <p className="text-slate-300 leading-relaxed mb-6">
                India's most trusted MBBS abroad education consultant. Helping
                aspiring doctors get admission in top NMC-approved universities
                worldwide.
              </p>
              <div className="space-y-2 text-sm">
                <p>📞 +91 9630736070</p>
                <p>✉️ admin@eduhawk.in</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-5 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Countries */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold mb-5 text-lg">
                Popular Countries
              </h4>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                {COUNTRIES.map((country) => (
                  <a
                    key={country.name}
                    href={`/${country.path}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {country.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Our Branches */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold mb-5 text-lg">
                Our Branches
              </h4>
              <div className="space-y-8 text-sm">
                <div>
                  <p className="text-white font-medium">New Delhi</p>
                  <p className="text-slate-400">
                    N-5, South Extension Part-1,
                    <br />
                    New Delhi - 110049
                  </p>
                  <p className="text-cyan-400 mt-1">+91 7319908359</p>
                </div>
                <div>
                  <p className="text-white font-medium">Bhopal</p>
                  <p className="text-slate-400">
                    103, Goyal Vihar, Zone-II,
                    <br />
                    MP Nagar, Bhopal - 462011
                  </p>
                  <p className="text-cyan-400 mt-1">+91 9630736070</p>
                </div>
                <div>
                  <p className="text-white font-medium">Patna</p>
                  <p className="text-slate-400">
                    B-24, Dumraon Palace,
                    <br />
                    Frazer Road, Patna - 800001
                  </p>
                  <p className="text-cyan-400 mt-1">+91 9630736070</p>
                </div>
                <div>
                  <p className="text-white font-medium">Lucknow</p>
                  <p className="text-slate-400">
                    Shop No-5, Barkhurdarpur Godamba,
                    <br />
                    Kursi Road, Lucknow - 226026
                  </p>
                  <p className="text-cyan-400 mt-1">+91 8400056046</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
            © 2026 Edu-Hawk Education Consultants. All Rights Reserved.
            <br />
            Best MBBS Abroad Consultant in Bhopal, Madhya Pradesh
          </div>
        </div>
      </footer>

      {/* COUNSELING MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
          <div className="glass w-full max-w-lg max-h-[calc(100vh-3rem)] rounded-3xl overflow-y-auto shadow-2xl relative modal-scrollbar-hide">
            <div className="flex justify-between items-center border-b p-6 sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <h3 className="text-2xl font-bold text-slate-900">
                Free MBBS Counseling
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-500 hover:text-slate-900"
              >
                <X size={28} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              />

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none"
              >
                <option value="">Preferred Country (Optional)</option>
                {COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="NEET Score, Budget or any query..."
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-cyan-500 outline-none resize-y"
              />

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LczDtQsAAAAAFPaJwLYrIPrE6FI69tzbXnFYodI"
                theme="light"
              />

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-2xl font-semibold text-lg hover:scale-[1.02] disabled:opacity-70 transition-all"
              >
                {status.loading ? "Sending..." : "Submit Request"}
              </button>

              {status.message && (
                <p
                  className={`text-center font-medium ${
                    status.error ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
