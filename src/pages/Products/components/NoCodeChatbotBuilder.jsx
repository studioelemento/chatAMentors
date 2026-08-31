import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/Seo/Seo';
import TrustLogos from './TrustLogos';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Features ─────────────── */
const IconDragDrop = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="8" y="8" width="20" height="20" rx="3" />
        <rect x="36" y="36" width="20" height="20" rx="3" />
        <path d="M28 18 H46 V36" strokeDasharray="4 4" />
        <circle cx="46" cy="36" r="3" fill="currentColor" />
    </svg>
);

const IconOmniPower = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="10" />
        <path d="M32 8 V22 M32 42 V56 M8 32 H22 M42 32 H56" />
        <circle cx="32" cy="8" r="4" fill="currentColor" />
        <circle cx="32" cy="56" r="4" fill="currentColor" />
        <circle cx="8" cy="32" r="4" fill="currentColor" />
        <circle cx="56" cy="32" r="4" fill="currentColor" />
    </svg>
);

const IconScale = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M8 56 L24 40 L36 48 L56 16" strokeWidth="3" />
        <path d="M42 16 H56 V30" strokeWidth="3" />
    </svg>
);

const IconPossibilities = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M32 8 L40 24 L56 28 L44 40 L48 56 L32 48 L16 56 L20 40 L8 28 L24 24 Z" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const whatYouCanDo = [
    {
        icon: <IconDragDrop />,
        title: 'Drag & Drop Flow Builder',
        desc: 'Create advanced chatbots by visually connecting actions and responses. Build conversation journeys with ease, without coding.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconOmniPower />,
        title: 'Beyond WhatsApp: True Omnichannel Power',
        desc: 'Don’t limit automation to WhatsApp — deploy your chatbot across Instagram, Facebook Messenger, Telegram, and Websites. Manage all your customer conversations from a single unified platform.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconScale />,
        title: 'Scale with Ease',
        desc: 'Launch faster, test quickly, and optimize without developer dependency. Adapt and expand workflows as your business grows.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconPossibilities />,
        title: 'Endless Possibilities',
        desc: 'Automate FAQs, lead capture, product catalogs, appointment bookings, and payments. Personalize every interaction with dynamic responses and customer data.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
];

const keyFeaturesList = [
    { title: 'Drag-and-Drop Flow Builder' , desc: 'Easily design chatbot conversation flows using a visual interface. You can create messages, set conditions, add buttons, and define user paths with simple blocks—no coding required.' },
    { title: 'Multi-Step Conversations', desc: 'Build complex, multi-step chat flows that can: Qualify leads Guide users through a sales funnel Handle support queries Collect user data Great for creating seamless user journeys.' },
    { title: 'Pre-Built Templates', desc: 'Access a library of ready-to-use chatbot templates for different use cases like: Lead generation E-commerce support Appointment booking Order tracking Feedback collection' },
];

const benefits = [
    {
        emoji: '🚫',
        title: 'No Coding Required',
        desc: 'You don’t need any programming knowledge to build and launch a chatbot. Everything is done visually through drag-and-drop tools, making it accessible to marketers, sales reps, and support teams.',
    },
    {
        emoji: '⚡',
        title: 'Faster Deployment',
        desc: 'No-code platforms significantly reduce the time it takes to go live. You can build, test, and publish your chatbot in hours instead of days or weeks — helping you respond quickly to business needs or customer trends.',
    },
    {
        emoji: '💸',
        title: 'Cost-Effective',
        desc: 'Since you don’t need developers or IT teams, you save money on development and maintenance. Many platforms offer affordable plans for small businesses and scalable options for larger teams.',
    },
    {
        emoji: '🔧',
        title: 'Easy Customization & Flexibility',
        desc: 'Chatbots can be customized for your exact needs — lead generation, support, sales, or FAQs — and updated any time without technical help. You can tweak flows, add new messages, or change logic instantly.',
    },
    {
        emoji: '🧩',
        title: 'Reusable Templates & Flows',
        desc: 'Most platforms offer ready-made templates for industries like e-commerce, healthcare, real estate, and more. These can be customized quickly, helping you avoid building everything from scratch.',
    },
];

const whyChoosePoints = [
    'Zero coding required — build in minutes',
    'Omnichannel support (WhatsApp, Instagram, Facebook, Telegram, Website)',
    'Easy drag-and-drop design for complex workflows',
    'Scalable, customizable, and future-ready',
];

const faqs = [
    {
        q: 'What is a no-code chatbot builder?',
        a: 'A no-code chatbot builder is a platform that lets you create and manage chatbots without programming. It uses drag-and-drop interfaces and visual flow builders so that anyone—regardless of technical background—can build automated conversations for platforms like WhatsApp, Messenger, websites, Instagram, and more.',
    },
    {
        q: 'Do I need any technical skills to use it?',
        a: 'No. That’s the main advantage. You can build fully functional bots using visual tools, templates, and pre-built actions. If you can use a flowchart or form builder, you can use a no-code chatbot builder.',
    },
    {
        q: 'Where can I deploy my chatbot?',
        a: 'Most no-code platforms support deployment on: WhatsApp Website chat widgets Facebook Messenger Instagram DM Telegram SMS Some platforms also allow multi-channel deployment from a single dashboard.',
    },
    {
        q: 'Can I personalize the chatbot conversations?',
        a: 'Yes. You can use user attributes (like name, email, previous responses) to personalize the flow. Most platforms support dynamic variables to make each conversation feel human and relevant.',
    },
    {
        q: 'Does it support real-time human handover?',
        a: 'Yes. You can set up live agent handover when the bot cannot handle a query or when a user explicitly asks to talk to a human. Conversations can be routed to support teams in real-time through an inbox or CRM integration.',
    },
    {
        q: 'Is there support for multiple languages?',
        a: 'Yes. Many builders support multi-language chatbot flows, allowing you to serve users in different languages. You can either detect the language automatically or let users choose.',
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
export default function NoCodeChatbotBuilder() {
    return (
        <>
        <SEO
      title="No Code Chatbot Builder | Build AI Bots Easily"
      description="Build AI chatbots without coding using drag-and-drop tools. Automate conversations on WhatsApp, Instagram, Messenger, websites & more with chatAMentors."
      canonical="https://chatamentors.com/no-code-chatbot-builder"
    />
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="No Code Chatbot Builder Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] mb-4 px-4">No Code Chatbot Builder</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">No Code Chatbot Builder</span>
                    </div>
                </div>
            </section>

            {/* ── 2. Build Advanced Chatbots Without Writing a Single Line of Code ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Build Advanced Chatbots Without<br />Writing a Single Line of Code
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        With ChatMentorz’s No Code Chatbot Builder, you can design powerful, intelligent chatbots using our simple drag-and-drop flow builder. Just connect the dots, set up smart conversation journeys, and launch your chatbot in minutes — no technical skills required.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80"
                        alt="No Code Chatbot Builder"
                        className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ── 3. Client Logos Strip ── */}
            <TrustLogos />

            {/* ── 4. What You Can Do (Grid) ── */}
            <section className="bg-white py-20 px-6 lg:px-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Key Highlights</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Features of No Code Chatbot Builder
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whatYouCanDo.map((s, i) => (
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

            {/* ── 5. Features of No Code Chatbot Builder (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                            alt="No Code Chatbot Features"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Features of No Code Chatbot Builder
                        </h2>
                        <div className="flex flex-col gap-4">
                            {keyFeaturesList.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-5 rounded-lg w-full shadow-sm">
                                    <h4 className="text-[15px] font-semibold m-0">{item.title}</h4>
                                    <p className="text-[14px] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Benefits of No Code Chatbot Builder ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Key Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Benefits of No Code Chatbot Builder
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-4xl mb-5">
                                    {b.emoji}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{b.title}</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. Why Choose ChatMentorz No Code Builder? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Choose ChatMentorz No Code Builder?
                        </h2>
                        <ul className="flex flex-col gap-3 mb-8">
                            {whyChoosePoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
                                    <span className="text-[#01ab4a] text-xl font-bold leading-none mt-0.5">✅</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                            👉 With ChatMentorz’s No Code Chatbot Builder, you have the power to create, launch, and scale chatbots across all channels — smarter, faster, and without limits.
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
