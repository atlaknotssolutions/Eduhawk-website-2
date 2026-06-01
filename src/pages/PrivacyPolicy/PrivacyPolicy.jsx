// import React from 'react';

// const PrivacyPolicy = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-8 text-center">
//           <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
//           <p className="text-blue-100 text-lg">
//             Last Updated: April 2026
//           </p>
//         </div>

//         <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          
//           {/* Introduction */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">General</h2>
//             <p className="mb-4">
//               At <span className="font-semibold text-indigo-600">EduHawk Worldwide</span>, we value your privacy and are committed to protecting the personal data of users who access our services through our website <span className="font-medium">eduhawk.in</span> or any associated platforms.
//             </p>
//             <p>
//               This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website. By using our services, you agree to the terms outlined in this policy.
//             </p>
//             <p className="mt-3 text-red-600 font-medium">
//               If you do not agree with any part of this Privacy Policy, please do not use our website or services.
//             </p>
//           </section>

//           {/* Information We Collect */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
//             <p className="mb-4">
//               When you visit our website, register, or submit an inquiry, we may collect the following information:
//             </p>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               <li>Full Name</li>
//               <li>Email Address</li>
//               <li>Phone Number</li>
//               <li>Academic Details &amp; Interests</li>
//               <li>Any other information you voluntarily provide</li>
//             </ul>
//             <p className="mt-4 text-sm text-gray-600">
//               This information is referred to as <span className="font-semibold">Personal Information</span>.
//             </p>
//           </section>

//           {/* Purpose of Collection */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
//             <p className="mb-4">We collect this data to:</p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Provide counseling and educational services</li>
//               <li>Respond to your queries</li>
//               <li>Send updates, notifications, and promotional content</li>
//               <li>Improve our services through analytics and research</li>
//             </ul>
//           </section>

//           {/* Cookies */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
//             <p className="mb-4">
//               EduHawk Worldwide uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
//             </p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Understand user preferences</li>
//               <li>Improve website performance</li>
//               <li>Deliver personalized content</li>
//             </ul>
//             <p className="mt-4 text-sm">
//               You can choose to accept or decline cookies through your browser settings.
//             </p>
//           </section>

//           {/* Data Protection */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Protect Your Data</h2>
//             <p className="mb-4">
//               We use industry-standard security measures to protect your personal information, including:
//             </p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Secure servers and encrypted systems</li>
//               <li>Regular security audits and monitoring</li>
//               <li>Restricted access to sensitive data</li>
//             </ul>
//             <p className="mt-4 text-amber-700 text-sm font-medium">
//               While we take strong precautions, no system is 100% secure. However, we continuously upgrade our technology to ensure maximum protection.
//             </p>
//           </section>

//           {/* Use of Information */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Information</h2>
//             <p className="mb-4">Your information may be used for:</p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Providing educational consultation services</li>
//               <li>Communication via call, email, SMS, or WhatsApp</li>
//               <li>Marketing and promotional activities</li>
//               <li>Internal analysis and improvements</li>
//             </ul>
//             <p className="mt-4 font-medium text-green-700">
//               We do not sell your personal information to third parties.
//             </p>
//           </section>

//           {/* Social Media */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Social Media</h2>
//             <p className="mb-4">
//               EduHawk Worldwide operates on platforms such as:
//             </p>
//             <div className="flex flex-wrap gap-4 mb-4">
//               {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((platform) => (
//                 <span key={platform} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
//                   {platform}
//                 </span>
//               ))}
//             </div>
//             <p className="text-sm">
//               We are not responsible for any content posted by users on these platforms. We are only responsible for the data we collect through official channels.
//             </p>
//           </section>

//           {/* Your Rights */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
//             <p className="mb-4">You have the right to:</p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Access your personal data</li>
//               <li>Request correction or deletion</li>
//               <li>Withdraw consent at any time</li>
//             </ul>
//           </section>

//           {/* Contact */}
//           <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
//             <div className="space-y-3 text-sm">
//               <p>
//                 <span className="font-medium">Phone:</span>{' '}
//                 <a href="tel:+919630736070" className="text-blue-600 hover:underline">
//                   +91 96307 36070
//                 </a>
//               </p>
//               <p>
//                 <span className="font-medium">Email:</span>{' '}
//                 <a href="mailto:eduhawk.global@gmail.com" className="text-blue-600 hover:underline">
//                   eduhawk.global@gmail.com
//                 </a>
//               </p>
//               <p>
//                 <span className="font-medium">Website:</span>{' '}
//                 <a href="https://eduhawk.in" className="text-blue-600 hover:underline">
//                   eduhawk.in
//                 </a>
//               </p>
//             </div>
//           </section>

//           {/* Consent & Updates */}
//           <section className="text-sm text-gray-600 border-t pt-8">
//             <p className="mb-3">
//               We may update or modify this Privacy Policy at any time. Users will be notified via email or website notice.
//             </p>
//             <p>
//               By using our website, you consent to our Privacy Policy and agree to its terms.
//             </p>
//           </section>
//         </div>

//         {/* Footer */}
//         <div className="bg-gray-100 py-6 px-8 text-center text-xs text-gray-500 border-t">
//           © 2026 EduHawk Worldwide. All Rights Reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React from 'react';
import { 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">
            Last Updated: April 2026
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
         
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">General</h2>
            <p className="mb-4">
              At <span className="font-semibold text-indigo-600">EduHawk Worldwide</span>, we value your privacy and are committed to protecting the personal data of users who access our services through our website <span className="font-medium">eduhawk.in</span> or any associated platforms.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website. By using our services, you agree to the terms outlined in this policy.
            </p>
            <p className="mt-3 text-red-600 font-medium">
              If you do not agree with any part of this Privacy Policy, please do not use our website or services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you visit our website, register, or submit an inquiry, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Academic Details &amp; Interests</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              This information is referred to as <span className="font-semibold">Personal Information</span>.
            </p>
          </section>

          {/* Purpose of Collection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We collect this data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide counseling and educational services</li>
              <li>Respond to your queries</li>
              <li>Send updates, notifications, and promotional content</li>
              <li>Improve our services through analytics and research</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
            <p className="mb-4">
              EduHawk Worldwide uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand user preferences</li>
              <li>Improve website performance</li>
              <li>Deliver personalized content</li>
            </ul>
            <p className="mt-4 text-sm">
              You can choose to accept or decline cookies through your browser settings.
            </p>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Protect Your Data</h2>
            <p className="mb-4">
              We use industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure servers and encrypted systems</li>
              <li>Regular security audits and monitoring</li>
              <li>Restricted access to sensitive data</li>
            </ul>
            <p className="mt-4 text-amber-700 text-sm font-medium">
              While we take strong precautions, no system is 100% secure. However, we continuously upgrade our technology to ensure maximum protection.
            </p>
          </section>

          {/* Use of Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Information</h2>
            <p className="mb-4">Your information may be used for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing educational consultation services</li>
              <li>Communication via call, email, SMS, or WhatsApp</li>
              <li>Marketing and promotional activities</li>
              <li>Internal analysis and improvements</li>
            </ul>
            <p className="mt-4 font-medium text-green-700">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* ====================== SOCIAL MEDIA SECTION ====================== */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us on Social Media</h2>
            <p className="mb-6">
              EduHawk Worldwide operates on the following platforms:
            </p>
            
            <div className="flex gap-4 text-3xl justify-center md:justify-start">
              <a
                href="https://www.facebook.com/eduhawkglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@Eduhawkteam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/eduhawk_global/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/edu-hawk-worldwide/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition-colors duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
              We are not responsible for any content posted by users on these platforms. 
              We are only responsible for the data we collect through our official channels.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+919630736070" className="text-blue-600 hover:underline">
                  +91 96307 36070
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:eduhawk.global@gmail.com" className="text-blue-600 hover:underline">
                  eduhawk.global@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Website:</span>{' '}
                <a href="https://eduhawk.in" className="text-blue-600 hover:underline">
                  eduhawk.in
                </a>
              </p>
            </div>
          </section>

          {/* Consent & Updates */}
          <section className="text-sm text-gray-600 border-t pt-8">
            <p className="mb-3">
              We may update or modify this Privacy Policy at any time. Users will be notified via email or website notice.
            </p>
            <p>
              By using our website, you consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 py-6 px-8 text-center text-xs text-gray-500 border-t">
          © 2026 EduHawk Worldwide. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;