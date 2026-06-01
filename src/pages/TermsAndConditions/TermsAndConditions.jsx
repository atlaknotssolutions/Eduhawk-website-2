import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">Terms & Conditions</h1>
          <p className="text-blue-100 text-lg">
            Last Updated: April 2026
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          
          {/* General */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">General</h2>
            <p className="mb-4">
              These Terms & Conditions apply to all users and visitors of <span className="font-semibold text-indigo-600">EduHawk Worldwide</span> and its website{' '}
              <span className="font-medium">eduhawk.in</span>, including any associated applications or platforms.
            </p>
            <p className="mb-4">
              The terms “We”, “Us”, and “Our” refer to EduHawk Worldwide.
            </p>
            <p>
              By accessing or using our website and services, you agree to comply with these Terms & Conditions. 
              If you do not agree with any part, you should not use our platform.
            </p>
          </section>

          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="mb-4">
              EduHawk Worldwide is an education consultancy platform that assists students in pursuing higher education in India and abroad.
            </p>
            <p className="mb-4">We provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Career counseling</li>
              <li>University selection guidance</li>
              <li>Admission assistance</li>
              <li>Visa and travel support</li>
            </ul>
            <p className="mt-4">
              Our team of experts ensures smooth guidance throughout the admission process.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility</h2>
            <p className="mb-4">To use our services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 14 years old or meet the age of majority in your jurisdiction</li>
              <li>If under 18, use the platform under parent/guardian supervision</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Agree not to use our services for resale or unauthorized commercial purposes</li>
            </ul>
          </section>

          {/* Registration */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registration</h2>
            <p className="mb-4">
              By registering on eduhawk.in, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate contact details (Name, Phone, Email, etc.)</li>
              <li>Allow us to contact you via call, SMS, email, or WhatsApp</li>
              <li>Receive updates, promotional offers, and service-related communication</li>
            </ul>
            <p className="mt-4 text-sm">
              You are responsible for maintaining the confidentiality of your information.
            </p>
          </section>

          {/* Terms of Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms of Use</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>We reserve the right to accept or deny access to any user without prior notice.</li>
              <li>We may restrict access to certain regions if required.</li>
              <li>All content on our platform is provided in good faith and believed to be accurate.</li>
              <li>We do not guarantee that the website will always be error-free or uninterrupted.</li>
              <li>We are not responsible for third-party websites, services, or links.</li>
              <li>Your personal data will be handled as per our <span className="text-blue-600 underline">Privacy Policy</span>.</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              EduHawk Worldwide is not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-red-700">
              <li>Admission rejection by universities</li>
              <li>Visa rejection by authorities</li>
              <li>Delays caused by third parties</li>
              <li>Any loss due to incorrect information provided by users</li>
            </ul>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. 
              Updates will be posted on the website. Continued use of the platform means acceptance of the revised terms.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="mb-4 text-gray-600">
              For any queries regarding Terms & Conditions:
            </p>
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

          {/* Consent */}
          <section className="text-sm text-gray-600 border-t pt-8">
            <p className="font-medium">
              By using our website, you confirm that you have read, understood, and agreed to these Terms & Conditions.
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

export default TermsAndConditions;