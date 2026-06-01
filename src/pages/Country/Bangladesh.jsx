import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
import kernal from "../../Images/top medical collages list/Bangladesh Medical College.png";
import Bangladeshflag2 from "../../Images/country flag png/Bangladesh-Flag-PNG-Isolated-HD.png";
import MARISTATEUNIVERSITY from "../../Images/Russia/MARI STATE UNIVERSITY.jpg";
import ORELSTATEUNIVERSITY from "../../Images/Russia/OREL STATE UNIVERSITY.jpg";
import ORENBURGSTATEUNIVERSITY from "../../Images/Russia/ORENBURG STATE UNIVERSITY.jpg";
import TVERSTATEMEDICALUNIVERSITY from "../../Images/Russia/TVER STATE MEDICAL UNIVERSITY.jpeg";
import AltaiStateMedicalUniversity from "../../Images/Russia/Altai State Medical University.jpg";
import { useNavigate } from "react-router-dom";

import { FiPlus, FiMinus } from "react-icons/fi";
const faqData = [
  {
    question: "Is MBBS in Bangladesh safe for Indian students?",
    answer:
      "Yes, Bangladesh is generally considered safe for Indian students. Most medical colleges offer secure, gated hostels with 24/7 security, CCTV, wardens, and dedicated support for international students. Cultural & food similarities (many hostels serve Indian meals) make it feel comfortable and home-like.",
  },
  {
    question: "Is MBBS in Bangladesh recognized in India?",
    answer:
      "Yes — degrees from BMDC (Bangladesh Medical & Dental Council) recognized colleges are valid in India as per NMC guidelines. Indian students must qualify the NEXT exam (or FMGE during transition phase) to get provisional/permanent registration and practice in India.",
  },
  {
    question: "Is NEET required for MBBS admission in Bangladesh?",
    answer:
      "Yes, qualifying NEET is mandatory for all Indian students pursuing MBBS abroad (as per current NMC regulations). It is also required later to appear for NEXT/FMGE and practice in India.",
  },
  {
    question: "What is the total cost of MBBS in Bangladesh?",
    answer:
      "The complete package (tuition + hostel + food + misc.) usually ranges from ₹25 lakh to ₹45 lakh for the entire 6-year course, depending on the college (government quota seats are cheaper, private ones higher). No donation/capitation fee is required.",
  },
  {
    question: "What is the duration of MBBS in Bangladesh?",
    answer:
      "The MBBS program is 6 years total — 5 years of academic study + 1 year of compulsory rotating internship (usually done in the affiliated teaching hospital).",
  },
  {
    question: "Is the MBBS course in Bangladesh taught in English?",
    answer:
      "Yes, almost all medical colleges approved for international students (especially Indians) teach entirely in English medium, following a curriculum very similar to India's.",
  },
  {
    question: "Are hostel and food facilities available for Indian students?",
    answer:
      "Yes — nearly every college provides separate, well-maintained hostels for boys and girls. Many offer Indian vegetarian/non-veg mess/food options, laundry, Wi-Fi, gym, and common rooms at affordable monthly charges (usually included or ₹5,000–10,000/month).",
  },
  {
    question: "Do Bangladeshi medical colleges follow the Indian syllabus?",
    answer:
      "Yes — the curriculum, textbooks, teaching pattern, and subjects are very similar to Indian MBBS (based on BMDC guidelines aligned with international standards). This makes it easier for students to prepare for NEXT/FMGE and adapt quickly.",
  },
];

const Bangladesh = () => {
  const navigate = useNavigate();
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>

     <Helmet>
                  <title> MBBS in Bangladesh for Indian Students | Fees & Admission Process </title>
                  <meta name="description" content="MBBS in Bangladesh with affordable fees and Indian syllabus. Get complete details on admission process, eligibility and top medical colleges." />
                  <meta name="keywords" content=" mbbs in bangladesh, bangladesh mbbs fees, study mbbs bangladesh, bangladesh medical colleges" />
                </Helmet>

    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f6/2.%E0%A6%B6%E0%A6%BE%E0%A6%AA%E0%A6%B2%E0%A6%BE_%E0%A6%9A%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%B0.jpg"
            alt="Kremlin Bridge City"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN Bangladesh
            </h1>
          </div>
        </div>

        {/* You can duplicate more slides like this or use carousel library */}
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
            <img
              src={Bangladeshflag2}
              alt="Russia flag"
              className="w-32 md:w-40  rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Bangladesh 2026–2027
            </h2>
          </div>
        </div>

        {/* About Russia + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Bangladesh
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Bangladesh is becoming one of the most preferred destinations for 
              Indian students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91]  text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}
               due to its quality 
              education, affordable tuition fees, and safe environment.
              With a course duration of around 5.8 years,{" "}<strong>study MBBS in Bangladesh</strong>{" "} 
              provides students with strong academic knowledge and excellent clinical
              exposure. Many students prefer {" "}<strong>MBBS Bangladesh for Indian students</strong>{" "}
              opportunities because the education system, food, and culture are
              similar to India, making adaptation easier.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
             One of the major advantages of {" "}<strong>MBBS admission in Bangladesh</strong> is the
             availability of {" "}<strong>affordable fees in MBBS abroad </strong>programs compared to
             many other countries. The country has several{" "}<strong>top medical universities
             in Bangladesh</strong> that are recognised globally and known for experienced 
             faculty, modern infrastructure, and advanced hospital training. 
             Students studying in 
             {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Bangladesh
               </a>{" "} 
               receive practical
               clinical experience that helps them build strong medical skills.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Bangladesh is also known for having some of the {" "}<strong>top government medical 
                colleges in Bangladesh</strong>{" "} along with reputed private institutions.
                The availability of {" "}<strong>top private and government college in Bangladesh</strong>{" "} 
                options gives students flexibility based on their budget and preferences.
                Apart from Bangladesh, countries like Nepal and Kyrgyzstan are also
                popular {" "}<strong>foreign countries for MBBS abroad</strong>.
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
              src={kernal}
              alt="Kremlin"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Bangladesh
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
                    <td className="p-4">6 Years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Compulsory</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">English</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold">
                      Universities Recognition
                    </td>
                    <td className="p-4">NMC & WHO-approved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Bangladesh
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Studying MBBS in Bangladesh, in general, students are not required
              to take a separate entrance exam for admission. The government of
              Bangladesh has introduced various initiatives and provided various
              subsidies to ensure that the tuition fees for both local and
              international students are affordable.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                And additional student benefits, including medical insurance and
                basic healthcare facilities, ensure a conducive learning
                environment throughout the academic journey. In addition, the
                main language used for instruction in most MBBS courses in
                Bangladesh is English, ensuring greater ease of access for
                international students. Finally, the climate in Bangladesh is
                moderate compared to other places in the world.
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
        <div id="universities"className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Bangladesh for MBBS 2026-2027
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dhaka National Medical College",
                img: "https://educationvibes.in/uploads/university_banner/mbbs_abroad/dhaka-national-medical-college.webp",
              },
              {
                name: "Bangladesh Medical College",
                img: "https://brightfutureas.com/wp-content/uploads/2024/07/Bangladesh-Medical-College%E2%80%8B.jpg",
              },
              {
                name: "Tairunnessa Memorial Medical College",
                img: "https://shikshamed.com/wp-content/uploads/2021/08/Fff-1-1024x494-1-1.jpg",
              },
              {
                name: "Islamic Bank Medical College",
                img: "https://i.ytimg.com/vi/735pBvL98lg/mqdefault.jpg",
              },
              {
                name: "TMSS Medical College and Hospital",
                img: "https://hindmbbsabroad.com/wp-content/uploads/2024/04/IMG_8003.jpg",
              },

              {
                name: "MH Samorita Medical College and Hospital",
                img: "https://mhsmc.com/images/2021-03-10.jpg",
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
              Advantages of Studying MBBS in Bangladesh 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. High-Quality Education
                </h5>
                <p className="text-gray-700">
                  Bangladeshi medical universities are offering high-quality
                  education. Many universities are globally recognised and
                  maintain high educational standards.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. Affordable Tuition Fees
                </h5>
                <p className="text-gray-700">
                  It is more cost-effective for international students to pursue
                  their MBBS in Bangladesh as the tuition fees are low compared
                  to other countries.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. No Additional Entrance Exams
                </h5>
                <p className="text-gray-700">
                  Some medical universities in Bangladesh don’t conduct entrance
                  tests for international students, making the admission process
                  easier for them.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. English-Medium Programs
                </h5>
                <p className="text-gray-700">
                  Most of the universities in Bangladesh offer MBBS programs in
                  the English medium, which helps eliminate the language barrier
                  for the students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Studying MBBS In Bangladesh
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The low <strong> MBBS fees in Bangladesh </strong> make the
              country attractive to Indian students, considering the low cost of
              living. The country is also a preferred destination for{" "}
              <strong>MBBS</strong> studies. The government reduces the fees,
              making the course very cheap. The course is considered easy to
              pursue in comparison to other countries. The overall cost of the
              course is low in the country. The experience is smooth for
              international students in the country’s universities, hence the
              low tuition fees for the students. There is also the added
              advantage of not having to pay any donations. The experience of
              completing the six-year course is budget-friendly for the
              students. The cost of the course, MBBS (Bachelor of Medicine and
              Bachelor of Surgery), varies depending on the country and the
              university. The overall cost of the course is low when compared to
              other countries. The cost is also likely to vary; hence, the best
              option is to check the latest updates from the university.
            </p>
          </div>
        </div>

        {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
      </div>

      {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Food and Accommodation Cost –MBBS In Bangladesh
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Most Bangladesh medical universities provide comfortable hostel
              accommodation specially designed for international students. Rooms
              are usually shared (2–3 students per room) and come fully
              furnished with:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Beds, mattresses, bedsheets, blankets, pillows</li>
              <li>Study tables, chairs, wardrobes/cupboards</li>
              <li>Central heating (very important in Bangladesh winters)</li>
            </ul>

            <p className="mt-6">Hostels typically include:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Common kitchen where students can cook their own food (very
                popular among Indian students to prepare Indian meals)
              </li>
              <li>Common washing machines / laundry rooms</li>
              <li>
                Indian mess / canteen facilities in many universities (or
                nearby)
              </li>
              <li>
                Indian restaurants and grocery stores often within walking
                distance
              </li>
            </ul>

            <p className="mt-6">
              <strong>Approximate monthly living expenses (2026–2027):</strong>
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Hostel / Accommodation: ₹8,000 – ₹18,000</li>
              <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
              <li>Transport + Miscellaneous: ₹3,000 – ₹7,000</li>
              <li>
                <strong>Total monthly:</strong> ≈ ₹20,000 – ₹40,000
              </li>
            </ul>

            <p className="mt-6 italic text-gray-600">
              Many universities also offer Indian food in their mess/canteen,
              helping students maintain a familiar diet without much extra cost.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== ADMISSION PROCESS ==================== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Admission Process For MBBS In Bangladesh 2026-2027
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The admission process for{" "}
              <strong>MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
              courses in Bangladesh may vary slightly among different
              universities, but the general process for Indian students is as
              follows:
            </p>

            <div className="space-y-10">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  1. Research and Select a University
                </h4>
                <p className="text-gray-700">
                  Research NMC-approved medical universities/colleges in
                  Bangladesh that offer MBBS in English medium.
                  <br />
                  <strong>Some well-known options include:</strong>
                </p>
                <ul className="mt-2 text-gray-600 list-disc pl-6">
                  <li>Dhaka Medical College</li>
                  <li>Chittagong Medical College</li>
                  <li>Bangabandhu Sheikh Mujib Medical University</li>
                  <li>Bangladesh Medical College (Private)</li>
                  <li>Dhaka National Medical College (Private)</li>
                  <li>International Medical College</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Check: NMC/WHO recognition, English medium, tuition fees
                  (~₹25-45 lakhs total), hostel facilities, and FMGE pass rates.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  2. Check Eligibility
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Completed 10+2 with Physics, Chemistry, Biology (and
                    English)
                  </li>
                  <li>
                    Minimum 60% aggregate in PCB (some require GPA 7.0/10 or
                    equivalent; 40-50% for reserved categories in some cases)
                  </li>
                  <li>
                    NEET qualified (mandatory for Indian students as per NMC)
                  </li>
                  <li>
                    Age: 17 years completed by 31st Dec of admission year (no
                    upper limit in most cases, but typically under 25)
                  </li>
                  <li>
                    No more than 1-2 year gap after 12th (varies by college)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  3. Apply Online / Through Authorized Channels
                </h4>
                <p className="text-gray-700">
                  Fill the university/Bangladesh Medical University (BMU)
                  application form online (often via DGHS or college portals) →
                  Submit scanned documents → Pay application fee → Receive
                  admission/invitation letter (usually within weeks; deadlines
                  often extended to Feb/March for 2026 session).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  4. Visa & Travel
                </h4>
                <p className="text-gray-700">
                  Use invitation letter to apply for student visa at Bangladeshi
                  High Commission/Embassy in India → Book tickets → Arrive in
                  Bangladesh → Complete university registration & medical
                  check-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Required Documents */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                Required Documents for MBBS in Bangladesh 2026-2027
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h5 className="text-lg font-semibold text-blue-800">
                    Educational Documents
                  </h5>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    <li>10th & 12th marksheets + certificates</li>
                    <li>NEET scorecard & admit card</li>
                    <li>Passport (valid for the course duration)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h5 className="text-lg font-semibold text-blue-800">
                    Other Important Documents
                  </h5>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    <li>Passport size photos (white background)</li>
                    <li>
                      Medical fitness certificate (including HIV test if
                      required)
                    </li>
                    <li>Invitation/admission letter from university</li>
                    <li>Visa application form & fee receipt</li>
                    <li>Police clearance/no criminal record (if asked)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right - Eligibility + Scholarships */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Eligibility Criteria & Scholarships
              </h2>

              <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  Basic Eligibility
                </h4>
                <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Age 17+ by 31st Dec of admission year</li>
                  <li>
                    60%+ in PCB in 12th (varies; some accept 50% for reserved)
                  </li>
                  <li>
                    NEET qualified (mandatory for Indians to practice in India
                    later)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  Popular Scholarships / Financial Aid
                </h4>
                <ul className="space-y-4">
                  <li>
                    <strong>
                      Bangladesh Government / SAARC Quota Scholarships
                    </strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Limited seats with subsidized fees for SAARC students
                      (including Indians); very competitive.
                    </span>
                  </li>
                  <li>
                    <strong>University Merit Scholarships</strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Some private colleges offer based on NEET/academic scores.
                    </span>
                  </li>
                  <li>
                    <strong>Other options</strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Limited external scholarships (e.g., via Indian govt
                      schemes or private trusts); mostly self-funded.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== COMPARISON TABLE ==================== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            MBBS in Bangladesh vs MBBS in India – Quick Comparison (2026-2027)
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    Criteria
                  </th>
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    MBBS in Bangladesh
                  </th>
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    MBBS in India
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">
                    Tuition Fees (Total Course)
                  </td>
                  <td className="p-4 border">₹25 – 45 Lakhs</td>
                  <td className="p-4 border">
                    Govt: ₹1-10 Lakhs (rare seats)
                    <br />
                    Private: ₹50 Lakhs – 1.5 Cr+
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Course Duration</td>
                  <td className="p-4 border">
                    6 years (5 years study + 1 year internship)
                  </td>
                  <td className="p-4 border">5.5 years + 1 year internship</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Class Strength</td>
                  <td className="p-4 border">25–50 students</td>
                  <td className="p-4 border">100–150+ (especially private)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Global Recognition</td>
                  <td className="p-4 border">NMC, WHO, BMDC approved</td>
                  <td className="p-4 border">
                    NMC approved (govt better recognized)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">
                    Medium of Instruction
                  </td>
                  <td className="p-4 border">English</td>
                  <td className="p-4 border">English</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ==================== FAQs ==================== */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Frequently Asked Questions – MBBS in Bangladesh 2026-2027
          </h2>

          <div className="space-y-5">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${
                  openIndex === index ? "shadow-lg border-blue-300" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-blue-700 min-w-[2.5rem]">
                      {index + 1}.
                    </span>
                    <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
                      {item.question}
                    </h4>
                  </div>

                  <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
                    {openIndex === index ? (
                      <FiMinus className="transform rotate-0" />
                    ) : (
                      <FiPlus className="transform rotate-0" />
                    )}
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
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg"></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Bangladesh;
