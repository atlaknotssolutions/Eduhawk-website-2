

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

const Vietnam = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is MBBS in Vietnam valid for Indian students?",
      answer:
        "Yes — if you choose an NMC-compliant university (listed in WDOMS & recognized by NMC guidelines). Graduates must pass FMGE/NEXT to practice in India.",
    },
    {
      question: "What is the total cost of MBBS in Vietnam?",
      answer:
        "Total budget (tuition + hostel + food + misc.) usually ranges from ₹25–35 lakhs for 6 years, depending on university and lifestyle.",
    },
    {
      question: "Is NEET required for MBBS in Vietnam?",
      answer:
        "Yes — NEET qualification is mandatory for Indian students planning to return and practice in India (NMC rule).",
    },
    {
      question: "What is the duration of MBBS in Vietnam?",
      answer:
        "6 years total: 5 years of academic study + 1 year mandatory internship.",
    },
    {
      question: "Is MBBS in Vietnam taught in English?",
      answer:
        "Yes — many universities offer full English-medium programs for international students (always confirm with the specific university).",
    },
    {
      question: "Is hostel accommodation available?",
      answer:
        "Yes — universities provide safe, affordable hostels (shared rooms, furnished, with kitchens). Many have Indian mess options nearby.",
    },
    {
      question: "Can Indian students find Indian food in Vietnam?",
      answer:
        "Yes — self-cooking in hostels is common, plus Indian restaurants/mess facilities in major cities like Hanoi & Ho Chi Minh City.",
    },
  ];

  return (
    <>
    
        <Helmet>
                <title> MBBS in Vietnam for Indian Students | Fees & Colleges</title>
                <meta
                  name="description"
                  content="Study MBBS in Vietnam with English medium and affordable fees. Check eligibility, admission process and top universities."
                />
                <meta
                  name="keywords"
                  content="mbbs in vietnam, vietnam mbbs fees, study mbbs vietnam, mbbs in vietnam for indian students, top medical universities in vietnam, mbbs in vietnam eligibility, mbbs in vietnam admission"
                />
              </Helmet>
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/23/%C3%93pera%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_02.JPG"
            alt="Ho Chi Minh City Opera House"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN VIETNAM
            </h1>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Vietnam 2026–2027
            </h2>
          </div>
        </div>

        {/* Why Study + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              Why Study MBBS in Vietnam
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
             Vietnam has become one of the fastest-growing destinations for Indian 
             students who want to 
             {" "} 
              <button onClick={() => navigate("/")}
                       className="text-blue-600 hover:text-[#426a91] font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}
             because of its affordable tuition fees, 
             globally recognised universities, and modern medical infrastructure. 
             Many students choose to {" "}<strong>study MBBS in Vietnam</strong>{" "} due to its English-medium 
             programs, safe environment, and early clinical exposure that helps students 
             gain practical medical experience from the beginning of the course. 
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700 scroll-smooth">
             One of the major advantages of {" "}<strong>MBBS admission in Vietnam</strong>{" "} is the 
             availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs along with 
             low living costs that are similar to India. The country is home 
             to several {" "}
               <a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Vietnam
               </a>{" "} that follow 
             international standards and provide modern laboratories, 
             experienced faculty, and advanced hospital training. Students 
             studying in MBBS universities in Vietnam receive high-quality 
             theoretical and practical medical education, helping them build 
             successful global medical careers. 
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Vietnam is also known for having some of the {" "}<strong>top government 
                medical colleges in Vietnam</strong>{" "} along with reputed private institutions. 
                The availability of {" "}<strong>top private and government college in Vietnam</strong>{" "} options 
                gives students flexibility according to their budget and career goals. 
                Many universities are recognised by WHO, NMC, WDOMS, ECFMG, and FAIMER, 
                making Vietnam one of the {" "}<strong>best countries for MBBS abroad</strong>{" "} and a preferred 
                choice for Indian students seeking globally accepted medical degrees
              </p>
            ) : null}
            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreAbout ? "Show Less" : "Read More"}
            </button>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg"
              alt="Hanoi Medical University"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Duration */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Duration of MBBS in Vietnam
          </h2>
          <p className="text-xl font-semibold text-gray-800">
            6 Years (5 Years Academic + 1 Year Internship)
          </p>
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Advantages of Studying MBBS in Vietnam
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
            <li>Affordable tuition & living costs (total ~₹25–35 lakhs)</li>
            <li>NMC-compliant & WHO-recognized degrees</li>
            <li>English-medium programs for international students</li>
            <li>Early clinical exposure & modern hospitals</li>
            <li>Safe, student-friendly country with low crime</li>
            <li>Easy adaptation & multicultural environment</li>
            <li>Indian food options & affordable hostels</li>
            <li>No donation/capitation fees</li>
            <li>Research & global career opportunities</li>
          </ul>
        </div>

        {/* Quick Info Table + About */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – MBBS in Vietnam
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC-compliant, WHO, WDOMS, ECFMG</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50–60% in PCB + NEET qualified</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Duration</td>
                    <td className="p-4">6 Years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Mandatory for Indians</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Usually not required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium</td>
                    <td className="p-4">English (for intl. programs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Vietnam
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Vietnam provides quality, practical-focused medical training at a
              fraction of Western costs. Safe environment, good public
              transport, and cultural similarity make it easy for Indian
              students.
            </p>
            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Affordable daily life, modern facilities, and strong clinical
                rotations prepare graduates well.
              </p>
            ) : null}
            <button
              onClick={() => setShowMoreClimate(!showMoreClimate)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreClimate ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-20 center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
            Eligibility Criteria
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
            <li>10+2 with Physics, Chemistry, Biology</li>
            <li>
              Minimum 50% aggregate in PCB (40% for reserved categories; some
              universities require 60%)
            </li>
            <li>NEET qualified (mandatory for Indian students)</li>
            <li>Age: Minimum 17 years by Dec 31 of admission year</li>
            <li>Valid passport & other standard documents</li>
          </ul>
        </div>

        {/* Documents */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
            Required Documents
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
            <li>Valid passport (minimum 18 months validity)</li>
            <li>10th & 12th marksheets/certificates</li>
            <li>NEET scorecard</li>
            <li>Passport-size photos</li>
            <li>Medical fitness certificate</li>
            <li>Police clearance (if required)</li>
            <li>Bank statement/proof of funds</li>
            <li>University invitation/offer letter (after application)</li>
          </ul>
        </div>

        {/* Application Process */}
        <div className="py-16 bg-white mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-decimal pl-6 space-y-4 text-gray-700 text-lg">
              <li>Research & select NMC-compliant university</li>
              <li>Submit scanned documents (marksheets, passport, NEET)</li>
              <li>University reviews & may conduct interview</li>
              <li>Receive offer/invitation letter</li>
              <li>Pay initial fees & apply for student visa</li>
              <li>Travel to Vietnam & complete registration</li>
            </ul>
          </div>
        </div>

        {/* Top Universities Grid */}
        <div id="universities" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Vietnam
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Hanoi Medical University",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg",
              },
              {
                name: "University of Medicine and Pharmacy, Ho Chi Minh City",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Z5372420599304_7ca55d21ee3a707247033180d3108fc6.jpg",
              },
              {
                name: "Hue University of Medicine and Pharmacy",
                img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Hu%E1%BA%BF_University.jpg",
              },
              {
                name: "Can Tho University of Medicine and Pharmacy",
                img: "https://photo-cms-vovworld.zadn.vn/w730/uploaded/vovworld/wpxlqdhnw/2020_03_27/pst7_anh2_fyaa.jpg",
              },
              {
                name: "Hai Phong University of Medicine and Pharmacy",
                img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dhyhp.JPG",
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.img}
                  alt={uni.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900">
                    {uni.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food & Accommodation */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Food & Accommodation Costs
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed container mx-auto px-4 max-w-6xl">
            <p>
              Hostels are affordable, safe, and student-oriented (shared 2–3 per
              room, furnished, Wi-Fi, kitchen).
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Monthly hostel: ₹8,000–₹20,000</li>
              <li>Food (self-cook + mess): ₹8,000–₹15,000</li>
              <li>Misc (transport etc.): ₹4,000–₹8,000</li>
              <li>
                <strong>Total monthly:</strong> ~₹20,000–₹45,000
              </li>
            </ul>
            <p className="mt-6">
              Indian food widely available; many hostels have Indian mess
              options.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="py-16 bg-white mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            MBBS in Vietnam vs India (Private Colleges)
          </h2>
          <div className="overflow-x-auto container mx-auto px-4 max-w-5xl">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border">Criteria</th>
                  <th className="p-4 border">Vietnam</th>
                  <th className="p-4 border">India (Private)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Total Cost</td>
                  <td className="p-4 border">₹25–35 lakhs</td>
                  <td className="p-4 border">₹50–90+ lakhs</td>
                </tr>
               
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Duration</td>
                  <td className="p-4 border">6 years</td>
                  <td className="p-4 border">5.5 + 1 year</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Admission</td>
                  <td className="p-4 border">NEET + simple process</td>
                  <td className="p-4 border">High cut-offs/donation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Most Searched FAQs
          </h2>
          <div className="space-y-5 container mx-auto px-4 max-w-4xl">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border overflow-hidden transition-all ${
                  openIndex === index ? "shadow-lg border-blue-300" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <h4 className="text-xl md:text-2xl font-semibold text-blue-900">
                    {item.question}
                  </h4>
                  <span className="text-3xl text-blue-600">
                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <div
                  className={`px-6 transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-[600px] pb-8 pt-2 opacity-100"
                      : "max-h-0 pb-0 opacity-0"
                  }`}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
    </>
  );
};

export default Vietnam;
