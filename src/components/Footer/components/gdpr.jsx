import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';

export default function Gdpr() {
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
            alt="GDPR Compliance Background"
            className="w-full h-full object-cover object-center opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">
            GDPR-compliant Data Processing Agreement
          </h1>
          <div className="flex items-center space-x-2 text-[15px] font-medium">
            <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
              <Home size={16} className="mr-1.5 mb-[2px]" />
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-500" />
            <span className="text-[#01ab4a]">GDPR-compliant Data Processing Agreement</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-gray-800">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          ChatMentorz GDPR Compliance &amp; Data Processing Agreement
        </h2>
        <p className="text-center text-gray-600 mb-2"><span className="font-bold">Version:</span> 1.0</p>
        <p className="text-center text-sm text-gray-700 mb-8">
          <span className="font-bold">Effective Date:</span> 01/09/2025
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">This document consists of two parts:</p>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-10">
          <li>
            <span className="font-bold">GDPR Compliance Policy</span> — describes how ChatMentorz handles personal
            data to comply with GDPR.
          </li>
          <li>
            <span className="font-bold">Data Processing Addendum (DPA)</span> — contractual obligations when
            ChatMentorz (Processor) processes data on behalf of a Client / Customer (Controller).
          </li>
        </ul>

        {/* ── Part 1 ── */}
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          Part 1: GDPR Compliance Policy Of ChatMentorz
        </h2>

        {/* 1 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">1. Introduction &amp; Scope</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          ChatMentorz is committed to protecting the privacy, integrity, and security of personal data processed in
          connection with its services. This policy describes principles, rights, obligations, and safeguards we adopt
          to comply with the EU General Data Protection Regulation (GDPR).
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          This policy applies to all personal data processed by ChatMentorz in the context of providing services
          (e.g. chatbots, messaging, analytics) to its clients and end-users, whether within the EU or outside, where
          GDPR obligations apply.
        </p>

        {/* 2 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">2. Data Controller / Data Processor Roles</h3>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-4">
          <li>
            The Client is typically the <span className="font-bold">Data Controller</span> — deciding the purposes
            and means of processing personal data collected via ChatMentorz's services.
          </li>
          <li>
            ChatMentorz acts as <span className="font-bold">Data Processor</span> (or sub-processor), processing data
            on documented instructions from the Controller.
          </li>
          <li>
            Where ChatMentorz collects data directly (e.g. user registration), it may act as Controller.
          </li>
        </ul>
        <p className="text-gray-700 font-bold mb-1">DPO Contact:</p>
        <ul className="list-none space-y-1 text-gray-700 mb-10">
          <li><span className="font-bold">Name:</span> Nithin Manuel</li>
          <li>
            <span className="font-bold">Email:</span>{' '}
            <a href="mailto:support@chatmentorz.in" className="text-green-600 hover:underline">
              support@chatmentorz.in
            </a>
          </li>
        </ul>

        {/* 3 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">3. Principles For Processing Personal Data</h3>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-10">
          <li>Lawful, Fair &amp; Transparent</li>
          <li>Purpose Limitation</li>
          <li>Data Minimization</li>
          <li>Accuracy</li>
          <li>Storage Limitation</li>
          <li>Integrity &amp; Confidentiality</li>
          <li>Accountability</li>
        </ul>

        {/* 4 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">4. Lawful Basis For Processing</h3>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
          <li>Consent</li>
          <li>Contractual necessity</li>
          <li>Legal obligation</li>
          <li>Legitimate interests</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-10">
          For special categories of data, further legal basis (e.g., explicit consent) is required.
        </p>

        {/* 5 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">5. Data Subject Rights</h3>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-10">
          <li>Right to information / transparency</li>
          <li>Right of access</li>
          <li>Right to rectification</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object</li>
          <li>Rights related to automated decision-making / profiling</li>
        </ul>

        {/* 6 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">6. Security &amp; Technical / Organizational Measures</h3>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-10">
          <li>Encryption (data in transit / at rest)</li>
          <li>Firewalls, access controls, MFA</li>
          <li>Penetration testing, monitoring</li>
          <li>Disaster recovery &amp; backups</li>
          <li>Physical security</li>
          <li>Confidentiality obligations for staff</li>
        </ul>

        {/* 7 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">7. Use Of Subprocessors</h3>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-10">
          <li>Due diligence before engagement</li>
          <li>Written agreements required</li>
          <li>Notification and objection period for Controllers</li>
        </ul>

        {/* 8 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">8. Data Breach Notification</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          ChatMentorz shall notify the Controller without undue delay in case of personal data breach and cooperate in
          any investigation or mitigation steps.
        </p>

        {/* 9 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">9. Data Retention, Deletion &amp; Return</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Upon termination, ChatMentorz shall return or delete personal data per the Controller's instructions, unless
          otherwise required by law.
        </p>

        {/* 10 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">10. Audit &amp; Inspection</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Controllers may audit ChatMentorz for GDPR compliance with prior notice. ChatMentorz shall cooperate and
          resolve any non-compliance.
        </p>

        {/* ── Part 2 ── */}
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          Part 2: Data Processing Addendum (DPA)
        </h2>

        {/* DPA 1 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">1. Definitions</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Definitions such as Controller, Processor, Subprocessor, Personal Data, Processing, Data Subject, and others
          are aligned with GDPR Article 4.
        </p>

        {/* DPA 2 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">2. Subject Matter &amp; Duration Of Processing</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Processing is for providing ChatMentorz services and shall last for the term of the Agreement, unless
          terminated earlier.
        </p>

        {/* DPA 3 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">3. Nature And Purpose Of Processing</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Processor shall process personal data only as instructed by Controller (e.g., chat, analytics, messaging).
        </p>

        {/* DPA 4 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">4. Categories Of Data &amp; Data Subjects</h3>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 mb-10">
          <li><span className="font-bold">Data Subjects:</span> End users, customers, employees, chatbot users</li>
          <li><span className="font-bold">Data:</span> Names, contacts, messages, metadata, usage info</li>
          <li>
            <span className="font-bold">Special Categories:</span> (if any) e.g., health or biometric data (to be
            specified by Controller)
          </li>
        </ul>

        {/* DPA 5 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">5. Obligations Of The Processor</h3>
        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-10">
          <li>Process only on documented instructions</li>
          <li>Confidentiality agreements with staff</li>
          <li>Implement security measures</li>
          <li>Assist with data subject rights</li>
          <li>Notify breaches promptly</li>
          <li>Assist in DPIAs and regulator consultations</li>
          <li>Return or delete data upon termination</li>
        </ul>

        {/* DPA 6 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">6. Security Measures</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Measures include encryption, access controls, backups, logging, regular testing, secure storage and transfer
          protocols. (Annex B to provide specifics.)
        </p>

        {/* DPA 7 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">7. Subprocessors &amp; Onward Transfers</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Processor may engage subprocessors with prior notice. Controller may object. SCCs or equivalent mechanisms
          will be used for non-EU transfers.
        </p>

        {/* DPA 8 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">8. Personal Data Breach</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Processor shall promptly notify Controller with detailed breach info and assist in response obligations.
        </p>

        {/* DPA 9 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">9. Data Subject Requests</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          If data subjects contact Processor directly, they will be referred to Controller unless otherwise authorized.
          Processor shall assist in compliance.
        </p>

        {/* DPA 10 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">10. Audit Rights</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Controllers may audit Processor with reasonable notice. Processor shall provide access to records and resolve
          issues found.
        </p>

        {/* DPA 11 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">11. Liability &amp; Indemnification</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Each party is liable as per the Agreement and applicable data laws. Processor is responsible for its own
          actions and those of its subprocessors.
        </p>

        {/* DPA 12 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">12. Duration &amp; Termination</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          DPA remains effective through the Agreement duration. Relevant clauses survive termination as necessary.
        </p>

        {/* DPA 13 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">13. Governing Law &amp; Dispute Resolution</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          Subject to the Agreement's jurisdiction unless data law dictates otherwise. Data subjects may have
          third-party rights under SCCs.
        </p>

        {/* DPA 14 */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">14. Miscellaneous</h3>
        <p className="text-gray-700 leading-relaxed mb-10">
          If any clause is invalid, it will be modified to reflect intent. Updates to this DPA require written
          agreement. SCCs will not be modified inconsistently with data protection law.
        </p>

        {/* Annexes */}
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-2">
          Annexes (To Be Completed As Needed)
        </h2>
        <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700">
          <li>
            <span className="font-bold">Annex A — Details of Processing:</span> Purposes, duration, categories of
            data and subjects
          </li>
          <li>
            <span className="font-bold">Annex B — Security Measures:</span> Technical &amp; organizational safeguards
          </li>
          <li>
            <span className="font-bold">Annex C — Subprocessor List:</span> Current subprocessors, roles,
            notification procedures
          </li>
          <li>
            <span className="font-bold">Annex D — Standard Contractual Clauses:</span> For cross-border transfers
            (if applicable)
          </li>
        </ul>

      </section>
    </div>
  );
}
