import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/Seo/Seo';
import TrustLogos from './TrustLogos';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Steps ─────────────── */
const IconUserPlus = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="28" cy="24" r="12" />
        <path d="M8 56 C8 42 20 38 28 38 C32 38 38 39 42 42" />
        <path d="M48 24 H60 M54 18 V30" strokeWidth="3" />
    </svg>
);

const IconTargetGoal = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="24" />
        <circle cx="32" cy="32" r="16" />
        <circle cx="32" cy="32" r="8" fill="currentColor" />
    </svg>
);

const IconTemplateEdit = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="12" y="10" width="40" height="44" rx="4" />
        <path d="M20 22 H44 M20 32 H36 M20 42 H30" strokeWidth="3" />
    </svg>
);

const IconScheduleClock = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="22" />
        <path d="M32 18 V32 L42 40" strokeWidth="3" />
    </svg>
);

const IconCrmPlug = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M16 20 H48 V44 H16 Z" />
        <path d="M24 12 V20 M40 12 V20 M32 44 V56" strokeWidth="3" />
    </svg>
);

const IconRocketLaunch = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M32 8 C44 8 52 20 52 36 L32 52 L12 36 C12 20 20 8 32 8 Z" fill="none" />
        <circle cx="32" cy="26" r="6" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const setupSteps = [
    {
        icon: <IconUserPlus />,
        title: 'Sign Up with ChatMentorz',
        desc: 'Start by registering with ChatMentorz and getting your WhatsApp Business API account verified. ChatMentorz will assist you through the entire onboarding process.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconTargetGoal />,
        title: 'Define Your Campaign Goals',
        desc: 'Determine the objective of your drip campaign—whether it’s to nurture leads, onboard new customers, or re-engage inactive users. Clear goals will help you design an effective campaign.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconTemplateEdit />,
        title: 'Create Message Templates',
        desc: 'ChatMentorz helps you create and get approval for message templates that will be used in the drip campaign. These templates should be tailored to each stage of the customer journey.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconScheduleClock />,
        title: 'Set Up Triggers and Schedules',
        desc: 'Using ChatMentorz’s platform, define the triggers that will initiate the drip campaign. Schedule when each message in the series will be sent.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
    {
        icon: <IconCrmPlug />,
        title: 'Integrate with CRM and Marketing Tools',
        desc: 'ChatMentorz integrates with your CRM to track customer data and trigger drip campaigns accurately.',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
    },
    {
        icon: <IconRocketLaunch />,
        title: 'Launch the Campaign',
        desc: 'Once everything is set up, launch your WhatsApp drip campaign through ChatMentorz. Monitor its progress and make adjustments as needed.',
        color: 'text-sky-500',
        bg: 'bg-sky-50',
    },
];

const possibleIntegrations = [
    { title: 'CRM Systems',
        desc:'Integrate with your CRM to automatically trigger drip campaigns based on customer actions, such as lead status updates or purchase history.',
     },
    { title: 'Email Marketing Tools', desc:'Combine WhatsApp drip campaigns with email marketing for a multi-channel approach to customer engagement.', },
    { title: 'Payment Gateways', desc:'Integrate payment gateways to send payment reminders or follow-up messages through the drip campaign, encouraging timely transactions.', },
];

const keyFeaturesList = [
    {
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="30" fill="#eff6ff" />
                <rect x="16" y="24" width="32" height="22" rx="3" fill="#3b82f6" />
                <path d="M16 26 L32 37 L48 26" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="44" cy="20" r="10" fill="#f59e0b" />
                <path d="M44 14 V20 L48 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        ),
        title: 'Automated Messaging Sequences',
        desc: 'Schedule a series of messages to be sent automatically based on customer interactions, ensuring consistent engagement.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="30" fill="#fff7ed" />
                <rect x="14" y="20" width="36" height="26" rx="4" fill="#f97316" />
                <rect x="20" y="26" width="24" height="14" rx="2" fill="#fff" />
                <circle cx="46" cy="46" r="8" fill="#10b981" />
                <path d="M43 46 L45 48 L49 44" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
        title: 'Multi-Stage Campaigns',
        desc: 'Design campaigns with multiple stages, from initial engagement to final conversion, each triggered by specific customer actions.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="30" fill="#f0fdf4" />
                <rect x="18" y="32" width="6" height="14" rx="1" fill="#3b82f6" />
                <rect x="28" y="22" width="6" height="24" rx="1" fill="#10b981" />
                <rect x="38" y="28" width="6" height="18" rx="1" fill="#f59e0b" />
                <circle cx="44" cy="22" r="10" stroke="#ef4444" strokeWidth="3" fill="none" />
                <line x1="44" y1="22" x2="44" y2="16" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                <line x1="44" y1="22" x2="49" y2="22" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ),
        title: 'Analytics And Reporting',
        desc: 'Track the performance of each drip campaign with detailed analytics, allowing for continuous improvement and optimization.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="30" fill="#fdf2f8" />
                <circle cx="32" cy="24" r="8" fill="#ec4899" />
                <path d="M18 46 C18 36 24 34 32 34 C40 34 46 36 46 46" fill="#ec4899" />
                <circle cx="48" cy="20" r="7" fill="#10b981" />
                <path d="M45 20 L47 22 L51 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
        title: 'Personalization',
        desc: 'Customize messages using customer data, making each interaction relevant and personalized.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="30" fill="#faf5ff" />
                <rect x="14" y="16" width="36" height="28" rx="4" fill="#a855f7" />
                <rect x="18" y="20" width="28" height="20" rx="2" fill="#fff" />
                <circle cx="32" cy="48" r="8" fill="#eab308" />
                <path d="M32 43 L29 48 H35 L32 53" fill="#fff" />
            </svg>
        ),
        title: 'Real-Time Triggers',
        desc: 'Automatically initiate drip campaigns in real-time based on customer behaviors, such as sign-ups, purchases, or inquiries.',
    },
    {
        icon: (
            <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="30" fill="#ecfeff" />
                <path d="M18 38 C18 30 24 28 28 28 C30 24 36 22 42 26 C48 26 50 32 48 38 C52 38 54 42 52 46 C50 50 44 50 42 50 H22 C18 50 14 46 16 42 C16 40 17 38 18 38 Z" fill="#06b6d4" />
                <circle cx="36" cy="36" r="10" fill="#10b981" />
                <path d="M33 36 L35 38 L39 34" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
        title: 'Compliance Management',
        desc: 'Ensure all messaging complies with WhatsApp’s guidelines, with chatmentorz helping manage template approvals and user opt-ins.',
    },
];

const whyChoosePoints = [
    'Sync with platforms like Shopify or WooCommerce to trigger campaigns',
    'Automatically follow up on abandoned carts or recent purchases',
    'Nurture leads with timed automated message sequences',
    'Increase customer retention with personalized re-engagement',
];

const faqs = [
    {
        q: 'What is a WhatsApp drip campaign?',
        a: 'A WhatsApp drip campaign is an automated sequence of pre-scheduled messages sent to users over time via WhatsApp. These messages are typically triggered by user actions—like signing up, making a purchase, or abandoning a cart—and are designed to guide the user through a customer journey such as onboarding, nurturing, or re-engagement.',
    },
    {
        q: 'How does a drip campaign differ from a broadcast?',
        a: 'Broadcasts are one-time messages sent to many users at once, while drip campaigns are automated and personalized message flows sent over time to individual users based on their behavior or lifecycle stage. Drip campaigns are more strategic and conversion-focused.',
    },
    {
        q: 'Can I run a WhatsApp drip campaign without code?',
        a: 'Yes! Many no-code platforms like WATI, AiSensy, Tellephant, and Zoko offer drag-and-drop interfaces where you can create WhatsApp drip sequences using templates, triggers, and delays—without writing a single line of code.',
    },
    {
        q: 'What kind of messages can I include in a drip campaign?',
        a: 'You can send: Welcome messages Onboarding instructions Product education Offers and discounts Follow-ups Payment reminders Feedback or review requests These messages can include text, images, videos, buttons, or even PDFs—depending on your use case.',
    },
    {
        q: 'Are there restrictions on sending WhatsApp drip messages?',
        a: 'Yes. All drip messages must be pre-approved template messages if sent outside WhatsApp’s 24-hour messaging window. You must also have user consent (opt-in) before initiating the drip sequence. Violating these rules can lead to account restrictions.',
    },
    {
        q: 'Do users need to opt-in to receive drip campaigns?',
        a: 'Yes. WhatsApp requires that users explicitly opt-in to receive messages from your business. This opt-in can be collected via website forms, chat widgets, QR codes, or during transactions—depending on how your business is set up.',
    },
];

/* ─────────────── Social Orbit Diagram ─────────────── */
const socialNodes = [
    { icon: <FaFacebook size={28} />, label: 'facebook', angle: 90 },
    { icon: <FaCalendarAlt size={28} />, label: 'calender', angle: 30 },
    { icon: <FaFacebookMessenger size={28} />, label: 'messanger', angle: 330 },
    { icon: <FaTwitter size={28} />, label: 'twitter', angle: 270 },
    { icon: <FaLinkedin size={28} />, label: 'linked in', angle: 210 },
    { icon: <FaGlobe size={28} />, label: 'web', angle: 150 },
];

function SocialOrbit() {
    const cx = 200, cy = 200, r = 140;
    return (
        <div className="relative w-[400px] h-[400px] flex-shrink-0">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <circle cx={cx} cy={cy} r={r} stroke="#bbb" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
                <circle cx={cx} cy={cy} r={r * 0.48} stroke="#ccc" strokeWidth="1" fill="none" />
                <circle cx={cx + r * Math.cos((45 * Math.PI) / 180)} cy={cy - r * Math.sin((45 * Math.PI) / 180)} r="5" fill="#ef4444" />
                <circle cx={cx + r * Math.cos((230 * Math.PI) / 180)} cy={cy - r * Math.sin((230 * Math.PI) / 180)} r="5" fill="#3b82f6" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
                <img src={logo1} alt="Chatmentorz" className="w-16 h-16 object-contain rounded-full" />
            </div>
            {socialNodes.map(({ icon, label, angle }) => {
                const rad = ((angle - 90) * Math.PI) / 180;
                const x = cx + r * Math.cos(rad);
                const y = cy + r * Math.sin(rad);
                return (
                    <div
                        key={label}
                        className="absolute flex flex-col items-center gap-1"
                        style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        <div className="text-gray-900">{icon}</div>
                        <span className="text-[11px] text-gray-700 font-medium whitespace-nowrap capitalize">{label}</span>
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
export default function OtherFeatures() {
    return (
        <>  
          <SEO
      title="Other AI Features"
      description="Discover ChatAMentors’ advanced AI features: No-Code Chatbot Builder, Live Agent Chat, AI Analytics, Drip Campaigns & more."
      canonical="https://chatamentors.com/other-ai-features"
    />
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Other Features Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] mb-4 px-4">Other Features</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">Other Features</span>
                    </div>
                </div>
            </section>

            {/* ── 2. WhatsApp Drip Campaign: Automate Customer Engagement ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        WhatsApp Drip Campaign: Automate Customer Engagement with ChatMentorz
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        A WhatsApp drip campaign is a sequence of automated messages that are sent to users over time in response to particular behaviors or triggers. Through the timely delivery of pertinent material, this approach enables companies to engage clients, nurture leads, and increase conversions. Businesses can easily set up and manage WhatsApp drip campaigns with ChatMentorz, guaranteeing ongoing consumer engagement without the need for manual involvement.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80"
                        alt="WhatsApp Drip Campaign"
                        className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ── 3. Client Logos Strip ── */}
            <TrustLogos />

            {/* ── 4. How to Set It Up Using ChatMentorz (Grid) ── */}
            <section className="bg-white py-20 px-6 lg:px-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How it's work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How to Set It Up Using ChatMentorz
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {setupSteps.map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className={`w-20 h-20 rounded-full ${s.bg} flex items-center justify-center ${s.color} mb-5`}>
                                    {s.icon}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. Features of WhatsApp Drip Campaigns (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80"
                            alt="Features of WhatsApp Drip Campaigns"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Possible Integrations
                        </h2>
                        <div className="flex flex-col gap-5">
                            {possibleIntegrations.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-6 rounded-lg w-full shadow-sm">
                                    <h4 className="text-[15px] font-semibold m-1">{item.title}</h4>
                                    <p className="text-white/85 text-[14px] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Features of WhatsApp Drip Campaigns ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Features</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Features of WhatsApp Drip Campaigns
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
                        {keyFeaturesList.map((b, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center mb-5">
                                    {b.icon}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{b.title}</h3>
                                <p className="text-gray-600 text-[14px] leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. What Is a WhatsApp Drip Campaign? Checklist ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            What Is a WhatsApp Drip Campaign?
                        </h2>
                        <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                            A WhatsApp drip campaign is a series of automated messages sent to customers over time, based on specific triggers or actions they take. ChatMentorz enables businesses to set up and manage these campaigns seamlessly, ensuring continuous customer engagement without manual intervention.
Sync with platforms like Shopify or WooCommerce to trigger campaigns based on customer behavior, like abandoned carts or recent purchases.
                        </p>
                        <Link
                            to="/contact-us"
                            className="inline-flex items-center gap-2 bg-[#01ab4a] hover:bg-[#019040] text-white font-semibold text-[15px] px-6 py-3 rounded-md transition-colors shadow-sm"
                        >
                            Contact Us ↗
                        </Link>
                    </div>
                    {/* Right: Social Orbit Diagram */}
                    <div className="flex-1 flex justify-center">
                        <SocialOrbit />
                    </div>
                </div>
            </section>

            {/* ── 8. FAQ Accordion Section ── */}
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
        </> 
    );
}
