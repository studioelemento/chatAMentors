import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrustLogos from './TrustLogos';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Features ─────────────── */
const IconHub = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="20" />
        <path d="M32 12 L32 20 M32 44 L32 52 M12 32 L20 32 M44 32 L52 32" />
        <circle cx="32" cy="32" r="8" />
    </svg>
);

const IconAI = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="16" y="20" width="32" height="24" rx="4" />
        <circle cx="24" cy="30" r="3" />
        <circle cx="40" cy="30" r="3" />
        <path d="M24 38 Q32 44 40 38" />
        <line x1="32" y1="12" x2="32" y2="20" />
        <circle cx="32" cy="10" r="2" />
    </svg>
);

const IconCDP = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="24" r="8" />
        <path d="M16 48 Q32 32 48 48" />
        <circle cx="16" cy="24" r="4" />
        <path d="M8 40 Q16 32 24 40" />
        <circle cx="48" cy="24" r="4" />
        <path d="M40 40 Q48 32 56 40" />
    </svg>
);

const IconSales = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 48 L24 32 L36 40 L52 16" />
        <polyline points="40 16 52 16 52 28" />
        <rect x="8" y="8" width="48" height="48" rx="4" />
    </svg>
);

const IconMarketing = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M24 40 L12 28 L32 8 L52 28 L40 40" />
        <line x1="32" y1="8" x2="32" y2="56" />
        <circle cx="32" cy="56" r="4" />
    </svg>
);

const IconAgents = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M32 8 L48 24 L32 40 L16 24 Z" />
        <path d="M16 40 L32 56 L48 40" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const features = [
    {
        icon: <IconHub />,
        title: 'Omnichannel Messaging Hub',
        desc: 'Engage with customers across all popular chat platforms from one dashboard, ensuring fast, consistent, and personalized responses.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconAI />,
        title: 'AI-Powered Chatbots',
        desc: 'Deploy intelligent automation for 24/7 customer support, lead qualification, product recommendations, and booking assistance.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
    {
        icon: <IconCDP />,
        title: 'Social CRM (CDP)',
        desc: 'Build unified customer profiles by tracking behavior and interactions across platforms to enable hyper-personalized messaging and retargeting.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconSales />,
        title: 'Sales & OMO Commerce',
        desc: 'Automatically route leads to assigned sales reps, track in-store and online conversions, and boost performance with detailed revenue attribution.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconMarketing />,
        title: 'Marketing Automation',
        desc: 'Run broadcast campaigns, abandoned cart reminders, loyalty programs, and gamified promotions to maximize engagement and conversions.',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
    },
    {
        icon: <IconAgents />,
        title: 'Custom AI Agents',
        desc: 'Deploy role-specific bots including Smart Shopping Agents, Loyalty Agents, and Customer Service Bots tailored to your business goals.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
    },
];

const benefits = [
    {
        title: 'Unified Customer Engagement',
        desc: 'Connect and manage conversations from WhatsApp, Facebook, Instagram, LINE, WeChat, and Web Chat in one platform. Eliminate silos between teams and channels for faster, more consistent customer experiences.',
    },
    {
        title: '24/7 AI Automation',
        desc: 'Reduce response times and support costs with AI-powered chatbots. Automate common tasks like FAQs, appointment booking, product recommendations, and order tracking.',
    },
    {
        title: 'Boost Sales with Conversational Commerce',
        desc: 'Turn chats into conversions through product sharing, instant replies, and OMO (Online-Merge-Offline) sales routing. Assign customers to sales agents, track revenue per rep or store, and increase close rates with personalized service.',
    },
    {
        title: 'Smarter Marketing Automation',
        desc: 'Launch targeted broadcast campaigns on WhatsApp and social channels. Re-engage customers with cart reminders, coupons, gamified promotions, and behavior-triggered messaging.',
    },
    {
        title: 'Complete Customer Profiles (Social CDP)',
        desc: 'Build 360° views of customers by aggregating data across all touchpoints. Enable personalized recommendations, loyalty programs, and segmented engagement.',
    },
    {
        title: 'Scalable for Any Business Size',
        desc: 'From SMBs to large enterprises, Chatmentorz scales with your team and customer volume. Cloud-based, with flexible API and third-party integrations.',
    },
];

const whyChoosePoints = [
    'One pipeline for all customer interactions',
    'Reduce lead leakage with automation',
    'AI chatbots ensure 24/7 engagement',
    'Faster conversions with smart lead nurturing',
    'Centralized control for sales, support & marketing',
];

const faqs = [
    {
        q: 'What is ChatMentorz Omnichannel CRM?',
        a: 'ChatMentorzis an AI-powered omnichannel CRM platform that unifies customer conversations across messaging channels like WhatsApp, Facebook, Instagram, LINE, WeChat, and web chat. It helps businesses manage customer support, marketing campaigns, and sales activities from a single dashboard.',
    },
    {
        q: 'Who is ChatMentorz designed for?',
        a: 'It’s ideal for retailers, eCommerce brands, service providers, and enterprises looking to streamline customer communication, automate workflows, and increase conversion rates through messaging platforms.',
    },
    {
        q: 'Which messaging channels does ChatMentorz support?',
        a: 'ChatMentorz supports: WhatsApp Business API Facebook Messenger Instagram Direct LINE WeChat Website Live Chat',
    },
    {
        q: 'Can I respond to all channels from one place?',
        a: 'Yes, ChatMentorz consolidates all customer conversations into a single, unified inbox for seamless management and faster response times.',
    },
    {
        q: 'Does ChatMentorz offer chatbots?',
        a: 'Yes. ChatMentorz includes AI-driven chatbots that can: Answer FAQs Recommend products Automate bookings Route queries to human agents Trigger responses based on keywords or behaviors.',
    },
    {
        q: 'Can I create custom AI agents?',
        a: 'Absolutely. You can deploy custom AI agents for specific use cases like customer service, loyalty, booking, marketing campaigns, and more.',
    },
];

/* ─────────────── Social Orbit Diagram ─────────────── */
const socialNodes = [
    { icon: <FaFacebook size={28} />, label: 'Facebook', angle: 90 },
    { icon: <FaFacebookMessenger size={28} />, label: 'Messenger', angle: 30 },
    { icon: <FaTwitter size={28} />, label: 'Twitter', angle: 330 },
    { icon: <FaGlobe size={28} />, label: 'Web', angle: 270 },
    { icon: <FaLinkedin size={28} />, label: 'Linked In', angle: 210 },
    { icon: <FaCalendarAlt size={28} />, label: 'Calendar', angle: 150 },
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
export default function OmniChannelCRM() {
    return (
        <div className="font-sans">

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Omnichannel CRM Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">ChatMentorz Omni Channel CRM</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">ChatMentorz Omni Channel CRM</span>
                    </div>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        All-in-One CRM Powered<br />by Smart Automation
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                        Managing customer conversations across multiple platforms can be overwhelming. With ChatMentorz Omni Channel CRM, you get a unified pipeline that brings together all your customer interactions, powered by AI and intelligent chatbots. From WhatsApp to Instagram, Facebook, Telegram, and your Website — everything is streamlined into one powerful system.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                        alt="Omni Channel CRM Dashboard"
                        className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ── Trust Logos Strip ── */}
            <TrustLogos />

            {/* ── Key Features & Capabilities ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Capabilities</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features & Capabilities</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((s, i) => (
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

            {/* ── Why ChatMentorz? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: OMNI CHANNEL MARKETING diagram / image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                            alt="Omni Channel Marketing"
                            className="w-full max-w-[450px] rounded-full object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Text + 3 Solid Green Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why ChatMentorz?</h2>
                        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                            From retail to healthcare and luxury goods, businesses like Timberland, OSIM, LEGO (Kidsland), and FILA have leveraged Chatmentorz to boost conversions by up to 7× and generate six-figure revenues through integrated commerce campaigns.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="bg-[#01ab4a] text-white p-6 rounded-xl text-left shadow-lg">
                                <h3 className="text-[17px] font-bold mb-2">Drive Sales with Conversations</h3>
                                <p className="text-white/90 text-[14px] leading-relaxed">
                                    Merge marketing and sales by turning casual chats into completed purchases.
                                </p>
                            </div>
                            <div className="bg-[#01ab4a] text-white p-6 rounded-xl text-left shadow-lg">
                                <h3 className="text-[17px] font-bold mb-2">Reduce Support Costs</h3>
                                <p className="text-white/90 text-[14px] leading-relaxed">
                                    Automate FAQs, order tracking, and appointment bookings with smart workflows.
                                </p>
                            </div>
                            <div className="bg-[#01ab4a] text-white p-6 rounded-xl text-left shadow-lg">
                                <h3 className="text-[17px] font-bold mb-2">Real-Time Insights</h3>
                                <p className="text-white/90 text-[14px] leading-relaxed">
                                    Monitor agent performance, campaign results, and customer behavior in one intuitive dashboard.
                                </p>
                            </div>
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
                            Benefits of ChatMentorz Omnichannel CRM
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-5">
                                    {['🌐', '🤖', '🛒', '🎯', '👤', '📈'][i]}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{b.title}</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose ChatMentorz CRM? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why ChatMentorz CRM?
                        </h2>
                        <ul className="flex flex-col gap-3 mb-8">
                            {whyChoosePoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
                                    <span className="text-[#01ab4a] text-xl font-bold leading-none mt-0.5">✅</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                            With Chatmentorz Omni Channel CRM, you don't just manage leads — you convert them faster, smarter, and at scale.
                        </p>
                        <Link
                            to="/contact-us"
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
            <section className="bg-gray-50 py-20 px-6 lg:px-16">
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
