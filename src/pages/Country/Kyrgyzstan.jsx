// import React, { useState } from "react";
// import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
// import kernal from "../../Images/kazakhstan student.jpg";
// import Russianflag2 from "../../Images/country flag png/Kyrgyzstan.svg";

// const Kyrgyzstan = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg"
//             alt="Kremlin Bridge City"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN  Kazakhstan
//             </h1>
//           </div>
//         </div>

//         {/* You can duplicate more slides like this or use carousel library */}
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {/* Intro Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//           <div>
//             <img
//               src={Russianflag2}
//               alt="Russia flag"
//               className="w-32 md:w-40  shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in Kazakhstan 2026–2027
//             </h2>
//           </div>
//         </div>

//         {/* About Russia + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About Russia
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Russia has become popular among medical students, who are looking
//               for a safe option internationally, as it has a strong academic
//               environment for MBBS abroad. With a duration of approximately{" "}
//               <strong>6 years</strong>, Russia has a well-balanced combination
//               of quality education and practical clinical exposure.
//             </p>

//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               Bangladesh is a great choice for prospective medical students; it
//               offers a safe environment, quality of life, and a supportive
//               atmosphere for international students. With a course duration of
//               5.8 years, studying MBBS in Bangladeshis an excellent option for
//               students looking for top-quality education for international
//               students. Students from around the world choose Bangladesh for
//               their medical studies, and graduates from Bangladeshi universities
//               are highly respected in clinical settings around the globe.
//               Bangladesh offers a wide range of services and training that are
//               essential to the professional development of students, assuring a
//               successful and powerful professional journey. While Bangladesh
//               remains a popular destination, other countries, including China,
//               Nepal, and Kyrgyzstan, also provide affordable medical education.
//             </p>

//             {showMoreAbout ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 While Russia remains a popular destination, other countries like
//                 China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and
//                 Kyrgyzstan also offer affordable medical education.
//                 International students are often exempted from the one-year
//                 preparatory course.
//               </p>
//             ) : null}

//             <button
//               onClick={() => setShowMoreAbout(!showMoreAbout)}
//               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
//             >
//               {showMoreAbout ? "Show Less" : "Read More"}
//             </button>
//           </div>

//           <div>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Karakol_cathedral.jpg"
//               alt="Kremlin"
//               className="rounded-xl shadow-2xl w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick Information + About MBBS */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {/* Left – Quick Info Table */}
//           <div>
//             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
//               Quick Information – Study MBBS in Russia
//             </h3>

//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-300 text-left">
//                 <tbody>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Recognition</td>
//                     <td className="p-4">NMC & WHO approved</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Eligibility</td>
//                     <td className="p-4">50% in PCB aggregate</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Course Duration</td>
//                     <td className="p-4">6 Years</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">NEET</td>
//                     <td className="p-4">Compulsory</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
//                     <td className="p-4">Not Required</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Medium of Teaching</td>
//                     <td className="p-4">English</td>
//                   </tr>

//                     <tr>
//                     <td className="p-4 font-semibold">Universities Recognition</td>
//                     <td className="p-4">NMC & WHO-approved</td>
//                   </tr>

//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right – About MBBS */}
//           <div>
//             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
//               About MBBS in Kazakhstan
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Studying MBBS in Kazakhstan is notably straightforward
//             </p>

//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 — no entrance exam (apart from NEET for Indian students). The
//                 Russian government subsidizes education, keeping fees relatively
//                 low...
//               </p>
//             ) : null}

//             <button
//               onClick={() => setShowMoreClimate(!showMoreClimate)}
//               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
//             >
//               {showMoreClimate ? "Show Less" : "Read More"}
//             </button>
//           </div>
//         </div>

//         {/* ==================== UNIVERSITIES GRID ==================== */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
//             Top Medical Universities in Russia
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Asian Medical Institute",
//                 img: "https://asmi.edu.kg/wp-content/uploads/slider2/DJI_0086.jpeg",
//               },
//               {
//                 name: "Kyrgyz Russian Slavic University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kyrgyz-Russian_Slavic_University.jpg",
//               },
//               {
//                 name: "Jalal-Abad State Medical University",
//                 img: "https://www.ruseducation.in/wp-content/uploads/2022/01/Jalalabad-State-Medical-University.webp",
//               },
//               {
//                 name: "International Medical College",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg",
//               },
//               {
//                 name: "Osh State University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Osh_state_university.jpg",
//               },
//               {
//                 name: "Kyrgyz State Medical Academy",
//                 img: "https://www.ruseducation.in/wp-content/uploads/2022/01/Kyrgyz-State-Medical-Academy.webp",
//               },
//             ].map((uni, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <img
//                   src={uni.img}
//                   alt={uni.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h4 className="text-xl font-bold text-blue-900">
//                     {uni.name}
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ==================== ADVANTAGES + COST ==================== */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//               Advantages of Studying MBBS in Russia 2025–2026
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   1. High-Quality Education
//                 </h5>
//                 <p className="text-gray-700">
//                   Globally recognized universities with strong academic
//                   standards.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   2. Affordable Tuition Fees
//                 </h5>
//                 <p className="text-gray-700">
//                   Significantly lower than many Western countries.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   3. No Additional Entrance Exams
//                 </h5>
//                 <p className="text-gray-700">
//                   (NEET required for Indian students only)
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   4. English-Medium Programs
//                 </h5>
//                 <p className="text-gray-700">
//                   No language barrier for most international students.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//               Cost of Study MBBS in Russia
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               The cost of the <strong> MBBS course in Russia</strong> is very
//               low for Indian students who want to pursue their{" "}
//               <strong>MBBS</strong> course in Russia. Russia is a very demanding
//               country for Indian students who want to pursue their MBBS course.
//               The government of Russia has funded the fee structure for the MBBS
//               course. Studying MBBS in Russia is an easy task for Indian
//               students compared to other countries. Studying MBBS in Russia is
//               very cheap. The universities in Russia provide a smooth platform
//               for <strong>international students</strong> so that they don't
//               need to pay the high tuition fees. Apart from this, there is no
//               need to pay any donations.
//             </p>
//           </div>
//         </div>

//         {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
//       </div>

//       {/* Floating Enroll Button */}
//       <button
//         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
//         onClick={() => alert("Open Admission Modal / Redirect to form")}
//       >
//         <span className="font-bold text-lg">ENROLL NOW!</span>
//       </button>

//       {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
//       <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//             Food and Accommodation Cost – MBBS in Russia
//           </h2>

//           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//             <p>
//               Most Russian medical universities provide comfortable hostel
//               accommodation specially designed for international students. Rooms
//               are usually shared (2–3 students per room) and come fully
//               furnished with:
//             </p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>Beds, mattresses, bedsheets, blankets, pillows</li>
//               <li>Study tables, chairs, wardrobes/cupboards</li>
//               <li>Central heating (very important in Russian winters)</li>
//             </ul>

//             <p className="mt-6">Hostels typically include:</p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>
//                 Common kitchen where students can cook their own food (very
//                 popular among Indian students to prepare Indian meals)
//               </li>
//               <li>Common washing machines / laundry rooms</li>
//               <li>
//                 Indian mess / canteen facilities in many universities (or
//                 nearby)
//               </li>
//               <li>
//                 Indian restaurants and grocery stores often within walking
//                 distance
//               </li>
//             </ul>

//             <p className="mt-6">
//               <strong>Approximate monthly living expenses (2025–2026):</strong>
//             </p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>Hostel / Accommodation: ₹8,000 – ₹18,000</li>
//               <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
//               <li>Transport + Miscellaneous: ₹3,000 – ₹7,000</li>
//               <li>
//                 <strong>Total monthly:</strong> ≈ ₹20,000 – ₹40,000
//               </li>
//             </ul>

//             <p className="mt-6 italic text-gray-600">
//               Many universities also offer Indian food in their mess/canteen,
//               helping students maintain a familiar diet without much extra cost.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ==================== ADMISSION PROCESS ==================== */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//             Admission Process for MBBS in Russia 2025–2026
//           </h2>

//           <div className="max-w-4xl mx-auto">
//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               The admission process for{" "}
//               <strong> MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
//               courses in Russia varies slightly among different universities,
//               but the general process is as follows:
//             </p>

//             <div className="space-y-10">
//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   1. Research and Select a University:
//                 </h4>
//                 <p className="text-gray-700">
//                   Research the <strong>Russian universities</strong> that offer
//                   MBBS courses. Some of the best universities for MBBS courses
//                   in Russia are
//                   <strong>
//                     {" "}
//                     Moscow State Medical University, Saint Petersburg State
//                     Medical University, Kazan Federal University, etc.
//                   </strong>
//                 </p>
//                 <p className="mt-2 text-gray-600">
//                   Check: NMC/WHO recognition, English medium availability,
//                   tuition fees, hostel quality.
//                 </p>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   2. Check Eligibility
//                 </h4>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Completed 10+2 with Physics, Chemistry, Biology</li>
//                   <li>
//                     Minimum 50% aggregate in PCB (40% for reserved categories)
//                   </li>
//                   <li>NEET qualified (mandatory for Indian students)</li>
//                   <li>Age: 17 years completed by 31st Dec of admission year</li>
//                 </ul>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   3. Apply Online
//                 </h4>
//                 <p className="text-gray-700">
//                   Fill university application form → Submit scanned documents →
//                   Receive admission/invitation letter (usually within 2–4
//                   weeks).
//                 </p>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   4. Visa & Travel
//                 </h4>
//                 <p className="text-gray-700">
//                   Use invitation letter to apply for student visa at Russian
//                   Embassy/Consulate → Book tickets → Arrive in Russia → Complete
//                   university registration & medical check-up.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
//       <div className="py-16 bg-gradient-to-b from-white to-gray-50">
//         <div className="container mx-auto px-4 max-w-7xl">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Left - Required Documents */}
//             <div>
//               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//                 Required Documents for MBBS in Russia 2025–2026
//               </h2>

//               <div className="space-y-6">
//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <h5 className="text-lg font-semibold text-blue-800">
//                     Educational Documents
//                   </h5>
//                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                     <li>10th & 12th marksheets + certificates</li>
//                     <li>NEET scorecard & admit card</li>
//                     <li>Passport (valid for minimum 18–24 months)</li>
//                   </ul>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <h5 className="text-lg font-semibold text-blue-800">
//                     Other Important Documents
//                   </h5>
//                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                     <li>Passport size photos (white background)</li>
//                     <li>HIV & medical fitness certificate</li>
//                     <li>
//                       Invitation letter from university (issued after admission)
//                     </li>
//                     <li>Visa application form & fee receipt</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Eligibility + Scholarships */}
//             <div>
//               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//                 Eligibility Criteria & Scholarships
//               </h2>

//               <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
//                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
//                   Basic Eligibility
//                 </h4>
//                 <ul className="list-decimal pl-5 space-y-2 text-gray-700">
//                   <li>Age 17+ by 31st Dec of admission year</li>
//                   <li>50%+ in PCB in 12th (40% for SC/ST/OBC)</li>
//                   <li>NEET qualified (mandatory for Indians)</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border">
//                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
//                   Popular Scholarships
//                 </h4>
//                 <ul className="space-y-4">
//                   <li>
//                     <strong>
//                       Russian Government Scholarship (Open Doors / Quota)
//                     </strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Covers tuition + sometimes hostel. Very competitive —
//                       apply via education-in-russia.com
//                     </span>
//                   </li>
//                   <li>
//                     <strong>University-specific Merit Scholarships</strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Offered by many universities for good NEET/academic scores
//                     </span>
//                   </li>
//                   <li>
//                     <strong>Other options</strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Education Future, Inlaks, etc. (limited for MBBS)
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== COMPARISON TABLE ==================== */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//             MBBS in Russia vs MBBS in India – Quick Comparison (2025–2026)
//           </h2>

//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse border border-gray-300 text-left">
//               <thead>
//                 <tr className="bg-blue-900 text-white">
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     Criteria
//                   </th>
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     MBBS in Russia
//                   </th>
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     MBBS in India
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700">
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">
//                     Tuition Fees (per year)
//                   </td>
//                   <td className="p-4 border">₹2 – 5 Lakhs</td>
//                   <td className="p-4 border">
//                     Govt: ₹40k – ₹2 Lakhs
//                     <br />
//                     Private: ₹10 – 25+ Lakhs
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">
//                     Donation / Capitation
//                   </td>
//                   <td className="p-4 border text-green-700">No Donation</td>
//                   <td className="p-4 border text-red-700">
//                     Often ₹30–80 Lakhs in private colleges
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">Course Duration</td>
//                   <td className="p-4 border">6 years (including internship)</td>
//                   <td className="p-4 border">5.5 years + 1 year internship</td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">Class Strength</td>
//                   <td className="p-4 border">20–40 students</td>
//                   <td className="p-4 border">
//                     100–150+ students (especially private)
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">Global Recognition</td>
//                   <td className="p-4 border">
//                     NMC, WHO, WFME approved universities
//                   </td>
//                   <td className="p-4 border">
//                     NMC approved, but private colleges vary
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">
//                     Medium of Instruction
//                   </td>
//                   <td className="p-4 border">English</td>
//                   <td className="p-4 border">English</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Kyrgyzstan;

import React, { useState } from "react";
import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
import kernal from "../../Images/kazakhstan student.jpg";
import Russianflag2 from "../../Images/country flag png/Kyrgyzstan.svg";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";


const Kyrgyzstan = () => {

  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();
  return (
    <>
    
         <Helmet>
                      <title>MBBS in Kazakhstan for Indian Students | Fees & Admission 2026</title>
                      <meta name="description" content="MBBS in Kazakhstan at low cost with top universities. Get details on fees, eligibility, admission process and medical colleges." />
                      <meta name="keywords" content="mbbs in kazakhstan, kazakhstan mbbs fees, study mbbs kazakhstan, kazakhstan medical colleges, mbbs kazakhstan admission" />
                    </Helmet>

    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg"
            alt="Kyrgyzstan Medical University Campus"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN KYRGYZSTAN
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
              alt="Kyrgyzstan flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Kyrgyzstan 2026–2027
            </h2>
          </div>
        </div>

        {/* About Kyrgyzstan + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Kyrgyzstan
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Kyrgyzstan has become one of the most preferred destinations for 
              Indian students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}  
              because of its 
              affordable tuition fees, quality medical education, and globally 
              recognised universities. Many students choose to {" "}<strong>study MBBS in 
              Kyrgyzstan</strong>{" "}   due to its modern infrastructure, experienced faculty, 
              and English-medium medical programs. The MBBS course generally takes 
              6 years to complete, including internship and practical clinical training.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              One of the biggest advantages of {" "}<strong>MBBS admission in Kyrgyzstan</strong>{" "}   is the 
              availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs compared to 
              many other countries. The country is home to several top medical 
              universities in Kyrgyzstan that provide advanced laboratories, 
              practical training, and strong academic support. Students studying 
              in {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Kyrgyzstan
               </a>{" "} 
              receive both theoretical and hands-on 
              clinical exposure, helping them become skilled medical professionals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Kyrgyzstan is also known for having some of the {" "}<strong>top government medical colleges 
                in Kyrgyzstan</strong>{" "}  along with reputed private institutions. The availability of {" "}<strong>top 
                private and government college in Kyrgyzstan</strong>{" "}  options gives students flexibility 
                according to their budget and career goals. Apart from Kyrgyzstan, other popular 
                {" "}<strong>foreign countries for MBBS abroad</strong>{" "}  include Kazakhstan, Nepal, and Georgia, making 
                Kyrgyzstan one of the {" "}<strong>best countries for MBBS abroad</strong>{" "}  for Indian students.
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
              alt="Kyrgyzstan student life / campus"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Kyrgyzstan
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
                  <tr className="bg-gray-100">
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
              About MBBS in Kyrgyzstan
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Kyrgyzstan is one of the top choices for Indian students
              interested in studying MBBS abroad due to the high level of
              security, safety, and affordability provided.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The duration of the program is 6 years (5 years academic + 1
                year internship), and the cost of education is relatively lower
                compared to many other countries. The standard of MBBS education
                is world-class with modern infrastructure. The medium of
                instruction is English, eliminating language barriers. Direct
                admission is available without additional entrance exams (only
                NEET required for Indian students). Kyrgyzstan has a temperate
                climate with cold winters (around -20°C) and warm summers (up to
                +25°C). Hostels are equipped with heating systems for comfort
                during winter.
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
            Top Medical Universities in Kyrgyzstan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "International Medical College",
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/International_higher_school_of_medicine_central_campus.jpg",
              },
              {
                name: "Kyrgyz Russian Slavic University",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kyrgyz-Russian_Slavic_University.jpg",
              },
              {
                name: "Jalal-Abad State Medical University",
                img: "https://www.ruseducation.in/wp-content/uploads/2022/01/Jalalabad-State-Medical-University.webp",
              },
              {
                name: "Asian Medical Institute",
                img: "https://asmi.edu.kg/wp-content/uploads/slider2/DJI_0086.jpeg",
              },
              {
                name: "Osh State University",
                img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Osh_state_university.jpg",
              },
              {
                name: "Kyrgyz State Medical Academy",
                img: "https://www.ruseducation.in/wp-content/uploads/2022/01/Kyrgyz-State-Medical-Academy.webp",
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

        {/* ==================== ADVANTAGES ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Kyrgyzstan 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. High-Quality Education
                </h5>
                <p className="text-gray-700">
                  NMC & WHO recognized universities with modern infrastructure
                  and experienced faculty.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">2. Affordable Fees</h5>
                <p className="text-gray-700">
                  Low tuition and living costs — total around ₹17–28 lakhs for
                  the full course.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">3. English Medium</h5>
                <p className="text-gray-700">
                  No language barrier for Indian and international students.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">4. Simple Admission</h5>
                <p className="text-gray-700">
                  No additional entrance exams (only NEET required).
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  5. Safe & Comfortable Living
                </h5>
                <p className="text-gray-700">
                  Good hostels, Indian mess, and pleasant environment.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Kyrgyzstan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The low MBBS tuition fees combined with low living costs in
              Kyrgyzstan attract more and more Indian students. Kyrgyzstan
              offers subsidized fee structures, making it economically viable.
              No donation or capitation fees required. The overall cost for the
              6-year MBBS course (tuition + hostel + food) usually ranges
              between ₹17 lakhs and ₹28 lakhs, depending on the university.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Kyrgyzstan
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Students who choose to study MBBS in Kyrgyzstan often look for
                comfortable and affordable living facilities. Medical
                universities provide well-maintained hostel facilities, food
                options, and essential amenities for international students.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Most medical universities provide on-campus hostel facilities
                  for international students.
                </li>
                <li>
                  Multiple hostel buildings to accommodate both local and
                  international students.
                </li>
                <li>
                  Hostels are designed to provide a safe and comfortable living
                  environment.
                </li>
                <li>
                  Students can stay in university hostels throughout their
                  entire MBBS course duration.
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Room Facilities
              </h4>
              <p>
                University hostel rooms generally include the following basic
                amenities:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Fully furnished rooms</li>
                <li>Comfortable beds, mattress, blankets, bedsheets</li>
                <li>Study tables and chairs</li>
                <li>Wardrobes or cupboards</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Most hostels provide common kitchens where students can cook
                  their own meals.
                </li>
                <li>
                  Indian students can prepare Indian food to maintain their
                  regular diet.
                </li>
                <li>
                  Many universities provide mess or canteen facilities offering
                  Indian meals.
                </li>
                <li>
                  Indian restaurants near universities, usually within walking
                  distance.
                </li>
                <li>
                  Students can enjoy local Kyrgyz cuisine and international
                  dishes.
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Average Living Cost for Students
              </h4>
              <p>
                The cost of living in Kyrgyzstan is affordable compared to many
                other countries.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Hostel Fees: ≈ ₹8,000 – ₹15,000 per month (or ₹80,000 –
                  ₹1,80,000 per year)
                </li>
                <li>Food Expenses: ≈ ₹8,000 – ₹15,000 per month</li>
                <li>
                  Overall Living Cost: ≈ ₹15,000 – ₹30,000 per month (depending
                  on city and lifestyle)
                </li>
              </ul>
              <p className="mt-4 italic">
                Many students manage comfortably within ₹20,000–₹25,000 per
                month by using university mess and self-cooking.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Kyrgyzstan 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The MBBS admission process in Kyrgyzstan is simple and
                student-friendly for international applicants.
              </p>

              <div className="space-y-10">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 1: Application
                  </h4>
                  <p>
                    Fill out the university application form and submit required
                    documents.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 2: Admission Letter
                  </h4>
                  <p>
                    Receive the official admission / invitation letter after
                    approval.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 3: Visa Application
                  </h4>
                  <p>
                    Apply for student visa at the Kyrgyzstan Embassy with the
                    invitation letter.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 4: Travel & Registration
                  </h4>
                  <p>
                    Travel to Kyrgyzstan → University registration → Hostel
                    allocation → Start MBBS program after fee payment.
                  </p>
                </div>
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
                  Eligibility Criteria for MBBS in Kyrgyzstan
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    Minimum 17 years of age by 31st December of the admission
                    year.
                  </li>
                  <li>
                    Minimum 50% marks in 12th standard with Physics, Chemistry,
                    Biology (40% for reserved categories).
                  </li>
                  <li>NEET qualification is mandatory for Indian students.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Documents Required
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Completed admission application form</li>
                  <li>10th & 12th marksheets + certificates</li>
                  <li>NEET scorecard / admit card</li>
                  <li>Valid passport copy</li>
                  <li>Passport-size photographs (white background)</li>
                  <li>Identity proof (Aadhaar, PAN, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Kyrgyzstan vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      Criteria
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in Kyrgyzstan
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
                    <td className="p-4 border font-medium">Course Duration</td>
                    <td className="p-4 border">
                      6 years (including internship)
                    </td>
                    <td className="p-4 border">
                      5.5 years + 1 year internship
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Total Cost</td>
                    <td className="p-4 border">₹17–28 lakhs</td>
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
                    <td className="p-4 border">Modern labs and hospitals</td>
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
              MBBS in Kyrgyzstan – Short FAQs
            </h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  How to get MBBS admission in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Qualify NEET and have 50% marks in PCB in 12th. Apply online
                  to the university, receive invitation letter, and apply for
                  student visa.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is it good to study MBBS in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, Kyrgyzstan offers affordable fees, English-medium
                  programs, NMC/WHO recognized universities, and good clinical
                  exposure.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Why study MBBS in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Low tuition fees, simple admission process, modern medical
                  education, low living costs, and safe environment for Indian
                  students.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Kyrgyzstan valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, if the university is NMC approved. Students must clear
                  FMGE or NEXT to practice in India.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  When does the MBBS course start in Kyrgyzstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  The MBBS session usually starts between September and October
                  each year.
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

export default Kyrgyzstan;
