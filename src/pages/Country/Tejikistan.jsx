

import React, { useState } from "react";
import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
import Russianflag2 from "../../Images/country flag png/Tajikistan.svg";
import MARISTATEUNIVERSITY from "../../Images/tajikistan/Khatlon-State-Medical-University-Tajikistan.jpg";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const Tajikistan = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>MBBS in Tajikistan for Indian Students | Fees & Admission</title>
        <meta
          name="description"
          content="Study MBBS in Tajikistan at affordable cost. Check eligibility, admission process and recognized medical universities."
        />
        <meta
          name="keywords"
          content="mbbs in tajikistan, tajikistan mbbs fees, study mbbs tajikistan, tajikistan medical colleges, mbbs tajikistan admission"
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* ==================== HEADER CAROUSEL ==================== */}
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://www.edurizon.in/_next/image?url=%2Fassets%2FImages%2Fmbbs-in-tajikistan%2Ftajik-national-university%2Ftnu.jpg&w=3840&q=75"
              alt="Tajikistan Landscape"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
                STUDY MBBS IN TAJIKISTAN
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
                src={Russianflag2}
                alt="Tajikistan flag"
                className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                Explore MBBS Opportunities in Tajikistan 2026–2027
              </h2>
            </div>
          </div>

          {/* About Tajikistan + Image */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
                About Tajikistan
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Tajikistan has become an emerging destination for Indian 
                students who want to 
                {" "} 
              <button onClick={() => navigate("/")}
                       className="text-[#0a2342] hover:text-[#426a91] text-[#0a2342] font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}   
                because of its 
                affordable tuition fees, quality medical education, and safe 
                environment. Located in Central Asia, Tajikistan shares borders 
                with China, Afghanistan, Uzbekistan, and Kyrgyzstan. Officially 
                known as the Republic of Tajikistan, the country is recognised for 
                its modern medical facilities, beautiful landscapes, and student-friendly 
                atmosphere. Many students choose to {" "}<strong>study MBBS in Tajikistan</strong>{" "} due to its 
                globally recognised universities and affordable living costs.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-700">
               One of the biggest advantages of {" "}<strong>MBBS admission in Tajikistan</strong>{" "} 
               is the availability of {" "}<strong>affordable fees in MBBS</strong>{" "} abroad programs 
               compared to many other countries. The country is home to several 
               {" "}<strong>top medical universities in Tajikistan</strong>{" "} that provide experienced 
               faculty, modern laboratories, and practical clinical exposure. 
               Students studying in {"  "}<strong>MBBS universities in Tajikistan</strong>{" "} receive 
               both theoretical and hands-on medical training, helping them 
               become skilled healthcare professionals.
              </p>

              {showMoreAbout ? (
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                 Tajikistan is also known for having some of the {" "}<strong>top government 
                 medical colleges in Tajikistan</strong>{" "} along with reputed private institutions. 
                 The availability of {" "}<strong>top private and government college in Tajikistan</strong>{" "} 
                 options gives students flexibility according to their budget and 
                 career goals, making it one of the {" "}<strong>best countries for MBBS abroad</strong>{" "} 
                 for Indian students. 
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
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Tajik_Parliament_House%2C_Dushanbe%2C_Tajikistan.JPG"
                alt="Tajikistan Parliament House, Dushanbe"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Quick Information + About MBBS */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left – Quick Info Table */}
            <div>
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Quick Information – Study MBBS in Tajikistan
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-left">
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold">Recognition</td>
                      <td className="p-4">NMC & WHO approved</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Eligibility</td>
                      <td className="p-4">50% in PCB aggregate</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold">Course Duration</td>
                      <td className="p-4">6 Years (5+1 internship)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">NEET</td>
                      <td className="p-4">Compulsory for Indian students</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold">IELTS/TOEFL</td>
                      <td className="p-4">Not Required</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Medium of Teaching</td>
                      <td className="p-4">English</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right – About MBBS */}
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
                About MBBS in Tajikistan for Indian Students
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Tajikistan's MBBS program is gaining popularity among Indian
                students due to its very low tuition fees and quality medical
                education at MCI/NMC-affiliated universities.
              </p>

              {showMoreClimate ? (
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  The affordable cost of living makes it attractive for
                  middle-class families. Many Indian students choose Tajikistan
                  for its reasonable fees (total package often ₹15–25 lakhs),
                  modern facilities, experienced faculty, and safe learning
                  environment. Degrees are recognized by WHO and NMC, allowing
                  graduates to appear for FMGE/NEXT. English-medium programs
                  eliminate language barriers. Tajikistan has a continental
                  climate with cold winters and warm summers — hostels are
                  well-heated for comfort.
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

          {/* ==================== UNIVERSITIES GRID ==================== */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
              Top Medical Universities in Tajikistan
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Avicenna Tajik State Medical University",
                  img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Donishgohi_davlatii_tibbii_Tojikiston_ba_nomi_A_Sino.JPG",
                },
                {
                  name: "Khatlon State Medical University",
                  img: MARISTATEUNIVERSITY,
                },
                {
                  name: "Tajik National University",
                  img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Tajik_National_University_%28Main_Building%29.jpg",
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

          {/* ==================== ADVANTAGES + COST ==================== */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                Advantages of Studying MBBS in Tajikistan 2026–2027
              </h2>

              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold">
                    1. Quality Education & Infrastructure
                  </h5>
                  <p className="text-gray-700">
                    World-class facilities, experienced faculty, and modern
                    medical training.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    2. No Entrance Exams / Donations
                  </h5>
                  <p className="text-gray-700">
                    Admission based on NEET + 50% in PCB — no capitation fees.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    3. Very Affordable Fees & Living
                  </h5>
                  <p className="text-gray-700">
                    Low tuition and cost of living — ideal for middle-class
                    Indian families.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    4. English-Medium Programs
                  </h5>
                  <p className="text-gray-700">
                    No language barrier for international students.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    5. Globally Recognized Degrees
                  </h5>
                  <p className="text-gray-700">
                    Approved by NMC, WHO — eligible for FMGE/NEXT and practice
                    worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Cost of Study MBBS in Tajikistan
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tajikistan offers one of the most budget-friendly MBBS programs
                for Indian students. Government subsidies and low living costs
                make it highly affordable. No donation or hidden fees. Total
                cost for the complete 6-year MBBS (tuition + hostel + food)
                typically ranges between ₹15 lakh to ₹25 lakh (varies by
                university). Many students complete the course comfortably
                within this budget.
              </p>
            </div>
          </div>

          {/* ==================== FOOD & ACCOMMODATION ==================== */}
          <div className="bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
                Food and Accommodation Cost – MBBS in Tajikistan
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Medical universities in Tajikistan provide comfortable,
                  secure, and affordable hostel facilities tailored for
                  international students.
                </p>

                <h4 className="text-2xl font-semibold mt-8 mb-4">
                  Hostel Facilities
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>On-campus hostels available in most universities</li>
                  <li>Rooms usually shared by 2–3 students</li>
                  <li>Safe, well-maintained environment with 24/7 security</li>
                  <li>
                    Students can stay in hostels for the full 6-year course
                    duration
                  </li>
                </ul>

                <h4 className="text-2xl font-semibold mt-8 mb-4">
                  Room Facilities
                </h4>
                <p>Rooms are fully furnished with:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Comfortable beds, mattress, blankets, bedsheets</li>
                  <li>Study tables and chairs</li>
                  <li>Wardrobes or cupboards</li>
                  <li>Heating system for cold winters</li>
                </ul>

                <h4 className="text-2xl font-semibold mt-8 mb-4">
                  Kitchen and Food Facilities
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Common kitchens for self-cooking (popular for Indian meals)
                  </li>
                  <li>Indian mess / canteen facilities in many universities</li>
                  <li>
                    Indian restaurants and grocery stores nearby (walking
                    distance in cities like Dushanbe)
                  </li>
                  <li>
                    Local Tajik cuisine and international food options also
                    available
                  </li>
                </ul>

                <h4 className="text-2xl font-semibold mt-8 mb-4">
                  Laundry and Daily Facilities
                </h4>
                <p>
                  Most hostels have washing machine rooms. Daily needs are
                  easily managed within the campus.
                </p>

                <h4 className="text-2xl font-semibold mt-8 mb-4">
                  Average Living Cost (2026–2027)
                </h4>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Hostel: ₹8,000 – ₹15,000 per month</li>
                  <li>
                    Food (self-cooking + mess): ₹7,000 – ₹14,000 per month
                  </li>
                  <li>Miscellaneous: ₹3,000 – ₹7,000 per month</li>
                  <li>
                    <strong>Total monthly:</strong> ≈ ₹18,000 – ₹35,000
                    (comfortable budget for most students)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ==================== ADMISSION PROCESS ==================== */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
                Admission Process for MBBS in Tajikistan 2026–2027
              </h2>

              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900">Stage 1</h4>
                  <p>
                    Research and select a recognized medical university in
                    Tajikistan.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900">Stage 2</h4>
                  <p>Fill out the online university application form.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900">Stage 3</h4>
                  <p>Submit required academic and identification documents.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900">Stage 4</h4>
                  <p>Receive official admission / invitation letter.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900">Stage 5</h4>
                  <p>Apply for student visa at Tajikistan Embassy.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900">Stage 6</h4>
                  <p>
                    Travel to Tajikistan, complete university registration and
                    start MBBS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== ELIGIBILITY & DOCUMENTS ==================== */}
          <div className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                    Eligibility Criteria for MBBS in Tajikistan
                  </h2>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>
                      Minimum 17 years old by 31st December of admission year
                    </li>
                    <li>Minimum 50% in 12th (Physics, Chemistry, Biology)</li>
                    <li>NEET qualification mandatory for Indian students</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                    Documents Required
                  </h2>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Admission application form</li>
                    <li>10th & 12th marksheets + certificates</li>
                    <li>NEET scorecard / admit card</li>
                    <li>Valid passport copy</li>
                    <li>Passport-size photos (white background)</li>
                    <li>Identity proof (Aadhaar, PAN, Driving Licence)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== COMPARISON TABLE ==================== */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
                MBBS in Tajikistan vs MBBS in India – Quick Comparison
                (2026–2027)
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="p-4 border border-gray-300 text-center font-semibold">
                        Criteria
                      </th>
                      <th className="p-4 border border-gray-300 text-center font-semibold">
                        MBBS in Tajikistan
                      </th>
                      <th className="p-4 border border-gray-300 text-center font-semibold">
                        MBBS in India
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="bg-gray-50">
                      <td className="p-4 border font-medium">Entrance Exams</td>
                      <td className="p-4 border">
                        Admission based on NEET qualification
                      </td>
                      <td className="p-4 border">NEET + high competition</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">
                        Course Duration
                      </td>
                      <td className="p-4 border">
                        6 years (including internship)
                      </td>
                      <td className="p-4 border">
                        5.5 years + 1 year internship
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border font-medium">Total Cost</td>
                      <td className="p-4 border">₹15–25 lakhs</td>
                      <td className="p-4 border">Private: ₹20–80+ lakhs</td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">
                        Seats Availability
                      </td>
                      <td className="p-4 border">
                        More seats for international students
                      </td>
                      <td className="p-4 border">
                        Limited in government colleges
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border font-medium">Infrastructure</td>
                      <td className="p-4 border">Modern labs & facilities</td>
                      <td className="p-4 border">Varies between colleges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ==================== FAQs ==================== */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
                MBBS in Tajikistan 2026–2027 – FAQs
              </h2>

              <div className="space-y-6">
                <details className="bg-white p-6 rounded-xl shadow-sm border">
                  <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                    How to get MBBS admission in Tajikistan?
                  </summary>
                  <p className="mt-4 text-gray-700">
                    Qualify NEET and have 50% marks in PCB in 12th. Apply online
                    to the university, submit documents, receive invitation
                    letter, and apply for student visa.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-sm border">
                  <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                    Is MBBS in Tajikistan valid in India?
                  </summary>
                  <p className="mt-4 text-gray-700">
                    Yes, if the university is approved by the National Medical
                    Commission. Students must pass FMGE or NEXT to practice in
                    India.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-sm border">
                  <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                    What is the total cost of MBBS in Tajikistan?
                  </summary>
                  <p className="mt-4 text-gray-700">
                    The total cost usually ranges between ₹15 lakh to ₹25 lakh
                    for the entire course (tuition + hostel + living expenses),
                    depending on the university.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-sm border">
                  <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                    What is the duration of MBBS in Tajikistan?
                  </summary>
                  <p className="mt-4 text-gray-700">
                    The MBBS program generally takes 5 years of academic study
                    plus 1 year internship, making it 6 years in total.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-sm border">
                  <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                    Why do students choose MBBS in Tajikistan?
                  </summary>
                  <p className="mt-4 text-gray-700">
                    Very affordable fees, English-medium programs, simple
                    admission process, low living costs, and recognized degrees
                    — ideal for Indian students seeking quality education on a
                    budget.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Floating Enroll Button */}
        </div>
      </div>
    </>
  );
};

export default Tajikistan;
