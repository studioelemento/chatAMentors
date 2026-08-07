import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';

export default function TermsOfService() {
  return (
    <div className="w-full font-sans">

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100"
      >
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Terms of Service Background"
            className="w-full h-full object-cover object-center opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">
            Terms of Service
          </h1>
          <div className="flex items-center space-x-2 text-[15px] font-medium">
            <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
              <Home size={16} className="mr-1.5 mb-[2px]" />
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-500" />
            <span className="text-[#01ab4a]">Terms of Service</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-gray-800">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Terms Of Service</h2>

        <p className="text-sm text-gray-700 mb-6">
          <span className="font-bold">Effective Date:</span> 01/09/2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Welcome to ChatMentorz! These Terms of Service ("Terms") govern your use of our website, services, and any
          associated products (collectively referred to as the "Services"). By accessing or using ChatMentorz (the
          "Service"), you agree to comply with these Terms. If you do not agree, do not use the Service.
        </p>

        {/* Section 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance Of Terms</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          By accessing or using ChatMentorz, you affirm that you have read, understood, and agree to these Terms. We
          may update these Terms from time to time, and you will be notified of significant changes. Your continued use
          of the Service after any updates will constitute your acceptance of the revised Terms.
        </p>

        {/* Section 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          ChatMentorz offers a platform for chat-based communication &amp; AI-driven services, where users can build
          custom solutions as per their requirements. We may update, modify, or discontinue the Service at our
          discretion.
        </p>

        {/* Section 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          To use our Services, you must be at least 18 years old or the age of majority in your jurisdiction. By using
          ChatMentorz, you represent that you are eligible to enter into a binding agreement and are not barred from
          using the Service under any applicable law.
        </p>

        {/* Section 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          In order to use certain features of ChatMentorz, you may be required to create an account. You agree to:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>Provide accurate and complete information during registration.</li>
          <li>Keep your account credentials confidential.</li>
          <li>Immediately notify us of any unauthorized use of your account.</li>
        </ul>

        {/* Section 5 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">5. User Obligations</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          You agree to use ChatMentorz in a manner that complies with all applicable laws and regulations. You will not:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>Use the Service for any unlawful purpose.</li>
          <li>Post, transmit, or distribute any content that is defamatory, offensive, or harmful.</li>
          <li>Interfere with the functioning of the Service or attempt to bypass security measures.</li>
        </ul>

        {/* Section 6 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Content Ownership And License</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          All content provided through ChatMentorz (including text, graphics, logos, and software) is owned by
          ChatMentorz or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the
          Service for personal or business purposes as allowed by these Terms.
        </p>

        {/* Section 7 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Your use of ChatMentorz is also governed by our Privacy Policy, which can be found{' '}
          <Link to="/privacy-policy" className="text-green-600 hover:underline">here</Link>. By using the Service,
          you consent to the collection and use of your data as described in the Privacy Policy.
        </p>

        {/* Section 8 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Subscription And Payments</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          If applicable, some features of the Service may require a subscription or one-time payment. You agree to pay
          all applicable fees and charges as specified when you subscribe to or use the paid features. All payments
          will be processed in accordance with the terms presented at the time of purchase.
        </p>

        {/* Section 9 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Termination Of Access</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          We may suspend or terminate your access to the Service at any time, without notice, if you violate these
          Terms. You may also cancel your account at any time, subject to any applicable refund or payment terms.
        </p>

        {/* Section 10 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers And Limitation Of Liability</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          The Service is provided "as-is" and "as available." We do not make any representations or warranties
          regarding the Service, including its availability, reliability, or suitability for any specific purpose. In
          no event will ChatMentorz be liable for any indirect, incidental, or consequential damages arising from your
          use of the Service.
        </p>

        {/* Section 11 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnity</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          You agree to indemnify and hold harmless ChatMentorz, its affiliates, and its employees from any claims,
          losses, or damages arising from your violation of these Terms or your use of the Service.
        </p>

        {/* Section 12 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          These Terms will be governed by and construed in accordance with the laws of India. Any dispute arising from
          or related to these Terms will be resolved in the courts of India.
        </p>

        {/* Section 13 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">13. Amendments</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          ChatMentorz reserves the right to amend or revise these Terms at any time. We will notify you of significant
          changes. Your continued use of the Service after such amendments constitutes your acceptance of the updated
          Terms.
        </p>

        {/* Section 14 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <ul className="list-none space-y-2 text-gray-700">
          <li>
            <span className="font-bold">Email:</span>{' '}
            <a href="mailto:support@chatmentorz.in" className="text-green-600 hover:underline">
              support@chatmentorz.in
            </a>
          </li>
          <li>
            <span className="font-bold">Call:</span> +91 927177624, +91 8921675767
          </li>
        </ul>

      </section>
    </div>
  );
}
