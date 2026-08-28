import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrustLogos from './TrustLogos';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaCalendarAlt, FaSkype } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Features ─────────────── */
const IconTrigger = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 20 L32 8 L52 20 L52 44 L32 56 L12 44 Z" />
        <path d="M32 24 L32 40 M24 32 L40 32" />
    </svg>
);

const IconMultiKey = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="12" y="12" width="20" height="20" rx="3" />
        <rect x="32" y="32" width="20" height="20" rx="3" />
        <path d="M32 22 H44 V32" />
        <path d="M22 32 V44 H32" />
    </svg>
);

const IconChannel = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="16" />
        <circle cx="14" cy="18" r="6" />
        <circle cx="50" cy="18" r="6" />
        <circle cx="32" cy="54" r="6" />
        <path d="M18 22 L24 26 M46 22 L40 26 M32 48 L32 42" />
    </svg>
);

const IconWorkflow = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="8" y="24" width="16" height="16" rx="2" />
        <rect x="40" y="10" width="16" height="16" rx="2" />
        <rect x="40" y="38" width="16" height="16" rx="2" />
        <path d="M24 32 H32 V18 H40 M32 32 V46 H40" />
    </svg>
);

const IconTagging = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 12 H28 L52 36 L36 52 L12 28 Z" />
        <circle cx="22" cy="22" r="3" fill="currentColor" />
    </svg>
);

const IconRouting = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 32 H36 M36 32 L26 22 M36 32 L26 42" />
        <circle cx="46" cy="18" r="8" />
        <circle cx="46" cy="46" r="8" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const keyFeatures = [
    {
        icon: <IconTrigger />,
        title: 'Keyword-Based Triggers',
        desc: 'Automatically detect predefined keywords or phrases in customer messages to instantly trigger responses, workflows, or actions. Example: User types “refund” → system replies with refund policy or routes to the support team.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconMultiKey />,
        title: 'Multi-Keyword Support',
        desc: 'Support for multiple keywords or synonyms per trigger, improving accuracy and handling different customer expressions for the same intent. Example: Keywords like "price", "cost", "how much" can all trigger a pricing response.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
    {
        icon: <IconChannel />,
        title: 'Channel-Specific Automation',
        desc: 'Set up keyword triggers that work independently across channels (WhatsApp, Facebook, Instagram, Web Chat, etc.), allowing contextual automation.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconWorkflow />,
        title: 'Workflow Integration',
        desc: 'Keywords can launch chatbot flows, CRM actions, or automation sequences—like tagging a user, starting a drip campaign, or escalating to a human agent.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconTagging />,
        title: 'Auto-Tagging & Segmentation',
        desc: 'Automatically tag users or assign them to segments based on their keyword usage. Enables precise targeting for follow-ups or remarketing.',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
    },
    {
        icon: <IconRouting />,
        title: 'Conversation Routing',
        desc: 'Route conversations to the appropriate department or agent based on keyword intent (e.g., “technical issue” → Tech Support, “appointment” → Bookings team).',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
    },
];

const omnichannelCards = [
    {
        title: 'WhatsApp Automation',
        desc: 'Instantly reply with pricing, catalogues, forms, or booking options when customers use preset keywords. Example: Typing “catalog” sends your full product list automatically.',
    },
    {
        title: 'Instagram Automation',
        desc: 'Automate keyword replies on DMs and story mentions. Example: A customer messages “offer” and instantly receives your latest deals.',
    },
    {
        title: 'Facebook Automation',
        desc: 'Set keyword triggers for comments and Messenger chats. Example: Typing “demo” in Messenger can send an auto-response with a booking link.',
    },
];

const benefits = [
    {
        emoji: '⚡',
        title: '24/7 Instant Response Across All Platforms',
    },
    {
        emoji: '🎯',
        title: 'Zero Missed Inquiries → Higher Lead Capture',
    },
    {
        emoji: '💬',
        title: 'Personalized And Consistent Brand Communication',
    },
    {
        emoji: '📉',
        title: 'Reduced Workload For Customer Support Teams',
    },
    {
        emoji: '📈',
        title: 'Increased Conversions Through Faster Replies',
    },
];

const whyChoosePoints = [
    'Unified automation across WhatsApp, Instagram, Facebook, and Website Chatbots',
    'Easy setup of keyword rules with no coding required',
    'Scalable solutions trusted by 1,000+ businesses worldwide',
];

const faqs = [
    {
        q: 'What is Smart Keyword Automation?',
        a: 'Smart Keyword Automation is a feature that automatically triggers specific actions—such as sending a message, assigning a tag, routing a chat, or launching a workflow—based on keywords typed by the user during a conversation.',
    },
    {
        q: 'How does it work?',
        a: 'The system scans incoming messages for predefined keywords or phrases. When a match is found, it automatically: Sends a relevant reply Triggers a chatbot flow Assigns the chat to a specific team or agent Applies tags or labels Starts a campaign or sequence',
    },
    {
        q: 'What are some examples of keywords?',
        a: 'Examples of keywords and responses: “Price” → Sends product pricing details “Order status” → Launches order tracking workflow “Support” → Routes to a live agent “Book appointment” → Triggers scheduling form',
    },
    {
        q: 'Can I use multiple keywords for one trigger?',
        a: 'Yes. You can define multiple keywords (e.g., “price”, “cost”, “how much”) to trigger the same response or workflow, making the automation more flexible.',
    },
    {
        q: 'Can I add synonyms or keyword variations?',
        a: 'Absolutely. You can use synonyms, variations, or common typos to ensure better recognition and automation accuracy.',
    },
    {
        q: 'Can keywords trigger different workflows in different channels?',
        a: 'Yes. In most omnichannel CRMs (like Chatmentorz), keyword triggers can be set per channel (WhatsApp, Instagram, Web Chat, etc.), allowing contextual responses.',
    },
];

/* ─────────────── Social Orbit Diagram ─────────────── */
const socialNodes = [
    { icon: <FaFacebook size={28} />, label: 'facebook', angle: 90 },
    { icon: <FaCalendarAlt size={28} />, label: 'calender', angle: 30 },
    { icon: <FaFacebookMessenger size={28} />, label: 'messanger', angle: 330 },
    { icon: <FaTwitter size={28} />, label: 'twitter', angle: 270 },
    { icon: <FaLinkedin size={28} />, label: 'linked in', angle: 210 },
    { icon: <FaSkype size={28} />, label: 'skype', angle: 150 },
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
export default function SmartKeywordAutomation() {
    return (
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Smart Keyword Automation Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">Smart Keyword Automation</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">Smart Keyword Automation</span>
                    </div>
                </div>
            </section>

            {/* ── 2. Intro Section ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Engage Smarter. Respond Faster.<br />Convert Better.
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        With Smart Keyword Automation, ChatMentorz Pvt. Ltd. empowers businesses to deliver instant and personalized customer experiences across all major digital channels. By setting up simple keyword-based triggers, you can automate conversations, capture leads, share product details, and even close sales — all without human intervention.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                        alt="Smart Keyword Automation Vector"
                        className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ── 3. Client Logos Strip ── */}
            <TrustLogos />

            {/* ── 4. Key Features Section (3-Column Grid) ── */}
            <section className="bg-white py-20 px-6 lg:px-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How It Works</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Features Of Smart Keyword Automation
                        </h2>
                        <p className="text-gray-500 max-w-3xl mx-auto text-[15px] leading-relaxed">
                            Customers interact with your business by typing specific keywords (e.g., “price”, “demo”, “buy”). Our automation engine detects these keywords and instantly responds with the right message, form, or action.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {keyFeatures.map((s, i) => (
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

            {/* ── 5. Omnichannel Keyword Automation Section (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80"
                            alt="Omnichannel Keyword Automation"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Omnichannel Keyword<br />Automation
                        </h2>
                        <div className="flex flex-col gap-5">
                            {omnichannelCards.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-6 rounded-lg w-full shadow-sm">
                                    <h4 className="text-[17px] font-semibold mb-1">{item.title}</h4>
                                    <p className="text-white/85 text-[14px] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Benefits Section (Custom Grid: 3 Top, 2 Bottom) ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Key Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Benefits Of Using An Smart Keyword Automation
                        </h2>
                    </div>

                    {/* Row 1: 3 Items */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14 mb-12">
                        {benefits.slice(0, 3).map((b, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-4xl mb-5">
                                    {b.emoji}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{b.title}</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 2 Items Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 max-w-3xl mx-auto">
                        {benefits.slice(3).map((b, i) => (
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

            {/* ── 7. Why Choose ChatMentorz Section ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Choose ChatMentorz?
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
                            👉 With Smart Keyword Automation, your brand is always available, always responsive, and always customer-ready.
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
