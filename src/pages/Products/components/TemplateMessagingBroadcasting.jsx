import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import TrustLogos from './TrustLogos';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Features ─────────────── */
const IconBroadcast = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 24 L24 24 L40 12 V52 L24 40 L12 40 Z" fill="none" />
        <path d="M48 22 C52 26 52 38 48 42" />
        <path d="M54 16 C62 24 62 40 54 48" />
    </svg>
);

const IconInstagram = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="12" y="12" width="40" height="40" rx="10" />
        <circle cx="32" cy="32" r="10" />
        <circle cx="44" cy="20" r="3" fill="currentColor" />
    </svg>
);

const IconFacebook = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M36 60 V36 H44 L46 24 H36 V18 C36 15 38 14 41 14 H46 V4 H38 C28 4 24 10 24 18 V24 H18 V36 H24 V60" fill="none" />
    </svg>
);

const IconTelegram = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M8 30 L56 10 L44 54 L30 40 L22 48 V38 L40 22 L18 34 Z" fill="none" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const whatYouCanDo = [
    {
        icon: <IconBroadcast />,
        title: 'WhatsApp Broadcasting',
        desc: 'Send approved template messages to thousands of contacts instantly. Share updates, offers, order confirmations, and reminders. Nurture leads with personalized communication at scale.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconInstagram />,
        title: 'Instagram Messaging',
        desc: 'Reach out to followers via DMs with offers, product catalogs, or new arrivals. Automate nurturing campaigns to keep your community engaged.',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
    },
    {
        icon: <IconFacebook />,
        title: 'Facebook Broadcasting',
        desc: 'Deliver campaigns directly through Messenger. Announce promotions, events, or product launches. Re-engage followers who interacted with your page or posts.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconTelegram />,
        title: 'Telegram Broadcasting',
        desc: 'Push bulk notifications to groups, channels, or subscribers. Share instant updates, alerts, and promotions with your Telegram audience.',
        color: 'text-sky-500',
        bg: 'bg-sky-50',
    },
];

const keyFeaturesList = [
    { title: 'Pre-approved Message Templates' },
    { title: 'Dynamic Personalization' },
    { title: 'Bulk Messaging (Broadcasting)' },
    { title: 'Message Scheduling' },
    { title: 'Automation Integration' },
];

const benefits = [
    {
        emoji: '🚀',
        title: 'High Engagement',
        desc: 'Messaging apps like WhatsApp have 70–90% open rates',
    },
    {
        emoji: '🎯',
        title: 'Personalization at Scale',
        desc: 'Use variables to personalize.',
    },
    {
        emoji: '💰',
        title: 'Cost Efficiency',
        desc: 'Especially compared to voice or manual support calls.',
    },
    {
        emoji: '🛡️',
        title: 'Regulatory Compliance',
        desc: 'Approved templates reduce the risk of bans/spam flags.',
    },
    {
        emoji: '⚡',
        title: 'Automation Friendly',
        desc: 'Easily integrated into CRM or chatbot flows.',
    },
];

const whyChoosePoints = [
    'Communicate with thousands of customers at once',
    'Use pre-approved templates to ensure compliance (WhatsApp API, etc.)',
    'Personalize every broadcast with dynamic variables (name, order ID, etc.)',
    'Drive higher engagement and conversions through consistent messaging',
    'Manage all campaigns from a single, easy-to-use dashboard',
];

const faqs = [
    {
        q: 'What is a template message?',
        a: 'A template message is a pre-approved, structured message used for sending standardized content (e.g., order confirmations, payment reminders, updates) via platforms like WhatsApp Business API, SMS, or email—especially outside the 24-hour reply window.',
    },
    {
        q: 'What is broadcasting in messaging?',
        a: 'Broadcasting means sending the same message to multiple recipients at once, using approved templates, to communicate: Promotions Alerts Announcements Campaigns',
    },
    {
        q: 'Where can I use template messages?',
        a: 'You can use template messages across: WhatsApp Business API SMS platforms Email marketing tools Messenger / Telegram bots Voice automation (IVR systems).',
    },
    {
        q: 'Why do template messages need approval?',
        a: 'Messaging platforms like WhatsApp require template messages to be reviewed and approved before they can be used. This ensures that the content is not spammy or abusive and aligns with their policies for user safety and experience.',
    },
    {
        q: 'Can I personalize template messages?',
        a: 'Yes, personalization is a core feature of template messaging. Templates include variables that are dynamically replaced with user-specific information when the message is sent.',
    },
    {
        q: 'Is customer consent required before sending broadcasts?',
        a: 'The number of users you can reach in one broadcast depends on the platform you’re using. For instance, WhatsApp has a tiered messaging limit system: Tier 1 allows sending messages to 1,000 users per day, Tier 2 allows 10,000, and so on.',
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
export default function TemplateMessagingBroadcasting() {
    return (
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Template Messaging & Broadcasting Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] mb-4 px-4">Template Messaging & Broadcasting</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">Template Messaging & Broadcasting</span>
                    </div>
                </div>
            </section>

            {/* ── 2. Reach More. Engage Better. Sell Faster. ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Reach More. Engage Better.<br />Sell Faster.
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        With ChatMentorz’s broadcasting and template messaging, you can send personalized, high-volume messages across WhatsApp, Facebook, Instagram, and Telegram — all in one go. Keep your audience engaged, nurture leads, and drive more conversions with ease.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&q=80"
                        alt="Template Messaging & Broadcasting"
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
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How it's work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What You Can Do
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

            {/* ── 5. Key Features – Template Messaging & Broadcasting (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80"
                            alt="Key Features Template Messaging"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Key Features – Template Messaging & Broadcasting
                        </h2>
                        <div className="flex flex-col gap-4">
                            {keyFeaturesList.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-5 rounded-lg w-full shadow-sm flex items-center gap-4">
                                    <h4 className="text-[15px] font-semibold m-0">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Benefits of Using Template Messaging & Broadcasting ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Benefits of Using Template Messaging & Broadcasting
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

            {/* ── 7. Key Benefits Checklist ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Key Benefits
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
                            👉 With ChatMentorz Template Messaging & Broadcasting, you don’t just send messages — you build conversations that convert.
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
    );
}
