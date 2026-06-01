// // import React, { useState } from "react";
// // import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
// // import kernal from "../../Images/university-image/kazakistan.jpg";
// // import Russianflag2 from "../../Images/country flag png/Kazakhstan.svg";
// // import MARISTATEUNIVERSITY from "../../Images/Kazakhstan/Asfendiyarov Kazakh National Medical University.jpg";
// // import ORELSTATEUNIVERSITY from "../../Images/Kazakhstan/Karaganda State Medical University.jpg";
// // import ORENBURGSTATEUNIVERSITY from "../../Images/Kazakhstan/Kokshetau State University.jpg";
// // import TVERSTATEMEDICALUNIVERSITY from "../../Images/Kazakhstan/Semey State Medical University.jpg";
// // import AltaiStateMedicalUniversity from "../../Images/Kazakhstan/South-Kazakhstan-Medical-Academy.jpg";
// // import AltaiStateMedicalUniversity2 from "../../Images/Kazakhstan/West Kazakhstan Marat Ospanov State Medical University.jpg";

// // const Kazakhstan = () => {
// //   const [showMoreAbout, setShowMoreAbout] = useState(false);
// //   const [showMoreClimate, setShowMoreClimate] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-sans">
// //       {/* ==================== HEADER CAROUSEL ==================== */}
// //       <div className="relative h-screen overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/f/f6/2.%E0%A6%B6%E0%A6%BE%E0%A6%AA%E0%A6%B2%E0%A6%BE_%E0%A6%9A%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%B0.jpg"
// //             alt="Kremlin Bridge City"
// //             className="w-full h-full object-cover brightness-75"
// //           />
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
// //               STUDY MBBS IN Kazakhstan
// //             </h1>
// //           </div>
// //         </div>

// //         {/* You can duplicate more slides like this or use carousel library */}
// //       </div>

// //       {/* ==================== MAIN CONTENT ==================== */}
// //       <div className="container mx-auto px-4 py-12 max-w-7xl">
// //         {/* Intro Section */}
// //         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
// //           <div>
// //             <img
// //               src={Russianflag2}
// //               alt="Russia flag"
// //               className="w-32 md:w-40  rounded shadow-lg"
// //             />
// //           </div>
// //           <div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
// //               Explore MBBS Opportunities in Kazakhstan 2026–2027
// //             </h2>
// //           </div>
// //         </div>

// //         {/* About Russia + Image */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
// //               About Kyrgyzstan
// //             </h2>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //               Studying MBBS in Kyrgyzstan is gaining popularity among Indian
// //               students due to its well-equipped medical colleges, experienced
// //               faculty, and low fees. The course generally takes five to six
// //               years to complete and is conducted in the English language,
// //               ensuring international standards of education. In recent years,
// //               Kyrgyzstan has emerged as a popular destination for Indian MBBS
// //               students who want to pursue the course from abroad. The country is
// //               witnessing a steady growth rate of 21.54% every year for Indian
// //               MBBS students.
// //             </p>

// //             <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //               Compared to other countries, the MBBS course in Kyrgyzstan is a
// //               more affordable option for Indian students. The admission criteria
// //               for MBBS courses in Kyrgyzstan are simple. The student needs a
// //               minimum of 50% marks in physics, chemistry, and biology in the
// //               final year of schooling. The best part is that the medium of
// //               instruction for MBBS courses in Kyrgyzstan is English, ensuring
// //               that international students are also able to pursue the course
// //               from these universities. Students from all over the world choose
// //               Kyrgyzstan as the destination for pursuing MBBS courses.
// //             </p>

// //             {showMoreAbout ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                 The extensive training and services provided in Kyrgyzstan are a great contribution to the development of the student's career, ensuring a fruitful and impactful career for the student.
// // While Kyrgyzstan is a popular destination for MBBS courses, there are some more countries like Kyrgyzstan, China, Nepal, Germany, Philippines, Ukraine, and Kyrgyzstan that also offer affordable courses for MBBS students.
// //               </p>
// //             ) : null}

// //             <button
// //               onClick={() => setShowMoreAbout(!showMoreAbout)}
// //               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
// //             >
// //               {showMoreAbout ? "Show Less" : "Read More"}
// //             </button>
// //           </div>

// //           <div>
// //             <img
// //               src={kernal}
// //               alt="Kremlin"
// //               className="rounded-xl shadow-2xl w-full h-auto object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* Quick Information + About MBBS */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           {/* Left – Quick Info Table */}
// //           <div>
// //             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
// //               Quick Information – Study MBBS in Russia
// //             </h3>

// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border border-gray-300 text-left">
// //                 <tbody>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">Recognition</td>
// //                     <td className="p-4">NMC & WHO approved</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">Eligibility</td>
// //                     <td className="p-4">50% in PCB aggregate</td>
// //                   </tr>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">Course Duration</td>
// //                     <td className="p-4">6 Years</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">NEET</td>
// //                     <td className="p-4">Compulsory</td>
// //                   </tr>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
// //                     <td className="p-4">Not Required</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">Medium of Teaching</td>
// //                     <td className="p-4">English</td>
// //                   </tr>

// //                   <tr>
// //                     <td className="p-4 font-semibold">
// //                       Universities Recognition
// //                     </td>
// //                     <td className="p-4">NMC & WHO-approved</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>

// //           {/* Right – About MBBS */}
// //           <div>
// //             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
// //               About MBBS in Kazakhstan
// //             </h3>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //             India is one of the top choices for Indian students interested in studying MBBS in Kyrgyzstan due to the high level of security and safety provided by the government.

// //             </p>

// //             {showMoreClimate ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                The duration of the program is five years, and the cost of education is relatively lower in comparison to many other countries.
// // Considering the alternatives, the cost of education in Kyrgyzstan is relatively lower in comparison to many other countries, making it a better option for Indian students to study MBBS in Kyrgyzstan.
// // The cost of education in Kyrgyzstan is moderate, and the standard of MBBS education in Kyrgyzstan is world-class.
// // This makes Kyrgyzstan a better option for students in Asian countries.
// // The medium of instruction in the universities in Kyrgyzstan is English, which makes the language barrier easier to cross.
// // Moreover, direct admission to top-class universities in Kyrgyzstan is available without the need to sit in the entrance exams and take the IELTS and TOEFL tests.
// // Considering the climatic conditions in Kyrgyzstan and India, the conditions in these two countries differ greatly.
// // Kyrgyzstan is located in the temperate zone, which makes the climate relatively moderate and suitable for the residents.
// // The country comprises a variety of different climatic zones, and the average temperature in the winter is around -20 degrees Celsius, whereas in the autumn and summer seasons, the temperature is as high as 25 degrees Celsius.
// // The residential areas in Kyrgyzstan are also equipped with heating systems, which makes the environment comfortable during the winter.

// //               </p>
// //             ) : null}

// //             <button
// //               onClick={() => setShowMoreClimate(!showMoreClimate)}
// //               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
// //             >
// //               {showMoreClimate ? "Show Less" : "Read More"}
// //             </button>
// //           </div>
// //         </div>

// //         {/* ==================== UNIVERSITIES GRID ==================== */}
// //         <div className="mb-20">
// //           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
// //             Top Medical Universities in Russia
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 name: "Asfendiyarov Kazakh Medical College",
// //                 img: MARISTATEUNIVERSITY,
// //               },
// //               {
// //                 name: "Karaganda State Medical University",
// //                 img: ORELSTATEUNIVERSITY,
// //               },
// //               {
// //                 name: "Kokshetau State University",
// //                 img: ORENBURGSTATEUNIVERSITY,
// //               },
// //               {
// //                 name: "Semey State Medical University",
// //                 img: TVERSTATEMEDICALUNIVERSITY,
// //               },
// //               {
// //                 name: "South-Kazakhstan-Medical-Academy",
// //                 img: AltaiStateMedicalUniversity,
// //               },
// //               {
// //                 name: "West Kazakhstan Marat Ospanov State Medical University",
// //                 img: AltaiStateMedicalUniversity2,
// //               },
// //             ].map((uni, i) => (
// //               <div
// //                 key={i}
// //                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
// //               >
// //                 <img
// //                   src={uni.img}
// //                   alt={uni.name}
// //                   className="w-full h-64 object-cover"
// //                 />
// //                 <div className="p-6 text-center">
// //                   <h4 className="text-xl font-bold text-blue-900">
// //                     {uni.name}
// //                   </h4>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ==================== ADVANTAGES + COST ==================== */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //               Advantages of Studying MBBS in Russia 2025–2026
// //             </h2>

// //             <div className="space-y-6">
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   1. High-Quality Education
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   Globally recognized universities with strong academic
// //                   standards.
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   2. Affordable Tuition Fees
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   Significantly lower than many Western countries.
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   3. No Additional Entrance Exams
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   (NEET required for Indian students only)
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   4. English-Medium Programs
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   No language barrier for most international students.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <div>
// //             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
// //               Cost of Study MBBS in Russia
// //             </h2>
// //             <p className="text-lg text-gray-700 leading-relaxed">
// //               The cost of the <strong> MBBS course in Russia</strong> is very
// //               low for Indian students who want to pursue their{" "}
// //               <strong>MBBS</strong> course in Russia. Russia is a very demanding
// //               country for Indian students who want to pursue their MBBS course.
// //               The government of Russia has funded the fee structure for the MBBS
// //               course. Studying MBBS in Russia is an easy task for Indian
// //               students compared to other countries. Studying MBBS in Russia is
// //               very cheap. The universities in Russia provide a smooth platform
// //               for <strong>international students</strong> so that they don't
// //               need to pay the high tuition fees. Apart from this, there is no
// //               need to pay any donations.
// //             </p>
// //           </div>
// //         </div>

// //         {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
// //       </div>

// //       {/* Floating Enroll Button */}
// //       <button
// //         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
// //         onClick={() => alert("Open Admission Modal / Redirect to form")}
// //       >
// //         <span className="font-bold text-lg">ENROLL NOW!</span>
// //       </button>

// //       {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
// //       <div className="bg-gradient-to-b from-gray-50 to-white py-16">
// //         <div className="container mx-auto px-4 max-w-6xl">
// //           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //             Food and Accommodation Cost – MBBS in Russia
// //           </h2>

// //           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
// //             <p>
// //               Most Russian medical universities provide comfortable hostel
// //               accommodation specially designed for international students. Rooms
// //               are usually shared (2–3 students per room) and come fully
// //               furnished with:
// //             </p>
// //             <ul className="list-disc pl-6 mt-4 space-y-2">
// //               <li>Beds, mattresses, bedsheets, blankets, pillows</li>
// //               <li>Study tables, chairs, wardrobes/cupboards</li>
// //               <li>Central heating (very important in Russian winters)</li>
// //             </ul>

// //             <p className="mt-6">Hostels typically include:</p>
// //             <ul className="list-disc pl-6 mt-4 space-y-2">
// //               <li>
// //                 Common kitchen where students can cook their own food (very
// //                 popular among Indian students to prepare Indian meals)
// //               </li>
// //               <li>Common washing machines / laundry rooms</li>
// //               <li>
// //                 Indian mess / canteen facilities in many universities (or
// //                 nearby)
// //               </li>
// //               <li>
// //                 Indian restaurants and grocery stores often within walking
// //                 distance
// //               </li>
// //             </ul>

// //             <p className="mt-6">
// //               <strong>Approximate monthly living expenses (2025–2026):</strong>
// //             </p>
// //             <ul className="list-disc pl-6 mt-4 space-y-2">
// //               <li>Hostel / Accommodation: ₹8,000 – ₹18,000</li>
// //               <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
// //               <li>Transport + Miscellaneous: ₹3,000 – ₹7,000</li>
// //               <li>
// //                 <strong>Total monthly:</strong> ≈ ₹20,000 – ₹40,000
// //               </li>
// //             </ul>

// //             <p className="mt-6 italic text-gray-600">
// //               Many universities also offer Indian food in their mess/canteen,
// //               helping students maintain a familiar diet without much extra cost.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ==================== ADMISSION PROCESS ==================== */}
// //       <div className="py-16 bg-white">
// //         <div className="container mx-auto px-4 max-w-6xl">
// //           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //             Admission Process for MBBS in Russia 2025–2026
// //           </h2>

// //           <div className="max-w-4xl mx-auto">
// //             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
// //               The admission process for{" "}
// //               <strong> MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
// //               courses in Russia varies slightly among different universities,
// //               but the general process is as follows:
// //             </p>

// //             <div className="space-y-10">
// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   1. Research and Select a University:
// //                 </h4>
// //                 <p className="text-gray-700">
// //                   Research the <strong>Russian universities</strong> that offer
// //                   MBBS courses. Some of the best universities for MBBS courses
// //                   in Russia are
// //                   <strong>
// //                     {" "}
// //                     Moscow State Medical University, Saint Petersburg State
// //                     Medical University, Kazan Federal University, etc.
// //                   </strong>
// //                 </p>
// //                 <p className="mt-2 text-gray-600">
// //                   Check: NMC/WHO recognition, English medium availability,
// //                   tuition fees, hostel quality.
// //                 </p>
// //               </div>

// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   2. Check Eligibility
// //                 </h4>
// //                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
// //                   <li>Completed 10+2 with Physics, Chemistry, Biology</li>
// //                   <li>
// //                     Minimum 50% aggregate in PCB (40% for reserved categories)
// //                   </li>
// //                   <li>NEET qualified (mandatory for Indian students)</li>
// //                   <li>Age: 17 years completed by 31st Dec of admission year</li>
// //                 </ul>
// //               </div>

// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   3. Apply Online
// //                 </h4>
// //                 <p className="text-gray-700">
// //                   Fill university application form → Submit scanned documents →
// //                   Receive admission/invitation letter (usually within 2–4
// //                   weeks).
// //                 </p>
// //               </div>

// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   4. Visa & Travel
// //                 </h4>
// //                 <p className="text-gray-700">
// //                   Use invitation letter to apply for student visa at Russian
// //                   Embassy/Consulate → Book tickets → Arrive in Russia → Complete
// //                   university registration & medical check-up.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
// //       <div className="py-16 bg-gradient-to-b from-white to-gray-50">
// //         <div className="container mx-auto px-4 max-w-7xl">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             {/* Left - Required Documents */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //                 Required Documents for MBBS in Russia 2025–2026
// //               </h2>

// //               <div className="space-y-6">
// //                 <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                   <h5 className="text-lg font-semibold text-blue-800">
// //                     Educational Documents
// //                   </h5>
// //                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
// //                     <li>10th & 12th marksheets + certificates</li>
// //                     <li>NEET scorecard & admit card</li>
// //                     <li>Passport (valid for minimum 18–24 months)</li>
// //                   </ul>
// //                 </div>

// //                 <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                   <h5 className="text-lg font-semibold text-blue-800">
// //                     Other Important Documents
// //                   </h5>
// //                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
// //                     <li>Passport size photos (white background)</li>
// //                     <li>HIV & medical fitness certificate</li>
// //                     <li>
// //                       Invitation letter from university (issued after admission)
// //                     </li>
// //                     <li>Visa application form & fee receipt</li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right - Eligibility + Scholarships */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
// //                 Eligibility Criteria & Scholarships
// //               </h2>

// //               <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
// //                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
// //                   Basic Eligibility
// //                 </h4>
// //                 <ul className="list-decimal pl-5 space-y-2 text-gray-700">
// //                   <li>Age 17+ by 31st Dec of admission year</li>
// //                   <li>50%+ in PCB in 12th (40% for SC/ST/OBC)</li>
// //                   <li>NEET qualified (mandatory for Indians)</li>
// //                 </ul>
// //               </div>

// //               <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
// //                   Popular Scholarships
// //                 </h4>
// //                 <ul className="space-y-4">
// //                   <li>
// //                     <strong>
// //                       Russian Government Scholarship (Open Doors / Quota)
// //                     </strong>
// //                     <br />
// //                     <span className="text-gray-600 text-sm">
// //                       Covers tuition + sometimes hostel. Very competitive —
// //                       apply via education-in-russia.com
// //                     </span>
// //                   </li>
// //                   <li>
// //                     <strong>University-specific Merit Scholarships</strong>
// //                     <br />
// //                     <span className="text-gray-600 text-sm">
// //                       Offered by many universities for good NEET/academic scores
// //                     </span>
// //                   </li>
// //                   <li>
// //                     <strong>Other options</strong>
// //                     <br />
// //                     <span className="text-gray-600 text-sm">
// //                       Education Future, Inlaks, etc. (limited for MBBS)
// //                     </span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ==================== COMPARISON TABLE ==================== */}
// //       <div className="py-16 bg-white">
// //         <div className="container mx-auto px-4 max-w-5xl">
// //           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
// //             MBBS in Russia vs MBBS in India – Quick Comparison (2025–2026)
// //           </h2>

// //           <div className="overflow-x-auto">
// //             <table className="min-w-full border-collapse border border-gray-300 text-left">
// //               <thead>
// //                 <tr className="bg-blue-900 text-white">
// //                   <th className="p-4 border border-gray-300 text-center font-semibold">
// //                     Criteria
// //                   </th>
// //                   <th className="p-4 border border-gray-300 text-center font-semibold">
// //                     MBBS in Russia
// //                   </th>
// //                   <th className="p-4 border border-gray-300 text-center font-semibold">
// //                     MBBS in India
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="text-gray-700">
// //                 <tr className="bg-gray-50">
// //                   <td className="p-4 border font-medium">
// //                     Tuition Fees (per year)
// //                   </td>
// //                   <td className="p-4 border">₹2 – 5 Lakhs</td>
// //                   <td className="p-4 border">
// //                     Govt: ₹40k – ₹2 Lakhs
// //                     <br />
// //                     Private: ₹10 – 25+ Lakhs
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td className="p-4 border font-medium">
// //                     Donation / Capitation
// //                   </td>
// //                   <td className="p-4 border text-green-700">No Donation</td>
// //                   <td className="p-4 border text-red-700">
// //                     Often ₹30–80 Lakhs in private colleges
// //                   </td>
// //                 </tr>
// //                 <tr className="bg-gray-50">
// //                   <td className="p-4 border font-medium">Course Duration</td>
// //                   <td className="p-4 border">6 years (including internship)</td>
// //                   <td className="p-4 border">5.5 years + 1 year internship</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="p-4 border font-medium">Class Strength</td>
// //                   <td className="p-4 border">20–40 students</td>
// //                   <td className="p-4 border">
// //                     100–150+ students (especially private)
// //                   </td>
// //                 </tr>
// //                 <tr className="bg-gray-50">
// //                   <td className="p-4 border font-medium">Global Recognition</td>
// //                   <td className="p-4 border">
// //                     NMC, WHO, WFME approved universities
// //                   </td>
// //                   <td className="p-4 border">
// //                     NMC approved, but private colleges vary
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td className="p-4 border font-medium">
// //                     Medium of Instruction
// //                   </td>
// //                   <td className="p-4 border">English</td>
// //                   <td className="p-4 border">English</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Kazakhstan;

// import React, { useState } from "react";
// import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
// import kernal from "../../Images/university-image/kazakistan.jpg";
// import Russianflag2 from "../../Images/country flag png/Kazakhstan.svg";
// import MARISTATEUNIVERSITY from "../../Images/Kazakhstan/Asfendiyarov Kazakh National Medical University.jpg";
// import ORELSTATEUNIVERSITY from "../../Images/Kazakhstan/Karaganda State Medical University.jpg";
// import ORENBURGSTATEUNIVERSITY from "../../Images/Kazakhstan/Kokshetau State University.jpg";
// import TVERSTATEMEDICALUNIVERSITY from "../../Images/Kazakhstan/Semey State Medical University.jpg";
// import AltaiStateMedicalUniversity from "../../Images/Kazakhstan/South-Kazakhstan-Medical-Academy.jpg";
// import AltaiStateMedicalUniversity2 from "../../Images/Kazakhstan/West Kazakhstan Marat Ospanov State Medical University.jpg";

// const Kazakhstan = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={RussiaFlag}
//             alt="Kazakhstan Landscape"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN KAZAKHSTAN
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {/* Intro Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//           <div>
//             <img
//               src={Russianflag2}
//               alt="Kazakhstan flag"
//               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in Kazakhstan 2026–2027
//             </h2>
//           </div>
//         </div>

//         {/* About Kazakhstan + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About Kazakhstan
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Kazakhstan, officially known as the Republic of Kazakhstan, is a transcontinental country that lies mainly in Central Asia, with a small part extending into Europe west of the Ural River.
//               The country covers a vast area of 2,724,900 square kilometres and is the world’s largest landlocked country and the ninth largest overall.
//             </p>

//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               It shares borders with Russia in the north, China in the east, Kyrgyzstan, Uzbekistan, and Turkmenistan in the south, and has a long coastline along the Caspian Sea.
//               With a population of about 18.8 million, Kazakhstan has one of the lowest population densities in the world.
//               The capital is Astana (formerly Nur-Sultan), while Almaty remains the largest city.
//             </p>

//             {showMoreAbout ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 Kazakhstan offers modern medical education at affordable costs, making it a popular destination for Indian students pursuing MBBS abroad.
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
//               src={kernal}
//               alt="Kazakhstan"
//               className="rounded-xl shadow-2xl w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick Information + About MBBS */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {/* Left – Quick Info Table */}
//           <div>
//             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
//               Quick Information – Study MBBS in Kazakhstan
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
//                     <td className="p-4">50% in PCB + NEET Qualified</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Course Duration</td>
//                     <td className="p-4">6 Years (5 + 1 internship)</td>
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
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Approx. Annual Fee</td>
//                     <td className="p-4">₹2 – 5 Lakhs / year</td>
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
//               Kazakhstan is a great option for Indian students seeking quality medical education at affordable costs.
//               Universities provide excellent practical training, experienced faculty, and affiliation with many hospitals.
//             </p>

//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 Most programs are taught in English. Admission is straightforward with no additional entrance exams (only NEET for Indian students).
//                 Kazakhstan has a continental climate with very cold winters (down to -20°C or lower) and warm summers (up to +30°C).
//                 Universities provide heated hostels, making winter comfortable for international students.
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
//             Top Medical Universities in Kazakhstan
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Asfendiyarov Kazakh National Medical University",
//                 img: MARISTATEUNIVERSITY,
//               },
//               {
//                 name: "Karaganda State Medical University",
//                 img: ORELSTATEUNIVERSITY,
//               },
//               {
//                 name: "Kokshetau State University",
//                 img: ORENBURGSTATEUNIVERSITY,
//               },
//               {
//                 name: "Semey State Medical University",
//                 img: TVERSTATEMEDICALUNIVERSITY,
//               },
//               {
//                 name: "South Kazakhstan Medical Academy",
//                 img: AltaiStateMedicalUniversity,
//               },
//               {
//                 name: "West Kazakhstan Marat Ospanov State Medical University",
//                 img: AltaiStateMedicalUniversity2,
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

//         {/* ==================== ADVANTAGES ==================== */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//               Advantages of Studying MBBS in Kazakhstan 2026–2027
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <h5 className="text-xl font-semibold">1. Affordable Education</h5>
//                 <p className="text-gray-700">
//                   Reasonable tuition fees (₹2–5 Lakhs/year), no heavy donations or capitation fees.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">2. English Medium</h5>
//                 <p className="text-gray-700">
//                   No language barrier – fully English medium programs.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">3. Quality Education & Facilities</h5>
//                 <p className="text-gray-700">
//                   Modern labs, good hospitals for clinical training, NMC & WHO recognized.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">4. Simple Admission</h5>
//                 <p className="text-gray-700">
//                   Straightforward process – only NEET required for Indian students.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//               Cost of Study MBBS in Kazakhstan
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               MBBS in Kazakhstan is one of the most budget-friendly options for Indian students.
//               Annual tuition fees typically range from ₹2 Lakhs to ₹5 Lakhs.
//               Total package (including hostel & food) is usually between ₹18–28 Lakhs for the full 6-year course.
//               No donation or capitation fee is required.
//             </p>
//           </div>
//         </div>

//         {/* ==================== FOOD & ACCOMMODATION ==================== */}
//         <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//               Food and Accommodation Cost – MBBS in Kazakhstan
//             </h2>

//             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//               <p>
//                 Most medical universities in Kazakhstan provide safe, comfortable on-campus hostels for international students.
//               </p>
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 <li>Shared rooms (usually 2–4 students)</li>
//                 <li>Fully furnished: beds, mattresses, blankets, study tables, wardrobes</li>
//                 <li>Common kitchens – popular for cooking Indian food</li>
//                 <li>Indian mess / canteen facilities available in many universities or nearby</li>
//                 <li>Indian grocery stores and restaurants often within walking distance</li>
//               </ul>

//               <p className="mt-6">
//                 <strong>Approximate monthly living expenses (2026–2027):</strong>
//               </p>
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 <li>Hostel: ₹8,000 – ₹15,000</li>
//                 <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
//                 <li>Miscellaneous: ₹3,000 – ₹7,000</li>
//                 <li><strong>Total monthly:</strong> ≈ ₹20,000 – ₹35,000</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* ==================== ADMISSION PROCESS ==================== */}
//         <div className="py-16 bg-white">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//               Admission Process for MBBS in Kazakhstan 2026–2027
//             </h2>

//             <div className="max-w-4xl mx-auto space-y-8">
//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900">1. Application</h4>
//                 <p>Fill university online application form + submit documents</p>
//               </div>
//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900">2. Admission Letter</h4>
//                 <p>Receive official admission / invitation letter</p>
//               </div>
//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900">3. Visa</h4>
//                 <p>Apply for student visa at Kazakhstan Embassy (Delhi) with invitation letter</p>
//               </div>
//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900">4. Travel & Registration</h4>
//                 <p>Travel to Kazakhstan → University registration → Medical check-up → Start course</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ==================== FAQs ==================== */}
//         <div className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4 max-w-5xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//               FAQs – MBBS in Kazakhstan 2026–2027
//             </h2>

//             <div className="space-y-6">
//               <details className="bg-white p-6 rounded-xl shadow-sm border">
//                 <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
//                   Why study MBBS in Kazakhstan for Indian students?
//                 </summary>
//                 <p className="mt-4 text-gray-700">
//                   Affordable fees (₹18–28 lakhs total), English medium, NMC/WHO recognized universities, good clinical exposure, safe environment and low cost of living.
//                 </p>
//               </details>

//               <details className="bg-white p-6 rounded-xl shadow-sm border">
//                 <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
//                   Is MBBS in Kazakhstan valid in India?
//                 </summary>
//                 <p className="mt-4 text-gray-700">
//                   Yes – if the university is NMC approved. Students must pass FMGE / NEXT to practice in India.
//                 </p>
//               </details>

//               <details className="bg-white p-6 rounded-xl shadow-sm border">
//                 <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
//                   What is the total cost of MBBS in Kazakhstan?
//                 </summary>
//                 <p className="mt-4 text-gray-700">
//                   Approximately ₹18 lakh to ₹28 lakh for the full 6-year course (tuition + hostel + living expenses).
//                 </p>
//               </details>

//               <details className="bg-white p-6 rounded-xl shadow-sm border">
//                 <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
//                   What is the duration of MBBS in Kazakhstan?
//                 </summary>
//                 <p className="mt-4 text-gray-700">
//                   6 years (5 years academic study + 1 year compulsory internship).
//                 </p>
//               </details>

//               <details className="bg-white p-6 rounded-xl shadow-sm border">
//                 <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
//                   Is NEET required for MBBS in Kazakhstan?
//                 </summary>
//                 <p className="mt-4 text-gray-700">
//                   Yes – NEET qualification is mandatory for Indian students.
//                 </p>
//               </details>
//             </div>
//           </div>
//         </div>

//         {/* Floating Enroll Button */}
//         <button
//           className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
//           onClick={() => alert("Open Admission Modal / Redirect to form")}
//         >
//           <span className="font-bold text-lg">ENROLL NOW!</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Kazakhstan;

import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';

import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
import kernal from "../../Images/university-image/kazakistan.jpg";
import Russianflag2 from "../../Images/country flag png/Kazakhstan.svg";
import MARISTATEUNIVERSITY from "../../Images/Kazakhstan/Asfendiyarov Kazakh National Medical University.jpg";
import ORELSTATEUNIVERSITY from "../../Images/Kazakhstan/Karaganda State Medical University.jpg";
import ORENBURGSTATEUNIVERSITY from "../../Images/Kazakhstan/Kokshetau State University.jpg";
import TVERSTATEMEDICALUNIVERSITY from "../../Images/Kazakhstan/Semey State Medical University.jpg";
import AltaiStateMedicalUniversity from "../../Images/Kazakhstan/South-Kazakhstan-Medical-Academy.jpg";
import AltaiStateMedicalUniversity2 from "../../Images/Kazakhstan/West Kazakhstan Marat Ospanov State Medical University.jpg";
import { useNavigate } from "react-router-dom";


const Kazakhstan = () => {
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
            src="https://www.ruseducation.in/wp-content/uploads/2022/01/Kazakh-National-Medical-University.webp"
            alt="Kazakhstan Landscape"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN KAZAKHSTAN
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
              alt="Kazakhstan flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Kazakhstan 2026–2027
            </h2>
          </div>
        </div>

        {/* About Kazakhstan + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Kazakhstan
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Kazakhstan has become one of the most preferred destinations for Indian 
              students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "}  
              because of its affordable tuition 
              fees, globally recognized universities, and modern medical education system. 
              Officially known as the Republic of Kazakhstan, the country is located mainly 
              in Central Asia and is known for its advanced infrastructure, safe environment, 
              and quality education. Many students choose to {" "}<strong>study MBBS in Kazakhstan</strong>{" "} due to 
              the affordable living costs and internationally accepted medical degrees.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
               One of the biggest advantages of {" "}<strong>MBBS admission in Kazakhstan</strong>{" "} is the 
                availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs compared to 
                many other countries. The country is home to several top medical 
                universities in Kazakhstan that provide advanced laboratories, 
                experienced faculty, and practical clinical exposure. Students 
                studying in
                {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Kazakhstan
               </a>{" "}
                receive strong 
                theoretical and hands-on medical training that helps them become 
                skilled healthcare professionals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Kazakhstan is also known for having some of the {" "}<strong>top government medical colleges 
                in Kazakhstan</strong>{" "} along with reputed private institutions. 
                The availability of {" "}<strong>top private and government college 
                in Kazakhstan</strong>{" "} options gives students flexibility according 
                to their budget and career goals. Apart from Kazakhstan, 
                other popular {" "}<strong>foreign countries for MBBS abroad</strong>{" "} include 
                Kyrgyzstan, Nepal, and Georgia, making Kazakhstan one of the {" "}<strong>best 
                countries for MBBS abroad</strong>{" "} and a top choice for Indian students.
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
              alt="Kazakhstan"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Kazakhstan
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
                    <td className="p-4">50% in PCB + NEET Qualified</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (5 + 1 internship)</td>
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
                    <td className="p-4 font-semibold">Approx. Annual Fee</td>
                    <td className="p-4">₹2 – 5 Lakhs / year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Kazakhstan
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Kazakhstan, officially known as the Republic of Kazakhstan, is a
              transcontinental country that lies mainly in Central Asia, with a
              small part extending into Europe west of the Ural River. The
              country covers a vast area of 2,724,900 square kilometres and is
              the world’s largest landlocked country and the ninth largest
              overall.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                It shares borders with Russia in the north, China in the east,
                Kyrgyzstan, Uzbekistan, and Turkmenistan in the south, and has a
                long coastline along the Caspian Sea. With a population of about
                18.8 million, Kazakhstan has one of the lowest population
                densities in the world. The capital is Astana (formerly
                Nur-Sultan), while Almaty remains the largest city.

                Kazakhstan offers modern medical education at affordable costs,
                making it a popular destination for Indian students pursuing
                MBBS abroad.
                
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
            Top Medical Universities in Kazakhstan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Asfendiyarov Kazakh National Medical University",
                img: MARISTATEUNIVERSITY,
              },
              {
                name: "Karaganda State Medical University",
                img: ORELSTATEUNIVERSITY,
              },
              {
                name: "Kokshetau State University",
                img: ORENBURGSTATEUNIVERSITY,
              },
              {
                name: "Semey State Medical University",
                img: TVERSTATEMEDICALUNIVERSITY,
              },
              {
                name: "South Kazakhstan Medical Academy",
                img: AltaiStateMedicalUniversity,
              },
              {
                name: "West Kazakhstan Marat Ospanov State Medical University",
                img: AltaiStateMedicalUniversity2,
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
              Advantages of Studying MBBS in Kazakhstan 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. Affordable Education
                </h5>
                <p className="text-gray-700">
                  Reasonable tuition fees (₹2–5 Lakhs/year), no heavy donations
                  or capitation fees.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">2. English Medium</h5>
                <p className="text-gray-700">
                  No language barrier – fully English medium programs.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Quality Education & Facilities
                </h5>
                <p className="text-gray-700">
                  Modern labs, good hospitals for clinical training, NMC & WHO
                  recognized.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">4. Simple Admission</h5>
                <p className="text-gray-700">
                  Straightforward process – only NEET required for Indian
                  students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Kazakhstan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MBBS in Kazakhstan is one of the most budget-friendly options for
              Indian students. Annual tuition fees typically range from ₹2 Lakhs
              to ₹5 Lakhs. Total package (including hostel & food) is usually
              between ₹18–28 Lakhs for the full 6-year course. No donation or
              capitation fee is required.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION ==================== */}
        {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Kazakhstan
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Medical universities in Kazakhstan offer comfortable, secure,
                and budget-friendly accommodation options specially designed for
                international students, including a large number of Indian
                students.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  On-campus hostels available in most top medical universities
                </li>
                <li>
                  Multiple hostel buildings (usually 6–7) to accommodate local
                  and international students
                </li>
                <li>Safe, well-maintained environment with 24/7 security</li>
                <li>
                  Students can stay in university hostels for the entire 6-year
                  MBBS duration
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Room Facilities
              </h4>
              <p>
                Rooms are typically shared (2–4 students per room) and come
                fully furnished with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Comfortable beds with mattresses, blankets, and bed sheets
                </li>
                <li>Study tables and chairs</li>
                <li>Wardrobes / cupboards for storage</li>
                <li>
                  Central heating system (essential for cold Kazakh winters)
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Common shared kitchens in hostels – very popular among Indian
                  students for preparing home-cooked Indian meals
                </li>
                <li>
                  Many universities offer Indian mess / canteen facilities (veg
                  & non-veg options)
                </li>
                <li>
                  Indian restaurants, grocery stores, and spice shops usually
                  available nearby (walking distance in most cities)
                </li>
                <li>
                  Students can also enjoy authentic Kazakh cuisine and
                  international food options
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Average Living Cost (2026–2027)
              </h4>
              <p>
                The cost of living in Kazakhstan is quite affordable for
                international students, especially compared to Western countries
                or private medical colleges in India.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Hostel / Accommodation:</strong> ₹8,000 – ₹18,000 per
                  month (or ₹80,000 – ₹2,00,000 per year)
                </li>
                <li>
                  <strong>Food (self-cooking + mess / canteen):</strong> ₹8,000
                  – ₹15,000 per month
                </li>
                <li>
                  <strong>Transport, internet, personal expenses:</strong>{" "}
                  ₹3,000 – ₹8,000 per month
                </li>
                <li>
                  <strong>Total monthly living cost:</strong> ≈ ₹20,000 –
                  ₹40,000 (depending on lifestyle and city – lower in smaller
                  cities like Semey or Karaganda)
                </li>
              </ul>

              <p className="mt-6 italic text-gray-600">
                Many Indian students manage comfortably within ₹25,000–₹30,000
                per month by cooking at home and using university mess
                facilities.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Kazakhstan 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">
                  1. Application
                </h4>
                <p>
                  Fill university online application form + submit documents
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">
                  2. Admission Letter
                </h4>
                <p>Receive official admission / invitation letter</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">3. Visa</h4>
                <p>
                  Apply for student visa at Kazakhstan Embassy (Delhi) with
                  invitation letter
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900">
                  4. Travel & Registration
                </h4>
                <p>
                  Travel to Kazakhstan → University registration → Medical
                  check-up → Start course
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FAQs (same design as Uzbekistan) ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              FAQs for MBBS in Kazakhstan 2026–2027
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Why study MBBS in Kazakhstan for Indian students?
                </summary>
                <p className="mt-4 text-gray-700">
                  Kazakhstan is becoming a popular destination for Indian
                  students because of affordable tuition fees, modern medical
                  universities, and English-medium MBBS programs. The country
                  also offers good clinical exposure and low living costs
                  compared to private medical colleges in India.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Kazakhstan valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, MBBS degrees from recognized universities in Kazakhstan
                  are valid in India if the university is approved by the
                  National Medical Commission. After completing the course,
                  students must clear the Foreign Medical Graduate Examination
                  (FMGE) or the upcoming National Exit Test (NEXT) to practice
                  in India.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the total cost of MBBS in Kazakhstan for Indian
                  students?
                </summary>
                <p className="mt-4 text-gray-700">
                  The total cost of MBBS in Kazakhstan usually ranges between
                  ₹18 lakh to ₹28 lakh for the entire course, depending on the
                  university, hostel, and other living expenses.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the duration of the MBBS course in Kazakhstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  The MBBS program in Kazakhstan is generally 5 years of
                  academic study plus 1 year internship, making the total
                  duration 6 years.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is NEET required for MBBS admission in Kazakhstan?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, Indian students must qualify the National Eligibility cum
                  Entrance Test (NEET) to study MBBS in Kazakhstan and to be
                  eligible to practice medicine in India after completing the
                  degree.
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

export default Kazakhstan;
