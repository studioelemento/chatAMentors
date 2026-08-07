import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';

export default function PrivacyPolicy() {
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
            alt="Privacy Policy Background"
            className="w-full h-full object-cover object-center opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center space-x-2 text-[15px] font-medium">
            <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
              <Home size={16} className="mr-1.5 mb-[2px]" />
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-500" />
            <span className="text-[#01ab4a]">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-gray-800">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h2>

        <p className="text-sm text-gray-700 mb-6">
          <span className="font-bold">Effective Date:</span> 01/09/2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          At ChatMentorz, we value and respect your privacy. This Privacy Policy outlines how we collect, use, store,
          and protect your personal data when you interact with our platform and use our services. By using our website
          and services, you consent to the collection and use of your personal information as described in this policy.
        </p>

        {/* Section 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h3>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>
            <span className="font-bold">Personal Identification Information:</span> Name, email address, phone number,
            and other details provided during account registration.
          </li>
          <li>
            <span className="font-bold">Usage Data:</span> Information about how you interact with our website,
            including IP addresses, browser types, and browsing activity.
          </li>
          <li>
            <span className="font-bold">Communication Data:</span> Any messages or communications you send to us,
            including customer service interactions.
          </li>
          <li>
            <span className="font-bold">Transaction Data:</span> Billing information, payment methods, and transaction
            details for purchases or subscriptions.
          </li>
        </ul>

        {/* Section 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h3>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>Provide, maintain, and improve our services.</li>
          <li>Personalize your user experience and offer tailored content.</li>
          <li>Process transactions and send related notifications (e.g., confirmations, receipts).</li>
          <li>Respond to customer service inquiries and support requests.</li>
          <li>Send you marketing and promotional materials (you can opt out at any time).</li>
          <li>Monitor and analyze usage trends to improve our platform and services.</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>

        {/* Section 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. How We Protect Your Information</h3>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-6">
          <li>
            <span className="font-bold">Encryption:</span> We use SSL/TLS encryption to secure data transmitted to and
            from our servers.
          </li>
          <li>
            <span className="font-bold">Access Control:</span> Only authorized personnel have access to personal
            information for business purposes.
          </li>
          <li>
            <span className="font-bold">Data Retention:</span> We retain your personal data only as long as necessary
            to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-10">
          However, please note that no method of transmission over the Internet or method of electronic storage is 100%
          secure, and while we strive to protect your data, we cannot guarantee absolute security.
        </p>

        {/* Section 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We do not sell or rent your personal information to third parties. We may share your data with trusted
          third-party service providers for purposes such as:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
          <li>Payment processing (e.g., Stripe, PayPal)</li>
          <li>Email marketing and communications</li>
          <li>Cloud hosting and infrastructure services</li>
          <li>Analytics and performance monitoring tools (e.g., Google Analytics)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          These third-party providers are only allowed to use your information to perform services on our behalf and are
          obligated to protect your data in accordance with our privacy policy.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          We may also disclose your information if required by law or to protect our rights, safety, or property, or
          those of others.
        </p>

        {/* Section 5 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies And Tracking Technologies</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use cookies and other tracking technologies (e.g., web beacons, pixels) to collect data about your use of
          our website. This data helps us enhance your experience, analyze trends, and improve our services. Cookies
          may also be used for advertising and marketing purposes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          You can choose to disable cookies in your browser settings, but please note that some features of the website
          may not function properly if cookies are disabled.
        </p>

        {/* Section 6 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights And Choices</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Depending on your location and applicable laws, you may have the following rights regarding your personal data:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-4">
          <li>
            <span className="font-bold">Access:</span> You can request a copy of the personal data we hold about you.
          </li>
          <li>
            <span className="font-bold">Correction:</span> You can update or correct inaccurate information.
          </li>
          <li>
            <span className="font-bold">Deletion:</span> You may request that we delete your personal data, subject to
            certain exceptions.
          </li>
          <li>
            <span className="font-bold">Opt-out:</span> You can opt out of receiving marketing communications at any
            time by following the unsubscribe instructions in our emails or contacting us directly.
          </li>
          <li>
            <span className="font-bold">Data Portability:</span> You may request that we provide your personal data in
            a machine-readable format.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-10">
          To exercise any of these rights, please contact us at{' '}
          <a href="mailto:support@chatmentorz.in" className="text-green-600 hover:underline">
            support@chatmentorz.in
          </a>
          . We will respond to your request in accordance with applicable data protection laws.
        </p>

        {/* Section 7 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          As a global service provider, we may transfer your personal data to countries outside your jurisdiction,
          including the United States or other countries with data protection laws that may differ from your own. By
          using our service, you consent to such transfers.
        </p>

        {/* Section 8 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          ChatMentorz is not intended for children under the age of 18, and we do not knowingly collect personal
          information from children. If we become aware that we have inadvertently collected personal information from
          a child, we will take steps to delete such data. If you are a parent or guardian and believe your child has
          provided us with personal data, please contact us so that we can take appropriate action.
        </p>

        {/* Section 9 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Changes To This Privacy Policy</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons. When we update the Privacy Policy, we will revise the "Effective
          Date" at the top of this document. We encourage you to periodically review this page to stay informed about
          how we are protecting your data.
        </p>

        {/* Section 10 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
  )
}
