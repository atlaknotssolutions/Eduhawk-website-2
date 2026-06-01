// Service.jsx  (or App.jsx - whatever you named it)
import { useState } from "react";

function Service() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans antialiased">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* ────────────────────────────────────────────────
            TRUSTED BY + ALL-IN-ONE CARDS
        ──────────────────────────────────────────────── */}
        <section className="text-center">
          <h2 className="text-gray-500 font-medium tracking-wide mb-6">
            Trusted by 5,000+ Companies Worldwide
          </h2>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-20 opacity-80">
            {["Google", "Netflix", "Airbnb", "Amazon", "Facebook", "Grab"].map(
              (name) => (
                <div key={name} className="text-gray-400 font-medium">
                  {name}
                </div>
              ),
            )}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4">
            All-In-One <span className="text-[#F48C06]">Cloud Software.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            Eduhawk is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Billing */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative animate-float-card hover:scale-[1.03] transition-transform duration-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center animate-pulse-slow">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9h18M7 3v6M17 3v6M4 15h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM8 19h.01M12 19h.01M16 19h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2F327D] mt-6 mb-4">
                Online Billing, Invoicing, & Contracts
              </h3>
              <p className="text-gray-600">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts.
              </p>
            </div>

            {/* Card 2 - Scheduling */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative animate-float-card hover:scale-[1.03] transition-transform duration-300 delay-150">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center animate-pulse-slow">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2F327D] mt-6 mb-4">
                Easy Scheduling & Attendance Tracking
              </h3>
              <p className="text-gray-600">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance.
              </p>
            </div>

            {/* Card 3 - Customer Tracking */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative animate-float-card hover:scale-[1.03] transition-transform duration-300 delay-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse-slow">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2F327D] mt-6 mb-4">
                Customer Tracking
              </h3>
              <p className="text-gray-600">
                Automate and track emails to individuals or groups. Eduhawk’s
                built-in system helps organize your organization.
              </p>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────
            200+ INTEGRATIONS
        ──────────────────────────────────────────────── */}
        <section className="text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-gray-300"></div>
            <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">
              INTEGRATIONS
            </span>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4">
            200+ educational tools and platform{" "}
            <span className="text-[#F48C06]">integrations</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Eduhawk has every tool your classroom needs and comes pre-integrated
            with more than 200+ tools, student information systems (SIS), and
            education platforms.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center opacity-70">
            {[
              "Google Drive",
              "Dropbox",
              "OneDrive",
              "Google Classroom",
              "Microsoft Teams",
              "Zoom",
            ].map((name) => (
              <div key={name} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-gray-500 text-xs font-medium">
                    {name[0]}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{name}</p>
              </div>
            ))}
          </div>

          <button className="mt-10 px-8 py-3 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-medium hover:bg-[#F48C06] hover:text-white transition">
            See All Integrations
          </button>
        </section>

        {/* ────────────────────────────────────────────────
            TESTIMONIAL SECTION
        ──────────────────────────────────────────────── */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gray-300"></div>
              <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">
                TESTIMONIAL
              </span>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-6">
              What They Say?
            </h2>

            <p className="text-gray-600 mb-6">
              Eduhawk has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className="text-gray-600 mb-6">
              Some of the students and teachers were greatly helped by the
              Eduhawk.
            </p>
            <p className="text-gray-600 mb-8">
              Are you too? Please give your assessment
            </p>

            <button className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#F48C06] text-[#F48C06] rounded-full font-medium hover:bg-[#F48C06] hover:text-white transition">
              Write your assessment
              <span className="text-lg">→</span>
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
              alt="Student"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <p className="text-gray-700 italic mb-4">
                "Thank you so much for your help! It's exactly what I've been
                looking for. You weren't wrong, Eduhawk has been ticking all the
                boxes!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#2F327D]">Gloria Rose</p>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────
            LATEST NEWS & RESOURCES
        ──────────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4">
              Latest News and Resources
            </h2>
            <p className="text-gray-600">
              See the developments that have occurred to Eduhawk in the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc91fdb8f385?w=800"
                alt="Laptop news"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  NEWS
                </span>
                <h3 className="text-xl font-semibold text-[#2F327D] mb-3 line-clamp-2">
                  Class adds $30 million to its balance sheet for a
                  Zoom-friendly edtech solution
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
                <a
                  href="#"
                  className="text-[#F48C06] font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Students with laptop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  PRESS RELEASE
                </span>
                <h3 className="text-xl font-semibold text-[#2F327D] mb-3 line-clamp-2">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Class Technologies Inc., the company that created Class...
                </p>
                <a
                  href="#"
                  className="text-[#F48C06] font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-2c7ed3ab7229?w=800"
                alt="Girl with laptop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  NEWS
                </span>
                <h3 className="text-xl font-semibold text-[#2F327D] mb-3 line-clamp-2">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Zoom was never created to be a consumer product...
                </p>
                <a
                  href="#"
                  className="text-[#F48C06] font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────────────
            TOOLS FOR TEACHERS & LEARNERS
        ──────────────────────────────────────────────── */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F327D]">
              <span className="text-[#F48C06]">Tools</span> For Teachers And
              Learners
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0 animate-float-icon">
                  <svg
                    className="w-7 h-7 text-[#2F327D]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0 animate-float-icon delay-200">
                  <svg
                    className="w-7 h-7 text-[#F48C06]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  TA’s and presenters can be moved to the front of the class.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0 animate-float-icon delay-400">
                  <svg
                    className="w-7 h-7 text-[#2F327D]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4 1.79 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200"
              alt="Teacher explaining"
              className="rounded-3xl shadow-2xl w-full"
            />

            {/* Enhanced floating blobs */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-40 animate-float-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-400 rounded-full blur-2xl opacity-30 animate-float-medium"></div>
            <div className="absolute top-1/3 -right-12 w-24 h-24 bg-purple-400 rounded-full blur-xl opacity-25 animate-float-fast"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#252641] text-white py-16 mt-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6">Eduhawk</h3>
          <p className="text-gray-400 mb-8">Virtual Classroom for Zoom</p>

          <div className="max-w-md mx-auto">
            <p className="mb-4 text-gray-300">Subscribe to our newsletter</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-5 py-3 rounded-full bg-transparent border border-gray-600 focus:outline-none focus:border-[#F48C06]"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ────────────────────────────────────────────────
          ANIMATIONS (keep this at the end)
      ──────────────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes float-card {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }
        .animate-float-card:nth-child(2) {
          animation-delay: 1s;
        }
        .animate-float-card:nth-child(3) {
          animation-delay: 2s;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }
        .animate-float-icon {
          animation: float-icon 5s ease-in-out infinite;
        }
        .animate-float-icon.delay-200 {
          animation-delay: 0.8s;
        }
        .animate-float-icon.delay-400 {
          animation-delay: 1.6s;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 9s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-float-fast {
          animation: float-fast 7s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}

export default Service;
