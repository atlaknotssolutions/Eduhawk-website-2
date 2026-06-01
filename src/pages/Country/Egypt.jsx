import React, { useState } from "react";
import EgyptFlag from "../../Images/country flag png/Egypt.svg"; // Correct path to Egypt flag
import { FiPlus, FiMinus } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
const Egypt = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // null = none open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data – realistic & updated for 2026-27 context
  const faqData = [
    {
      question: "Is MBBS in Egypt valid for Indian students?",
      answer:
        "Yes, MBBS degrees from NMC/WHO-recognized Egyptian universities are valid in India. Graduates must qualify the FMGE (or upcoming NEXT) exam conducted by the National Medical Commission (NMC) to practice in India.",
    },
    {
      question: "What is the total cost of MBBS in Egypt for Indian students?",
      answer:
        "The total cost (tuition + hostel + food + misc.) usually ranges from ₹30 lakh to ₹45 lakh for the full 6-year course, depending on the university and lifestyle. Annual tuition is typically $5,000–$8,000 (≈₹4–7 lakh). No donation or capitation fees.",
    },
    {
      question: "Is NEET required for MBBS in Egypt?",
      answer:
        "Yes, NEET qualification is compulsory for Indian students as per NMC guidelines to study MBBS abroad and return to practice in India.",
    },
    {
      question: "What is the duration of MBBS in Egypt?",
      answer:
        "The MBBS course duration is 6 years: 5 years of academic study + 1 year of compulsory rotatory internship in affiliated hospitals.",
    },
    {
      question: "What are the eligibility criteria for MBBS in Egypt 2026?",
      answer:
        "• Minimum 17 years old by 31st December of admission year.\n" +
        "• 10+2 with Physics, Chemistry, Biology (PCB) – minimum 50% aggregate (some universities mention 60% for better chances).\n" +
        "• NEET qualified (mandatory for Indians).\n" +
        "• No upper age limit in most cases, but visa rules may apply.",
    },
    {
      question: "Is IELTS/TOEFL required to study MBBS in Egypt?",
      answer:
        "No, IELTS or TOEFL is not required for most universities. The medium of instruction is English, especially for international programs.",
    },
    {
      question:
        "Is hostel accommodation and Indian food available for students?",
      answer:
        "Yes, most universities provide hostel facilities (shared rooms, furnished, with kitchens/laundry). Many hostels/messes offer Indian food options, self-cooking is common, and Indian restaurants/mess facilities exist near campuses in cities like Cairo and Alexandria.",
    },
    {
      question: "When does MBBS admission start in Egypt for 2026-27?",
      answer:
        "Admissions usually open after NEET results (July–September) and continue till January/February 2026–27 for most universities. Apply early through official channels or authorized portals.",
    },
  ];

  return (
    <>
    
      <Helmet>
        <title>MBBS in Egypt for Indian Students | Fees & Top Universities</title>
        <meta
          name="description"
          content="MBBS in Egypt with globally recognized universities. Get details on fees, eligibility and admission process for Indian students."
        />
        <meta
          name="keywords"
          content="mbbs in egypt, egypt mbbs fees, study mbbs egypt, mbbs in egypt for indian students, top medical universities in egypt, mbbs in egypt eligibility, mbbs in egypt admission"
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* ==================== HEADER CAROUSEL ==================== */}
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
              alt="Alexandria University"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
                STUDY MBBS IN EGYPT
              </h2>
            </div>
          </div>
        </div>

        {/* ==================== MAIN CONTENT ==================== */}
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Intro Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div>
              <img
                src={EgyptFlag}
                alt="Egypt flag"
                className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
                Explore MBBS Opportunities in Egypt 2025–2026
              </h1>
            </div>
          </div>

          {/* About Egypt + Image */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
                About Egypt
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Egypt's rich history and prehistoric treasures make it a unique
                location for medical study. Famous landmarks like the Pyramids,
                Sphinx, and Karnak Temple line the Nile. In Cairo, visit the
                Mohammad Ali Mosque and Egyptian Museum. Egyptian medical
                universities attract MBBS students globally, offering a safe
                environment for both male and female students. Admission is
                straightforward with no additional entrance exams beyond NEET
                for Indians. The curriculum is MCQ-based with English-medium
                instruction and strong practical training in hospitals.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                MBBS in Egypt prepares students for respected global medical
                careers. Affordable alternatives include China, Nepal, Germany,
                Philippines, Ukraine, Bangladesh, and Kyrgyzstan, but Egypt
                remains popular for its 6-year duration (exempting preparatory
                courses for internationals) and cosmopolitan society.
              </p>
              {showMoreAbout ? (
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  International students from Malaysia, Nepal, Nigeria, and more
                  choose Egypt for its skilled faculty, visiting professors, and
                  equal opportunities.
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
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Egyptian_Museum_in_Cairo_in_May_2015.JPG"
                alt="Egyptian Museum"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Quick Information + About MBBS */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Quick Information – Study MBBS in Egypt
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
                      <td className="p-4">
                        50% in PCB aggregate (40% reserved)
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="p-4 font-semibold">Course Duration</td>
                      <td className="p-4">6 Years (5+1 internship)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">NEET</td>
                      <td className="p-4">Compulsory for Indians</td>
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

            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
                About MBBS in Egypt
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Studying MBBS in Egypt is straightforward with a safe learning
                environment. No donation/capitation fees. Many universities
                follow a modern/US-influenced curriculum with advanced
                facilities. Skilled faculty ensure excellent teacher-student
                ratios. Graduates are well-prepared for exams like FMGE/NEXT,
                USMLE, PLAB.
              </p>
              {showMoreClimate ? (
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Egypt's climate is warm (desert/temperate), with mild winters
                  and hot summers—comfortable with indoor heating/AC. Students
                  enjoy multicultural vibes, extracurriculars, and volunteer
                  opportunities.
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

          {/* UNIVERSITIES GRID */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
              Top Medical Universities in Egypt
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Cairo University",
                  img: "https://upload.wikimedia.org/wikipedia/commons/5/57/CairoUniv.jpg",
                },
                {
                  name: "Ain Shams University",
                  img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Eng_asu_main_bldng.JPG",
                },
                {
                  name: "Alexandria University",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG",
                },
                {
                  name: "Mansoura University",
                  img: "https://s3.ap-south-1.amazonaws.com/gotouniv/cover_photo/2002/cover_photo_1500X500.jpg",
                },
                {
                  name: "Assiut University",
                  img: "https://oktamam.com/wp-content/uploads/2024/03/assiut-university.png",
                },
                {
                  name: "Helwan University",
                  img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg",
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

          {/* ADVANTAGES + COST */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                Advantages of Studying MBBS in Egypt 2025–2026
              </h2>
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold">
                    1. Affordable High-Quality Education
                  </h5>
                  <p className="text-gray-700">
                    Globally recognized at low cost compared to West/private
                    India.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    2. No Donation / Simple Admission
                  </h5>
                  <p className="text-gray-700">
                    Straightforward process; NEET compulsory for Indians.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    3. English Medium + Modern Curriculum
                  </h5>
                  <p className="text-gray-700">
                    US-influenced with advanced labs/research.
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    4. Strong Clinical Exposure + Global Prep
                  </h5>
                  <p className="text-gray-700">
                    Prepares for FMGE/USMLE/PLAB; part-time work possible in
                    some cases.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Cost of Study MBBS in Egypt
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                MBBS in Egypt is highly affordable for Indian students.
                Government subsidies keep fees low—no donations. Total cost
                (tuition + living) often ₹25–45 lakhs for the full course.
                Annual tuition ~$5,000–$8,000 (~₹4–7 lakhs). Living expenses are
                reasonable, with hostels and Indian food options available.
              </p>
            </div>
          </div>

          {/* FOOD & ACCOMMODATION */}
          <div className="bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
                Food and Accommodation Cost – MBBS in Egypt
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Students who choose to study MBBS in Egypt look for
                  comfortable and affordable living facilities. Egyptian medical
                  universities provide hostel facilities and essential amenities
                  for international students.
                </p>
                <h4 className="text-2xl font-bold mt-8 mb-4">
                  Hostel Facilities
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Most medical universities in Egypt provide hostel facilities
                    for international students.
                  </li>
                  <li>Hostel rooms are usually shared by 2–3 students.</li>
                  <li>
                    Hostels are designed to provide a safe and comfortable
                    living environment.
                  </li>
                  <li>
                    Students can stay in university hostels during their entire
                    MBBS course duration.
                  </li>
                </ul>
                <h4 className="text-2xl font-bold mt-8 mb-4">
                  Room Facilities
                </h4>
                <p>
                  University hostel rooms generally include the following
                  amenities:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fully furnished rooms</li>
                  <li>Comfortable beds, mattress and blankets, bedsheets</li>
                  <li>Study tables and chairs</li>
                  <li>Wardrobes or cupboards</li>
                </ul>
                <h4 className="text-2xl font-bold mt-8 mb-4">
                  Kitchen and Food Facilities
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Most hostels provide common kitchens for students.</li>
                  <li>Students can cook their own meals in the kitchen.</li>
                  <li>
                    Indian students can prepare Indian food, which helps them
                    maintain their regular diet.
                  </li>
                  <li>
                    Many universities provide mess or canteen facilities
                    offering Indian meals.
                  </li>
                  <li>
                    Indian restaurants are available near many university
                    campuses.
                  </li>
                  <li>
                    Students can also enjoy local Egyptian cuisine and
                    international food options.
                  </li>
                </ul>
                <h4 className="text-2xl font-bold mt-8 mb-4">
                  Laundry and Daily Facilities
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Hostels often provide laundry rooms or washing machine
                    facilities.
                  </li>
                  <li>
                    Students can easily manage daily activities such as cooking
                    and washing clothes.
                  </li>
                  <li>
                    These facilities make living in Egypt comfortable and
                    convenient for international students.
                  </li>
                </ul>
                <p className="mt-8">
                  <strong>
                    Approximate monthly living expenses (2025–2026):
                  </strong>
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    Hostel / Accommodation: ₹4,000 – ₹15,000 (often
                    $50–150/month; annual ~$600–$2,000)
                  </li>
                  <li>
                    Food (self-cooking + mess/Indian options): ₹8,000 – ₹15,000
                  </li>
                  <li>Transport + Miscellaneous: ₹3,000 – ₹10,000</li>
                  <li>
                    <strong>Total monthly:</strong> ≈ ₹15,000 – ₹40,000
                  </li>
                </ul>
                <p className="mt-6 italic text-gray-600">
                  Many campuses offer Indian mess facilities and nearby stores
                  for familiar diet at low cost. Costs vary by city (Cairo
                  higher) and lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== FAQ SECTION (without s.no) ==================== */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
                Frequently Asked Questions – MBBS in Egypt 2026-27
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
                      <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
                        {item.question}
                      </h4>

                      <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
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

              <div className="text-center mt-12">
                <p className="text-gray-600 text-lg">
                  Have more questions? Feel free to contact our experts for free
                  counseling!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Enroll Button */}
      </div>
    </>
  );
};

export default Egypt;
