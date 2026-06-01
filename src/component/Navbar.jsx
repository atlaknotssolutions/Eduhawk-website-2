// import React, { useState } from "react";
// import Eduhawk from "../assets/Eduhawk.png"; // ← adjust path if needed

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); // null | "medical" | "abroad"

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   const abroadCountries = [
//     { name: "Russia",       path: "russia" },
//     { name: "Bangladesh",   path: "bangladesh" },
//     { name: "Nepal",        path: "nepal" },
//     { name: "Kazakhstan",   path: "kazakhstan" },
//     { name: "Kyrgyzstan",   path: "kyrgyzstan" },
//     { name: "Uzbekistan",   path: "uzbekistan" },
//     { name: "Tajikistan",   path: "tajikistan" },
//     { name: "Egypt",        path: "egypt" },
//     { name: "Georgia",      path: "georgia" },
//     { name: "Vietnam",      path: "vietnam" },
//   ];

//   return (
//     <header className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">

//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-br from-[#65DAFF]/30 to-[#F48C06]/20 rounded-full blur-xl opacity-60 -z-10"></div>
//               <img
//                 src={Eduhawk}
//                 alt="Eduhawk Logo"
//                 className="h-10 sm:h-11 md:h-12 w-auto object-contain"
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-sm lg:text-base font-medium">
//             <a href="/" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
//               Home
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             <a href="/about" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
//               About
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             <div className="relative group">
//               <button className="text-[#2F327D] hover:text-[#F48C06] transition-colors flex items-center gap-1">
//                 Medical Colleges
//                 <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
//                 <a href="/allcollege" className="block px-5 py-2.5 text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
//                   MBBS India
//                 </a>
//                 <div className="border-t border-gray-100 my-1"></div>

//                 <div className="relative group/sub">
//                   <div className="px-5 py-2.5 text-[#F48C06] font-semibold flex justify-between items-center hover:bg-orange-50 cursor-pointer">
//                     <span>MBBS Abroad</span>
//                     <svg className="w-4 h-4 transition-transform group-hover/sub:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>

//                   <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-200 max-h-[70vh] overflow-y-auto z-50">
//                     {abroadCountries.map((country) => (
//                       <a
//                         key={country.path}
//                         href={`/mbbs-abroad/${country.path}`}
//                         className="block px-5 py-2.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                       >
//                         {country.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <a href="/blog" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
//               Our Blog
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             <a href="/services" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
//               Services
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             <a href="/contact" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group whitespace-nowrap">
//               Contact Us
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>
//           </nav>

//           {/* Mobile Hamburger Button */}
//           <button
//             className="md:hidden text-[#2F327D] focus:outline-none"
//             onClick={toggleMobileMenu}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden py-4 border-t bg-white">
//             <div className="flex flex-col divide-y divide-gray-100 text-[15px] font-medium">
//               <a href="/" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Home</a>
//               <a href="/about" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">About</a>

//               {/* Medical Colleges (level 1) */}
//               <div>
//                 <button
//                   className="w-full flex justify-between items-center py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors"
//                   onClick={() => toggleDropdown("medical")}
//                 >
//                   <span>Medical Colleges</span>
//                   <svg
//                     className={`w-5 h-5 transition-transform duration-200 ${openDropdown === "medical" ? "rotate-180" : ""}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {openDropdown === "medical" && (
//                   <div className="bg-gray-50">
//                     <a href="/allcollege" className="block py-4 px-10 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">
//                       MBBS India
//                     </a>

//                     {/* MBBS Abroad (level 2) */}
//                     <button
//                       className="w-full flex justify-between items-center py-4 px-10 text-[#F48C06] font-semibold active:bg-orange-50/60 transition-colors"
//                       onClick={() => toggleDropdown("abroad")}
//                     >
//                       <span>MBBS Abroad</span>
//                       <svg
//                         className={`w-5 h-5 transition-transform duration-200 ${openDropdown === "abroad" ? "rotate-180" : ""}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>

//                     {openDropdown === "abroad" && (
//                       <div className="bg-gray-100">
//                         {abroadCountries.map((country) => (
//                           <a
//                             key={country.path}
//                             href={`/mbbs-abroad/${country.path}`}
//                             className="block py-4 px-14 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors"
//                           >
//                             {country.name}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <a href="/blog" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Our Blog</a>
//               <a href="/services" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Services</a>
//               <a href="/contact" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Contact Us</a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Eduhawk from "../assets/Eduhawk.png"; // ← adjust path if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ FIX: Two independent booleans instead of one shared string
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);
  const [isAbroadOpen, setIsAbroadOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const abroadCountries = [
    { name: "Russia",       path: "russia" },
    { name: "Bangladesh",   path: "bangladesh" },
    { name: "Nepal",        path: "nepal" },
    { name: "Kazakhstan",   path: "kazakhstan" },
    { name: "Kyrgyzstan",   path: "kyrgyzstan" },
    { name: "Uzbekistan",   path: "uzbekistan" },
    { name: "Tajikistan",   path: "tajikistan" },
    { name: "Egypt",        path: "egypt" },
    { name: "Georgia",      path: "georgia" },
    { name: "Vietnam",      path: "vietnam" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#65DAFF]/30 to-[#F48C06]/20 rounded-full blur-xl opacity-60 -z-10"></div>
              <img
                src={Eduhawk}
                alt="Eduhawk Logo"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-sm lg:text-base font-medium">
            <a href="/" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/about" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <div className="relative group">
              <button className="text-[#2F327D] hover:text-[#F48C06] transition-colors flex items-center gap-1">
                Medical Colleges
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
                <a href="/allcollege" className="block px-5 py-2.5 text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors">
                  MBBS India
                </a>
                <div className="border-t border-gray-100 my-1"></div>

                <div className="relative group/sub">
                  <div className="px-5 py-2.5 text-[#F48C06] font-semibold flex justify-between items-center hover:bg-orange-50 cursor-pointer">
                    <span>MBBS Abroad</span>
                    <svg className="w-4 h-4 transition-transform group-hover/sub:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-200 max-h-[70vh] overflow-y-auto z-50">
                    {abroadCountries.map((country) => (
                      <a
                        key={country.path}
                        href={`/mbbs-abroad/${country.path}`}
                        className="block px-5 py-2.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                      >
                        {country.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href="/blog" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              Our Blog
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/services" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="/contact" className="text-[#2F327D] hover:text-[#F48C06] transition-colors relative group whitespace-nowrap">
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-[#2F327D] focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <div className="flex flex-col divide-y divide-gray-100 text-[15px] font-medium">
              <a href="/" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Home</a>
              <a href="/about" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">About</a>

              {/* ✅ Medical Colleges (level 1) — uses isMedicalOpen */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors"
                  onClick={() => setIsMedicalOpen(!isMedicalOpen)}
                >
                  <span>Medical Colleges</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isMedicalOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMedicalOpen && (
                  <div className="bg-gray-50">
                    <a href="/allcollege" className="block py-4 px-10 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">
                      MBBS India
                    </a>

                    {/* ✅ MBBS Abroad (level 2) — uses isAbroadOpen, independent se kaam karta hai */}
                    <button
                      className="w-full flex justify-between items-center py-4 px-10 text-[#F48C06] font-semibold active:bg-orange-50/60 transition-colors"
                      onClick={() => setIsAbroadOpen(!isAbroadOpen)}
                    >
                      <span>MBBS Abroad</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isAbroadOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isAbroadOpen && (
                      <div className="bg-gray-100">
                        {abroadCountries.map((country) => (
                          <a
                            key={country.path}
                            href={`/mbbs-abroad/${country.path}`}
                            className="block py-4 px-14 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors"
                          >
                            {country.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <a href="/blog" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Our Blog</a>
              <a href="/services" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Services</a>
              <a href="/contact" className="py-4 px-5 text-[#2F327D] active:bg-orange-50/60 active:text-[#F48C06] transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;