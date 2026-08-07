import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';

export default function CancellationRefundPolicy() {
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
            alt="Cancellation & Refund Policy Background"
            className="w-full h-full object-cover object-center opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">
            Cancellation &amp; Refund Policy
          </h1>
          <div className="flex items-center space-x-2 text-[15px] font-medium">
            <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
              <Home size={16} className="mr-1.5 mb-[2px]" />
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-500" />
            <span className="text-[#01ab4a]">Cancellation &amp; Refund Policy</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-gray-800">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Cancellation &amp; Refund Policy</h2>

        <p className="text-sm text-gray-700 mb-10">
          <span className="font-bold">Effective Date:</span> 01/09/2025
        </p>

        {/* Section 1 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          ChatMentorz offers subscription-based services (or other paid plans) to clients ("you", "Customer"). This
          Policy sets out the terms under which you may cancel your subscription and whether or how refunds may be
          given. By subscribing to ChatMentorz, you agree to this Policy.
        </p>

        {/* Section 2 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Cancellation Policy</h3>

        <h4 className="text-lg font-bold text-gray-800 mb-3">2.1 How To Cancel</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          You may cancel your subscription any time by contacting our support team at{' '}
          <a href="mailto:support@chatmentorz.in" className="text-green-600 hover:underline">
            support@chatmentorz.in
          </a>{' '}
          (or via your dashboard, as applicable).
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Cancellation requests will be processed manually (or via automated means) as specified in your
          account/subscription settings.
        </p>

        <h4 className="text-lg font-bold text-gray-800 mb-3">2.2 Effect Of Cancellation</h4>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>Your subscription will remain active until the end of the current billing cycle (monthly, yearly, etc.).</li>
          <li>After that, you will lose access to premium features and benefits.</li>
          <li>No further charges will be made post-cancellation (for new cycles).</li>
        </ul>

        {/* Section 3 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Policy</h3>

        <h4 className="text-lg font-bold text-gray-800 mb-3">3.1 General No-Refund Rule</h4>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-6">
          <li>
            Unless expressly stated otherwise here, no refunds will be issued for any unused portion of a subscription
            or for amounts already paid.
          </li>
          <li>
            You will not receive a refund for unused days left in your current billing period after cancellation.
          </li>
          <li>
            Downgrades requested before the end of a billing period will not entitle you to a refund of the difference.
          </li>
          <li>
            Any existing credit or balance in your ChatMentorz account (if applicable) is non-refundable upon account
            closure.
          </li>
        </ul>

        <h4 className="text-lg font-bold text-gray-800 mb-3">3.2 Trial / Promotional Offers</h4>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-6">
          <li>
            If you are using a free trial, no charges will apply before the trial expires, so there is no refund
            needed (unless otherwise stated).
          </li>
          <li>
            If you upgrade to a paid subscription during or immediately after a trial, standard refund rules apply.
          </li>
        </ul>

        <h4 className="text-lg font-bold text-gray-800 mb-3">3.3 Exceptions / Special Cases</h4>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>
            In rare cases (e.g. technical failure, discontinuation of service), ChatMentorz may, at its discretion,
            issue a partial or full refund or provide credit.
          </li>
          <li>
            Any decision to grant a refund is solely at ChatMentorz's discretion and must be approved by management.
          </li>
          <li>
            Refunds (if granted) will be made via the original payment method, net of any transaction or processing
            fees, within a reasonable timeframe (e.g., 14 business days).
          </li>
        </ul>

        {/* Section 4 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Processing &amp; Fees</h3>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>
            ChatMentorz may engage third-party payment processors. Transaction fees or processing costs imposed by
            these providers may not be refundable.
          </li>
          <li>
            If a payment is not successfully processed or is reversed, ChatMentorz reserves the right to suspend or
            terminate services.
          </li>
          <li>
            If we adjust or revise fees for future billing periods, those changes do not affect amounts already paid.
          </li>
        </ul>

        {/* Section 5 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Modifications &amp; Plan Changes</h3>

        <h4 className="text-lg font-bold text-gray-800 mb-3">5.1 Upgrades</h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you upgrade your plan, the billing for the upgraded plan may be prorated based on the remainder of your
          current cycle.
        </p>

        <h4 className="text-lg font-bold text-gray-800 mb-3">5.2 Downgrades</h4>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>Downgrades become effective only at the end of your current billing cycle.</li>
          <li>You will not receive refunds or credits for service downgrade requests made mid-cycle.</li>
        </ul>

        {/* Section 6 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Non-Refundable Situations</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unless otherwise indicated, refunds will not be issued for:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li>Change of mind or dissatisfaction with service after purchase</li>
          <li>Failure to use or activation of features</li>
          <li>Any portion of a subscription left unused</li>
          <li>Payment processing or banking fees</li>
          <li>Credits or balances in account wallets (if applicable)</li>
          <li>Downgrades before the end of the billing period</li>
        </ul>

        {/* Section 7 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Refund Procedure</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          To request a refund (if eligible), contact support at{' '}
          <a href="mailto:support@chatmentorz.in" className="text-green-600 hover:underline">
            support@chatmentorz.in
          </a>
          , stating your account, subscription plan, reason for refund, and any supporting information.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          ChatMentorz will review the request, and notify you of the decision within a reasonable timeframe
          (e.g. 5–10 business days).
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          If approved, refunds will be processed to the original payment method (or alternative method if mutually
          agreed).
        </p>

        {/* Section 8 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Amendments To Policy</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ChatMentorz reserves the right to modify, suspend, or terminate this Cancellation &amp; Refund Policy at
          any time, with notice (e.g. via email or website).
        </p>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700">
          <li>
            Changes will not apply retroactively to amounts already paid before the effective date of change.
          </li>
        </ul>

      </section>
    </div>
  );
}
