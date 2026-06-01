import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
import kernal from "../../Images/Russia/about-russia.jpg";
import Russianflag2 from "../../Images/country flag png/Russia.svg";
import MARISTATEUNIVERSITY from "../../Images/Russia/MARI STATE UNIVERSITY.jpg";
import ORELSTATEUNIVERSITY from "../../Images/Russia/OREL STATE UNIVERSITY.jpg";
import ORENBURGSTATEUNIVERSITY from "../../Images/Russia/ORENBURG STATE UNIVERSITY.jpg";
import TVERSTATEMEDICALUNIVERSITY from "../../Images/Russia/TVER STATE MEDICAL UNIVERSITY.jpeg";
import AltaiStateMedicalUniversity from "../../Images/Russia/Altai State Medical University.jpg";
import { useNavigate } from "react-router-dom";


const Russia = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();
  return (
    <>
    
    
    <Helmet>
              <title>MBBS in Russia for Indian Students | Russia MBBS Fees & Admission </title>
              <meta name="description" content="Study MBBS in Russia with low fees and NMC approved universities. Check eligibility, admission process, and top medical universities in Russia." />
              <meta name="keywords" content="mbbs in russia, russia mbbs fees, study mbbs russia, russia medical colleges, mbbs russia admission" />
            </Helmet>
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={RussiaFlag}
            alt="Kremlin Bridge City"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN RUSSIA
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
              src={Russianflag2}
              alt="Russia flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Russia 2026–2027
            </h2>
          </div>
        </div>

        {/* About Russia + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Russia
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Russia has become one of the most preferred destinations for Indian
              students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button> 
              {" "}    
               because of its high-quality 
              education, affordable tuition fees, and globally recognized medical
              universities. With a course duration of around 6 years,{" "}<strong>MBBS in Russia</strong>{" "}
              offers the perfect combination of theoretical learning and practical
              clinical exposure. Students receive hands-on medical training in
               modern hospitals and laboratories, helping them develop strongS
              medical skills and professional confidence.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              One of the biggest reasons students choose Russia is the availability of 
              {" "}<strong>affordable fees in MBBS abroad</strong>{" "}    
               programs compared to countries like the USA
              or UK. Many of the 
              {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                  top medical universities in Russia
               </a>
                {" "}
              are recognized 
              internationally and provide advanced infrastructure, experienced 
              faculty, and a safe environment for international students. 
              This makes Russia one of the {" "}<strong>best countries for MBBS abroad</strong>{" "}.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Apart from Russia, other popular {" "}<strong>foreign countries for MBBS abroad</strong>{" "}  include
                Bangladesh, Nepal, Kazakhstan, and Kyrgyzstan. However, due to its
                quality education and affordability, Russia remains a top choice 
                and is home to some of the{" "}<strong>best medical colleges in abroad for 
                Indian students</strong>{" "} who wish to {" "}<strong>study medical in Russia</strong>.
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
              Quick Information – Study MBBS in Russia
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
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Russia
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Studying MBBS in Russia is notably straightforward
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                — no entrance exam (apart from NEET for Indian students). The
                Russian government subsidizes education, keeping fees relatively
                low...
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
        <div id="universities" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Russia
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mari State University",
                img: MARISTATEUNIVERSITY,
              },
              {
                name: "Orel State University",
                img: ORELSTATEUNIVERSITY,
              },
              {
                name: "Orenburg State University",
                img: ORENBURGSTATEUNIVERSITY,
              },
              {
                name: "Perm State University",
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg",
              },
              {
                name: "Tver State Medical University",
                img: TVERSTATEMEDICALUNIVERSITY,
              },
              {
                name: "Altai State Medical University",
                img: AltaiStateMedicalUniversity,
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
              Advantages of Studying MBBS in Russia 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. High-Quality Education
                </h5>
                <p className="text-gray-700">
                  Globally recognized universities with strong academic
                  standards.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. Affordable Tuition Fees
                </h5>
                <p className="text-gray-700">
                  Significantly lower than many Western countries.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. No Additional Entrance Exams
                </h5>
                <p className="text-gray-700">
                  (NEET required for Indian students only)
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. English-Medium Programs
                </h5>
                <p className="text-gray-700">
                  No language barrier for most international students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Russia
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The cost of the <strong> MBBS course in Russia</strong> is very
              low for Indian students who want to pursue their{" "}
              <strong>MBBS</strong> course in Russia. Russia is a very demanding
              country for Indian students who want to pursue their MBBS course.
              The government of Russia has funded the fee structure for the MBBS
              course. Studying MBBS in Russia is an easy task for Indian
              students compared to other countries. Studying MBBS in Russia is
              very cheap. The universities in Russia provide a smooth platform
              for <strong>international students</strong> so that they don't
              need to pay the high tuition fees. Apart from this, there is no
              need to pay any donations.
            </p>
          </div>
        </div>

        {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
      </div>

      {/* Floating Enroll Button */}

      {/* ==================== ADMISSION PROCESS ==================== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Admission Process for MBBS in Russia 2026–2027

          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The admission process for{" "}
              <strong> MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
              courses in Russia varies slightly among different universities,
              but the general process is as follows:
            </p>

            <div className="space-y-10">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  1. Research and Select a University:
                </h4>
                <p className="text-gray-700">
                  Research the <strong>Russian universities</strong> that offer
                  MBBS courses. Some of the best universities for MBBS courses
                  in Russia are
                  <strong>
                    {" "}
                    Moscow State Medical University, Saint Petersburg State
                    Medical University, Kazan Federal University, etc.
                  </strong>
                </p>
                <p className="mt-2 text-gray-600">
                  Check: NMC/WHO recognition, English medium availability,
                  tuition fees, hostel quality.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  2. Check Eligibility
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Completed 10+2 with Physics, Chemistry, Biology</li>
                  <li>
                    Minimum 50% aggregate in PCB (40% for reserved categories)
                  </li>
                  <li>NEET qualified (mandatory for Indian students)</li>
                  <li>Age: 17 years completed by 31st Dec of admission year</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  3. Apply Online
                </h4>
                <p className="text-gray-700">
                  Fill university application form → Submit scanned documents →
                  Receive admission/invitation letter (usually within 2–4
                  weeks).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  4. Visa & Travel
                </h4>
                <p className="text-gray-700">
                  Use invitation letter to apply for student visa at Russian
                  Embassy/Consulate → Book tickets → Arrive in Russia → Complete
                  university registration & medical check-up.
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
                Required Documents for MBBS in Russia 2026–2027
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h5 className="text-lg font-semibold text-blue-800">
                    Educational Documents
                  </h5>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    <li>10th & 12th marksheets + certificates</li>
                    <li>NEET scorecard & admit card</li>
                    <li>Passport (valid for minimum 18–24 months)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h5 className="text-lg font-semibold text-blue-800">
                    Other Important Documents
                  </h5>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    <li>Passport size photos (white background)</li>
                    <li>HIV & medical fitness certificate</li>
                    <li>
                      Invitation letter from university (issued after admission)
                    </li>
                    <li>Visa application form & fee receipt</li>
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
                  <li>50%+ in PCB in 12th (40% for SC/ST/OBC)</li>
                  <li>NEET qualified (mandatory for Indians)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  Popular Scholarships
                </h4>
                <ul className="space-y-4">
                  <li>
                    <strong>
                      Russian Government Scholarship (Open Doors / Quota)
                    </strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Covers tuition + sometimes hostel. Very competitive —
                      apply via education-in-russia.com
                    </span>
                  </li>
                  <li>
                    <strong>University-specific Merit Scholarships</strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Offered by many universities for good NEET/academic scores
                    </span>
                  </li>
                  <li>
                    <strong>Other options</strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Education Future, Inlaks, etc. (limited for MBBS)
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
            MBBS in Russia vs MBBS in India – Quick Comparison (2026–2027)
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    Criteria
                  </th>
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    MBBS in Russia
                  </th>
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    MBBS in India
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">
                    Tuition Fees (per year)
                  </td>
                  <td className="p-4 border">₹2 – 5 Lakhs</td>
                  <td className="p-4 border">
                    Govt: ₹40k – ₹2 Lakhs
                    <br />
                    Private: ₹10 – 25+ Lakhs
                  </td>
                </tr>
          
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Course Duration</td>
                  <td className="p-4 border">6 years (including internship)</td>
                  <td className="p-4 border">5.5 years + 1 year internship</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Class Strength</td>
                  <td className="p-4 border">20–40 students</td>
                  <td className="p-4 border">
                    100–150+ students (especially private)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Global Recognition</td>
                  <td className="p-4 border">
                    NMC, WHO, WFME approved universities
                  </td>
                  <td className="p-4 border">
                    NMC approved, but private colleges vary
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
    </div>
    </>
  );
};

export default Russia;
