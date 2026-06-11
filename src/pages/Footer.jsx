import React from "react";
import { Link } from "react-router-dom"; // Make sure to install & import react-router-dom
import Eduhawk from "../assets/icon.jpg"; // Your logo path
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const COUNTRIES = [
    {
      name: "Russia",
      flag: "🇷🇺",
      path: "/mbbs-abroad/russia",
      seats: "600+",
      fee: "₹20-35L",
    },
    {
      name: "Georgia",
      flag: "🇬🇪",
      path: "/mbbs-abroad/georgia",
      seats: "200+",
      fee: "₹25-40L",
    },
    {
      name: "Uzbekistan",
      flag: "🇺🇿",
      path: "/mbbs-abroad/uzbekistan",
      seats: "400+",
      fee: "₹15-30L",
    },
    {
      name: "Kazakhstan",
      flag: "🇰🇿",
      path: "/mbbs-abroad/kazakhstan",
      seats: "300+",
      fee: "₹18-32L",
    },
    {
      name: "Kyrgyzstan",
      flag: "🇰🇬",
      path: "/mbbs-abroad/kyrgyzstan",
      seats: "250+",
      fee: "₹15-27L",
    },
    {
      name: "Nepal",
      flag: "🇳🇵",
      path: "/mbbs-abroad/nepal",
      seats: "150+",
      fee: "₹35-50L",
    },

    {
      name: "Bangladesh",
      flag: "🇧🇩",
      path: "/mbbs-abroad/bangladesh",
      seats: "200+",
      fee: "₹22-40L",
    },
    {
      name: "Vietnam",
      flag: "🇻🇳",
      path: "/mbbs-abroad/vietnam",
      seats: "100+",
      fee: "₹25-35L",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a1b2e] to-[#060f1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={Eduhawk}
                alt="Edu-Hawk Logo"
                className="w-15 h-15 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-bold text-xl tracking-tight">
                  Edu-Hawk Worldwide
                </h3>
                <p className="text-amber-400 text-xs uppercase tracking-widest mt-0.5">
                  Overseas Medical Education
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Trusted & ethical counselling for MBBS abroad — helping 2000+
              Indian students since inception.
            </p>

            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/eduhawkglobal"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@Eduhawkteam"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/eduhawk_global/"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/edu-hawk-worldwide/?viewAsMember=true"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
              Popular Destinations
            </h4>
            <div className="space-y-2 text-sm">
              {COUNTRIES.map((c) => (
                <Link
                  key={c.name}
                  to={c.path || "#"}
                  className={`flex items-center gap-2 hover:text-amber-300 transition-colors duration-200 ${
                    !c.path ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  <span className="text-lg">{c.flag}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },

                { label: "Contact", path: "/contact" },
                { label: "Blog", path: "/blog" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="hover:text-amber-300 transition-colors duration-200 block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
              Stay Updated
            </h4>
          
          

            <div className="mt-6 text-sm">
              <div className="text-gray-400 mb-1.5">Contact Us</div>
              <div className="text-white">+91 9630736070</div>
              <div className="text-white mt-1">admin@eduhawk.in</div>
              <div className="text-gray-400 mt-3 text-xs">
                N-5, South Extension Part-1, New Delhi-110049
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
       <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
  <p className="font-small text-gray-400">
    © {new Date().getFullYear()} Edu-Hawk Worldwide • All Rights Reserved
  </p>
  <p className="mt-1">
    Powered By{" "}
    <a href="http://aiknotsit.com/" target="_blank" rel="noopener noreferrer">
      <span className="font-small text-gray-400">
        AI Knots IT Solution Pvt. Ltd.
      </span>
    </a>
    • 
    Trusted by 2000+ Indian Students
  </p>



  <div className="mt-4 flex justify-center gap-6 text-xs">
    <Link
      to="/privacy-policy"
      className="hover:text-amber-400 transition-colors duration-200"
    >
      Privacy Policy
    </Link>
    <Link
      to="/terms-conditions"
      className="hover:text-amber-400 transition-colors duration-200"
    >
      Terms & Conditions
    </Link>
  </div>
</div>
      </div>
    </footer>
  );
}
