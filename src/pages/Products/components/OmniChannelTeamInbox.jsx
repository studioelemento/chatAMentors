import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons (outline style) ─────────────── */
const IconDashboard = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <rect x="8" y="8" width="22" height="22" rx="2" />
    <rect x="34" y="8" width="22" height="22" rx="2" />
    <rect x="8" y="34" width="22" height="22" rx="2" />
    <rect x="34" y="34" width="22" height="22" rx="2" />
  </svg>
);

const IconLightbulb = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <circle cx="32" cy="26" r="14" />
    <path d="M26 40 c0 6 12 6 12 0" />
    <line x1="28" y1="46" x2="36" y2="46" />
    <line x1="30" y1="50" x2="34" y2="50" />
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <rect x="12" y="8" width="40" height="48" rx="3" />
    <line x1="12" y1="20" x2="52" y2="20" />
    <line x1="22" y1="8" x2="22" y2="56" />
    <line x1="30" y1="30" x2="46" y2="30" />
    <line x1="30" y1="38" x2="46" y2="38" />
  </svg>
);

const IconAtlassian = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <path d="M32 8 L14 52 L26 52 L32 34 L38 52 L50 52 Z" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <circle cx="32" cy="22" r="12" />
    <path d="M10 56 c0-14 10-22 22-22 s22 8 22 22" />
  </svg>
);

const IconRobot = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <rect x="14" y="22" width="36" height="28" rx="4" />
    <circle cx="24" cy="34" r="4" />
    <circle cx="40" cy="34" r="4" />
    <line x1="28" y1="44" x2="36" y2="44" />
    <line x1="32" y1="10" x2="32" y2="22" />
    <circle cx="32" cy="8" r="4" />
    <line x1="14" y1="34" x2="6" y2="34" />
    <line x1="50" y1="34" x2="58" y2="34" />
  </svg>
);

const IconAnalytics = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <circle cx="32" cy="32" r="22" />
    <path d="M32 10 A22 22 0 0 1 54 32" />
    <circle cx="32" cy="32" r="6" />
    <line x1="32" y1="10" x2="32" y2="26" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <path d="M32 8 L52 16 L52 34 C52 46 42 54 32 58 C22 54 12 46 12 34 L12 16 Z" />
    <circle cx="32" cy="30" r="6" />
    <line x1="32" y1="36" x2="32" y2="44" />
  </svg>
);

const IconMobile = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <rect x="18" y="6" width="28" height="52" rx="5" />
    <line x1="26" y1="52" x2="38" y2="52" />
    <line x1="24" y1="14" x2="40" y2="14" />
  </svg>
);

/* ─────────────── Data ─────────────── */
const keyFeatures = [
  { icon: <IconDashboard />, title: 'Unified Dashboard', desc: 'Centralized view of all messages from email, chat, social media, etc. Organized by customer thread, not just channel Easy filtering by source, status, priority, or assigned agent' },
  { icon: <IconLightbulb />, title: 'Channel Integrations', desc: 'Native integrations with: Email (Gmail, Outlook), Live Chat, Social Media (Facebook Messenger, Instagram DMs, Twitter/X), WhatsApp & SMS, Voice & VoIP systems, Help Desk' },
  { icon: <IconBook />, title: 'Multi-Agent Collaboration', desc: 'Shared inbox for teams with assign, mention/tag teammates, and internal notes Prevents duplicate responses and encourages teamwork Visibility into who is handling what' },
  { icon: <IconAtlassian />, title: 'Smart Routing & Assignment', desc: 'Auto-assign conversations based on: Channel Customer priority Agent availability or expertise SLA and escalation rules for high-priority messages' },
  { icon: <IconUser />, title: 'Customer Profiles & History', desc: 'Unified customer profiles across all channels View past interactions, purchase history, and notes Custom fields to add CRM-style data' },
  { icon: <IconRobot />, title: 'Automation & AI Features', desc: 'Auto-tagging, auto-responses, and canned replies AI-generated reply suggestions Chatbots to handle FAQs before escalating to humans Sentiment analysis and intent detection' },
  { icon: <IconAnalytics />, title: 'Analytics & Reporting', desc: 'Team performance metrics (response time, resolution time) Volume by channel, agent workload, peak hours Customer satisfaction (CSAT), NPS integration' },
  { icon: <IconShield />, title: 'Security & Permissions', desc: 'Role-based access controls Audit logs and message history tracking Data encryption and GDPR/CCPA compliance' },
  { icon: <IconMobile />, title: 'Mobile Access', desc: 'Fully functional mobile apps for iOS and Android Push notifications for real-time alerts' },
];

const purposeItems = [
  'Unify Communication Across Platforms',
  'Avoid Missed Messages And Delayed Responses',
  'Improve Team Collaboration And Accountability',
  'Provide A 360° View Of Customer Interactions',
];

const benefits = [
  { emoji: '🌟', title: 'Consistent Customer Experience', desc: 'Seamless transitions across channels' },
  { emoji: '⏱️', title: 'Faster Response Times', desc: 'With smart routing and alerts, teams respond quicker' },
  { emoji: '🤝', title: 'Stronger Collaboration', desc: 'Internal notes and assignments streamline teamwork' },
  { emoji: '📈', title: 'Improved Efficiency', desc: 'One interface to manage all messages—no channel-switching needed' },
  { emoji: '📊', title: 'Better Insights', desc: 'All-in-one reporting to track performance and optimize operations' },
  { emoji: '📐', title: 'Scalability', desc: 'Easily onboard new agents and scale to new channels as you grow' },
];

const faqs = [
  {
    q: 'What Is An Omni-Channel Team Inbox?',
    a: 'An Omni-Channel Team Inbox is a centralized platform that allows teams to receive, manage, and respond to customer messages from multiple communication channels (e.g., email, live chat, social media, SMS, WhatsApp, and voice) in one unified dashboard.',
  },
  {
    q: 'What Channels Are Supported?',
    a: 'Commonly supported channels include: Email (Gmail, Outlook) Website live chat Facebook Messenger & Instagram DM Twitter/X WhatsApp Business SMS VoIP or phone systems App-based chat (mobile or web) Note: Supported channels may vary by provider.'
  },
  {
    q: 'How Is It Different From A Traditional Shared Inbox?',
    a: 'Unlike a basic shared email inbox, an Omni-Channel Team Inbox: Combines multiple channels, not just email Offers smart routing and automation Provides customer profiles and chat history Allows team collaboration through tagging, assigning, and notes Includes analytics and reporting'
  },
  {
    q: 'Can Multiple Team Members Respond To The Same Conversation?',
    a: 'Yes, multiple agents can access and collaborate on the same conversation. To prevent duplicated responses, features like real-time typing indicators, internal notes, and collision detection are often available.'
  },
  {
    q: 'Can We Assign Messages To Specific Team Members Or Departments?',
    a: 'Absolutely. Most Omni-Channel Inboxes include: Manual or auto-assignment Department/team-level inboxes Round-robin or skill-based routing'
  },
  {
    q: 'Does It Support Automation And Bots?',
    a: 'Yes. Most solutions support: Auto-replies Canned responses Workflow automation (e.g., auto-tagging, forwarding) Chatbots for FAQs or lead qualification AI-assisted response suggestions'
  },
];

const trustLogos = [
  { src: logo1, alt: 'Chatmentorz' },
  { src: logo1, alt: 'Tripco' },
  { src: logo1, alt: 'Whitetrip' },
  { src: logo1, alt: 'Evergreen Village' },
  { src: logo1, alt: 'Jetiaayu' },
  { src: logo1, alt: 'Mercedes' },
];

/* ─────────────── Social Orbit Diagram ─────────────── */
const socialNodes = [
  { icon: <FaFacebook size={28} />, label: 'Facebook', angle: 90 },
  { icon: <FaFacebookMessenger size={28} />, label: 'Messanger', angle: 30 },
  { icon: <FaTwitter size={28} />, label: 'Twitter', angle: 330 },
  { icon: <FaGlobe size={28} />, label: 'Web', angle: 270 },
  { icon: <FaLinkedin size={28} />, label: 'Linked In', angle: 210 },
  { icon: <FaCalendarAlt size={28} />, label: 'Calender', angle: 150 },
];

function SocialOrbit() {
  const cx = 200;
  const cy = 200;
  const r = 140;
  return (
    <div className="relative w-[400px] h-[400px] flex-shrink-0">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {/* Outer dashed circle */}
        <circle cx={cx} cy={cy} r={r} stroke="#bbb" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
        {/* Inner solid circle */}
        <circle cx={cx} cy={cy} r={r * 0.48} stroke="#ccc" strokeWidth="1" fill="none" />
        {/* Orbit dots */}
        <circle cx={cx + r * Math.cos((45 * Math.PI) / 180)} cy={cy - r * Math.sin((45 * Math.PI) / 180)} r="5" fill="#ef4444" />
        <circle cx={cx + r * Math.cos((230 * Math.PI) / 180)} cy={cy - r * Math.sin((230 * Math.PI) / 180)} r="5" fill="#3b82f6" />
      </svg>

      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
        <img src={logo1} alt="Chatmentorz" className="w-16 h-16 object-contain rounded-full" />
      </div>

      {/* Social icons placed around the orbit */}
      {socialNodes.map(({ icon, label, angle }) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        const pct_x = (x / 400) * 100;
        const pct_y = (y / 400) * 100;
        return (
          <div
            key={label}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: `${pct_x}%`, top: `${pct_y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="text-gray-900">{icon}</div>
            <span className="text-[11px] text-gray-700 font-medium whitespace-nowrap">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────── FAQ Accordion ─────────────── */
function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-md bg-[#edf4ed] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-[15px] font-semibold text-gray-800 hover:bg-[#e2ece2] transition-colors"
      >
        {q}
        <span className="ml-4 flex-shrink-0 text-gray-600">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && a && (
        <div className="px-6 pb-4 text-gray-500 text-[14px] leading-relaxed bg-white">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─────────────── Main Component ─────────────── */
export default function OmniChannelTeamInbox() {
  return (
    <div className="font-sans">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Omni Channel Team Inbox Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">Omni Channel Team Inbox</h1>
          <div className="flex items-center space-x-2 text-[15px] font-medium">
            <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
              <Home size={16} className="mr-1.5 mb-[2px]" />
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-500" />
            <span className="text-[#01ab4a]">Omni Channel Team Inbox</span>
          </div>
        </div>
      </section>

      {/* ── What Is An Omni-Channel Team Inbox? ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            What Is An Omni-Channel<br />Team Inbox?
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
            An Omni-Channel Team Inbox is a unified communication platform that consolidates messages from multiple
            channels—such as email, SMS, live chat, social media (Facebook, Instagram, Twitter/X, WhatsApp), voice,
            and more—into a single, centralized inbox. This allows teams (e.g., customer support, sales, marketing)
            to manage conversations more efficiently, ensuring a seamless and consistent customer experience across
            all touchpoints.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            A <span className="font-medium text-gray-700">shared inbox in WhatsApp API</span> is a centralized
            platform where multiple team members can manage and respond to customer messages from a single WhatsApp
            Business account.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/782/848/non_2x/a-digital-illustration-of-five-business-professionals-both-male-and-female-standing-on-individual-circles-connected-by-a-complex-web-of-lines-representing-a-network-of-connections-free-vector.jpg"
            alt="Omni Channel Communication"
            className="w-full max-w-[500px] object-contain"
          />
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How It's Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features Of An Omni-Channel Team Inbox</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-800 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Logos Strip ── */}
      <section className="bg-[#e8f0e8] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8">
          {trustLogos.map((logo, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-center w-[130px] h-[80px]">
              <img src={logo.src} alt={logo.alt} className="max-h-[56px] max-w-[110px] object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Purpose Of An Omni-Channel Inbox ── */}
      <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          {/* Left: Phone image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80"
              alt="Mobile Omni Channel"
              className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
            />
          </div>
          {/* Right: Title + Green buttons */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Purpose Of An Omni-<br />Channel Inbox
            </h2>
            <div className="flex flex-col gap-5">
              {purposeItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#01ab4a] text-white text-[17px] font-semibold px-8 py-7 rounded-lg w-full"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Benefits Of Using An Omni-Channel Team Inbox
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
            {benefits.map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-5">
                  {b.emoji}
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Building Conversations That Build Business ── */}
      <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          {/* Left: Text */}
          <div className="flex-1">
            <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Building Conversations That<br />Build Business
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              ChatMentorz is a forward-looking conversational AI company offering smart chatbot solutions to modern businesses.
              The website will serve as a primary digital touchpoint, helping generate leads, explain the product, and position
              the brand strongly against competitors like UrbanChat and Botamation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#01ab4a] hover:bg-[#019040] text-white font-semibold text-[15px] px-6 py-3 rounded-md transition-colors"
            >
              Contact Us ↗
            </Link>
          </div>
          {/* Right: Social orbit diagram */}
          <div className="flex-1 flex justify-center">
            <SocialOrbit />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
