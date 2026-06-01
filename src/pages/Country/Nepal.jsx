// import React, { useState } from "react";
// import RussiaFlag from "../../Images/country flag png/Nepal.svg";

// const Nepal = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/f/f6/2.%E0%A6%B6%E0%A6%BE%E0%A6%AA%E0%A6%B2%E0%A6%BE_%E0%A6%9A%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%B0.jpg"
//             alt="Kremlin Bridge City"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN  Nepal
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
//               src={RussiaFlag}
//               alt="Russia flag"
//               className="w-32 md:w-40  shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in Nepal 2026–2027
//             </h2>
//           </div>
//         </div>

//         {/* About Russia + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About Nepal
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
//               src="https://upload.wikimedia.org/wikipedia/commons/4/40/Nepal_Patan_Mangal.jpg"
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
//               Quick Information – Study MBBS in Nepal
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
//               About MBBS in Nepal
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Studying MBBS in Nepal is notably straightforward
//             </p>

//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 — no entrance exam (apart from NEET for Indian students). The
//                 Nepal government subsidizes education, keeping fees relatively
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
//             Top Medical Universities in Nepal
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Nepalgunj Medical College",
//                 img: "https://www.edufever.com/wp-content/uploads/2022/08/Nepalgunj-Medical-College.webp",
//               },
//               {
//                 name: "Manipul College of Medical Science",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Manipal_Teaching_Hospital.jpg",
//               },
//               {
//                 name: "Kathmandu Medical College",
//                 img: "https://careeradvice.in/mbbs-abroad/wp-content/uploads/2021/12/featured-kathmandu-medical-images.png",
//               },
//               {
//                 name: "Lumbini Medical College",
//                 img: "https://flyfuture.in/admin/services/1658570838.jpg",
//               },
//               {
//                 name: "Devdaha Medical College  and Research",
//                 img: "https://ik.imagekit.io/lyzj6ywpw/main-images/devdaha-medical-college-and-research-institute/image1.jpg",
//               },
//               {
//                 name: "Chitwan Medical",
//                 img: "https://mycareersview.com/afile/mcv16373_5fe0220b67856_chitawan.jpg",
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
//               Advantages of Studying MBBS in Nepal 2025–2026
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
//               Cost of Study MBBS in Nepal
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               The cost of the <strong> MBBS course in Nepal</strong> is very
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
//             Food and Accommodation Cost – MBBS in Nepal
//           </h2>

//           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//             <p>
//               Most Nepal medical universities provide comfortable hostel
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
//             Admission Process for MBBS in Nepal 2025–2026
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
//                 Required Documents for MBBS in Nepal 2025–2026
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
//                       Nepal Government Scholarship (Open Doors / Quota)
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
//                     MBBS in Npeal
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

// export default Nepal;

import React, { useState } from "react";
import RussiaFlag from "../../Images/country flag png/Nepal.svg";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";


const Nepal = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();

  return (
    <>
         <Helmet>
                      <title> MBBS in Nepal for Indian Students | Fees & Admission Process </title>
                      <meta name="description" content="MBBS in Nepal with affordable fees and Indian syllabus. Get complete details on admission process, eligibility and top medical colleges." />
                      <meta name="keywords" content=" mbbs in nepal, nepal mbbs fees, study mbbs nepal, nepal medical colleges" />
                    </Helmet>
   
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://asmi.edu.kg/wp-content/uploads/slider2/DJI_0086.jpeg"
            alt="Nepal Landscape / Medical Campus"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN NEPAL
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
              src={RussiaFlag}
              alt="Nepal flag"
              className="w-32 md:w-40  shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Nepal 2026–2027
            </h2>
          </div>
        </div>

        {/* About Nepal + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Nepal
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Nepal has become one of the most preferred destinations for 
              Indian students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "} 
              because of its quality
              education, affordable tuition fees, and culturally familiar environment.
              Located between India and China, Nepal offers a safe and student-friendly
              atmosphere along with globally recognised medical education. 
              Many students choose to {" "}<strong>study MBBS in Nepal</strong>{" "} because the education
              pattern, food, and lifestyle are very similar to India, making
              it easier for Indian students to adapt comfortably.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              One of the major benefits of {" "}<strong>MBBS admission in Nepal</strong>{" "} is the
              availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs along
              with excellent clinical exposure. The country is home to several
              {" "}<strong>top medical universities in Nepal</strong>{" "} and reputed colleges that 
              provide modern infrastructure, experienced faculty, and 
              practical hospital training. Students studying in 
              {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Nepal
               </a>{" "} 
               receive strong theoretical and hands-on 
              clinical education, helping them become skilled medical professionals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Nepal is also known for having some of the {" "}<strong>top government medical 
                colleges in Nepal</strong>{" "} along with reputed private institutions. 
                The availability of {" "}<strong>top private and government college in Nepal</strong>{" "}
                options gives students flexibility according to their budget 
                and career goals. Apart from Nepal, other popular foreign 
                countries for MBBS abroad include Kyrgyzstan, Kazakhstan, 
                and Georgia, making Nepal one of the best countries for MBBS 
                abroad and home to some of the {" "}<strong>best medical colleges in abroad
                for Indian student</strong>{" "}.
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
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Nepal_Patan_Mangal.jpg"
              alt="Patan Durbar Square, Nepal"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Nepal
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
                    <td className="p-4">50% in PCB aggregate (40% reserved)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">
                      5.5 – 6 Years (including internship)
                    </td>
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
              MBBS in Nepal for Indian Students
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              MBBS in Nepal is a preferred choice for Indian students due to
              high-quality education, modern facilities, practical training, and
              reasonable fees compared to private colleges in India.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The course duration is 5.5–6 years (4.5–5 years academic + 1
                year internship), with curriculum aligned to Indian standards,
                preparing students well for FMGE/NEXT. English-medium
                instruction removes language barriers. Nepal's climate is
                temperate with moderate conditions; winters can be cold (down to
                -20°C in higher areas), summers warm (up to +25°C). Hostels have
                heating systems for comfort. The culturally similar environment,
                safe surroundings, and low living costs make Nepal an ideal
                destination for Indian students.
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
            Top Medical Universities in Nepal
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nepalgunj Medical College",
                img: "https://www.edufever.com/wp-content/uploads/2022/08/Nepalgunj-Medical-College.webp",
              },
              {
                name: "Manipal College of Medical Sciences",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Manipal_Teaching_Hospital.jpg",
              },
              {
                name: "Kathmandu Medical College",
                img: "https://careeradvice.in/mbbs-abroad/wp-content/uploads/2021/12/featured-kathmandu-medical-images.png",
              },
              {
                name: "Lumbini Medical College",
                img: "https://flyfuture.in/admin/services/1658570838.jpg",
              },
              {
                name: "Devdaha Medical College and Research Institute",
                img: "https://ik.imagekit.io/lyzj6ywpw/main-images/devdaha-medical-college-and-research-institute/image1.jpg",
              },
              {
                name: "Chitwan Medical College",
                img: "https://mycareersview.com/afile/mcv16373_5fe0220b67856_chitawan.jpg",
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
              Advantages of Studying MBBS in Nepal 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. Affordable & High-Quality Education
                </h5>
                <p className="text-gray-700">
                  World-class medical training at much lower cost than private
                  Indian colleges.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. English-Medium Instruction
                </h5>
                <p className="text-gray-700">
                  No language barrier – ideal for Indian students.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Similar Curriculum & Environment
                </h5>
                <p className="text-gray-700">
                  Education system aligned with India; culturally familiar and
                  safe.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. Indian Mess & Hostel Facilities
                </h5>
                <p className="text-gray-700">
                  Comfortable living with Indian food options in most colleges.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  5. No Donation / Capitation Fees
                </h5>
                <p className="text-gray-700">
                  Straightforward admission with only NEET required.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Nepal
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MBBS in Nepal is highly affordable for Indian students due to
              reasonable tuition fees and low living costs. No donation or
              capitation fees required. Total cost for the full course (tuition
              + hostel + food) typically ranges between ₹45 lakh to ₹65 lakh,
              depending on the university and facilities. Nepal government and
              universities provide subsidized structures, making it easier than
              many private colleges in India.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Nepal
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Medical universities in Nepal offer comfortable, safe, and
                affordable hostel facilities specially designed for
                international students, including many from India.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>On-campus hostels available in most universities</li>
                <li>Rooms usually shared by 2–3 students</li>
                <li>Safe, well-maintained environment with security</li>
                <li>
                  Students can stay in hostels for the entire course duration
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Room Facilities
              </h4>
              <p>Fully furnished rooms include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Comfortable beds, mattress, blankets, bedsheets</li>
                <li>Study tables and chairs</li>
                <li>Wardrobes or cupboards</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Common kitchens for self-cooking (popular for Indian meals)
                </li>
                <li>Many universities offer Indian mess/canteen facilities</li>
                <li>Indian restaurants and grocery stores nearby</li>
                <li>
                  Local Nepali food and international cuisines also available
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Laundry and Daily Facilities
              </h4>
              <p>
                Hostels provide washing machines/laundry rooms. Daily activities
                are easy to manage on campus.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Average Monthly Living Cost
              </h4>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hostel: ₹8,000 – ₹18,000</li>
                <li>Food (mess + self-cooking): ₹8,000 – ₹15,000</li>
                <li>Miscellaneous: ₹3,000 – ₹7,000</li>
                <li>
                  <strong>Total:</strong> ≈ ₹20,000 – ₹40,000 (comfortable
                  budget)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Nepal 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The admission process for MBBS in Nepal is straightforward and
                student-friendly.
              </p>

              <div className="space-y-10">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 1
                  </h4>
                  <p>
                    Research and select a recognized medical university in
                    Nepal.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 2
                  </h4>
                  <p>
                    Check eligibility and fill out the university application
                    form online.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 3
                  </h4>
                  <p>
                    Submit required documents (marksheets, NEET scorecard,
                    passport, etc.).
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 4
                  </h4>
                  <p>Receive admission confirmation or invitation letter.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 5
                  </h4>
                  <p>
                    Apply for student visa at Nepal Embassy (if required for
                    Indian students – often simplified due to open border).
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 6
                  </h4>
                  <p>
                    Travel to Nepal, complete university registration, and begin
                    MBBS program.
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
                  Eligibility Criteria for MBBS in Nepal
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
                  <li>NEET scorecard</li>
                  <li>Valid passport copy</li>
                  <li>Passport-size photographs</li>
                  <li>Medical fitness certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Nepal vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      Criteria
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in Nepal
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in India
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">
                      Entrance Requirement
                    </td>
                    <td className="p-4 border">NEET qualified</td>
                    <td className="p-4 border">NEET + high cut-offs</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Course Duration</td>
                    <td className="p-4 border">
                      5.5–6 years (incl. internship)
                    </td>
                    <td className="p-4 border">5.5 years + internship</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Total Cost</td>
                    <td className="p-4 border">₹45–65 lakhs</td>
                    <td className="p-4 border">Private: ₹20–80+ lakhs</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">
                      Seats Availability
                    </td>
                    <td className="p-4 border">
                      More seats for international/Indian students
                    </td>
                    <td className="p-4 border">Limited in govt colleges</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">
                      Infrastructure & Exposure
                    </td>
                    <td className="p-4 border">
                      Modern hospitals, good clinical training
                    </td>
                    <td className="p-4 border">Varies widely</td>
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
              Frequently Asked Questions – MBBS in Nepal
            </h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Can Indian students study MBBS in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, Indian students easily study MBBS in Nepal. Many
                  universities welcome Indian students, and the education system
                  is very similar to India.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Nepal valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, degrees from NMC-recognized universities in Nepal are
                  valid in India. Students must clear FMGE/NEXT to practice in
                  India.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the total cost of MBBS in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  The total cost usually ranges between ₹45 lakh and ₹65 lakh
                  for the complete course, depending on the university and
                  facilities.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is NEET required for MBBS in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, NEET qualification is mandatory for Indian students
                  pursuing MBBS in Nepal.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the duration of the MBBS course in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  The MBBS course duration in Nepal is generally 5.5 to 6 years,
                  including academic study and 1-year internship.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Are hostel and food facilities available for Indian students
                  in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, most universities provide hostel facilities, Indian
                  mess/canteen services, and nearby Indian food options.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is studying MBBS in Nepal better than private medical colleges
                  in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Many students prefer Nepal due to similar education system,
                  familiar culture, easier admission, and better cost-to-quality
                  ratio compared to many private Indian colleges.
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

export default Nepal;
