import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Features ─────────────── */
const IconAutomate = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="14" y="22" width="36" height="28" rx="4" />
        <circle cx="24" cy="34" r="4" />
        <circle cx="40" cy="34" r="4" />
        <line x1="28" y1="44" x2="36" y2="44" />
        <line x1="32" y1="10" x2="32" y2="22" />
        <circle cx="32" cy="8" r="4" />
    </svg>
);

const IconTeam = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="24" r="8" />
        <path d="M16 56 C16 40 48 40 48 56" />
        <circle cx="16" cy="32" r="6" />
        <path d="M4 56 C4 46 20 46 24 50" />
        <circle cx="48" cy="32" r="6" />
        <path d="M60 56 C60 46 44 46 40 50" />
    </svg>
);

const IconInsights = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M8 56 L56 56" />
        <path d="M16 56 L16 32 M32 56 L32 16 M48 56 L48 40" />
        <path d="M8 40 L24 24 L40 32 L56 8" />
    </svg>
);

const IconContext = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 18 C12 14 16 10 24 10 H40 C48 10 52 14 52 18 V34 C52 38 48 42 40 42 H26 L14 52 V42 C12 40 12 36 12 34 Z" />
        <circle cx="24" cy="26" r="3" fill="currentColor" />
        <circle cx="32" cy="26" r="3" fill="currentColor" />
        <circle cx="40" cy="26" r="3" fill="currentColor" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const whatAiMateCanDo = [
    {
        icon: <IconAutomate />,
        title: 'Automate Repetitive Workflows',
        desc: 'Delegate routine tasks like replying to FAQs, lead qualification, and follow-ups. Free up your team to focus on high-value activities.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconTeam />,
        title: 'Seamless Team Collaboration',
        desc: 'AI Mate works alongside your sales, support, and marketing teams. Assigns leads, prioritizes tickets, and ensures nothing slips through the cracks.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconInsights />,
        title: 'Smart Insights & Reporting',
        desc: 'Track performance, spot trends, and get actionable insights. Make data-driven decisions faster with AI-powered dashboards.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconContext />,
        title: 'Context-Aware Conversations',
        desc: 'Understands customer queries and responds intelligently. Provides personalized experiences across WhatsApp, Instagram, Facebook, Telegram, and Websites.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    }
];

const availableActions = [
    { title: 'Summarise Conversations in Teambox' },
    { title: 'Generate Replies' },
    { title: 'Improve & Rephrase' },
    { title: 'Make it Shorter' },
    { title: 'Fix Spelling & Grammar' },
];

const benefits = [
    {
        emoji: '🕒',
        title: '24/7 Instant Customer Support',
        desc: 'AI Agents are always available — day or night — to answer customer queries instantly. Reduces wait times, boosts responsiveness, and improves customer satisfaction.',
    },
    {
        emoji: '⚡',
        title: 'Faster Response & Resolution Times',
        desc: 'Handles routine and repetitive inquiries (e.g., order status, pricing, FAQs) within seconds. Frees up human agents to focus on complex or high-value conversations.',
    },
    {
        emoji: '✨',
        title: 'Consistent, Error-Free Communication',
        desc: 'Delivers standardized responses across all channels — WhatsApp, web chat, social media, etc. Minimizes human errors and maintains brand tone and accuracy.',
    },
    {
        emoji: '💰',
        title: 'Cost Efficiency',
        desc: 'Reduces the need for a large support team by automating 60–80% of customer interactions. Lowers operational costs while scaling support for growing customer bases.',
    },
    {
        emoji: '📈',
        title: 'Drives Sales Through Smart Recommendations',
        desc: 'AI Agents can act as virtual shopping assistants, guiding users to relevant products, promotions, or services based on preferences and behavior. Increases conversion rates and average order value.',
    },
    {
        emoji: '🧠',
        title: 'Intelligent Learning & Adaptation',
        desc: 'Uses Natural Language Processing (NLP) and machine learning to understand customer intent, context, and sentiment. Improves over time based on real interactions and training.',
    },
];

const whyChoosePoints = [
    '10x productivity boost for your team',
    'Always-on, AI-driven customer engagement',
    'Deep integration with Chatmentorz ecosystem',
    'Reduces manual effort & accelerates growth',
    'Scales effortlessly with your business'
];

const faqs = [
    {
        q: 'What is an AI Agent?',
        a: 'An AI Agent is an advanced artificial intelligence system that not only answers questions like a traditional chatbot, but can also understand context, perform tasks, and automate workflows autonomously across different platforms.',
    },
    {
        q: 'How is an AI Agent different from a chatbot?',
        a: 'While traditional chatbots follow strict, rule-based paths and predefined scripts, AI Agents use machine learning and natural language processing to understand intent, learn from interactions, and handle open-ended conversations naturally.',
    },
    {
        q: 'What can an AI Agent do?',
        a: 'AI Agents can automate repetitive workflows, reply to customer inquiries instantly, generate lead summaries, offer smart product recommendations, fix spelling/grammar, and integrate seamlessly with your human team.',
    },
    {
        q: 'Are AI Agents available 24/7?',
        a: 'Yes! AI Agents do not require breaks or sleep. They provide instant, round-the-clock support to ensure your customers are always attended to, regardless of the time zone.',
    },
    {
        q: 'Can I customize the AI Agent for my business needs?',
        a: 'Absolutely. AI Agents can be tailored to match your brand\'s voice, integrated with your specific workflows, and trained on your unique products and FAQs.',
    },
    {
        q: 'Can the AI Agent escalate to a human agent?',
        a: 'Yes, if an AI Agent encounters a highly complex query or an issue requiring human empathy, it can seamlessly hand over the entire context and conversation history to a human support agent.',
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
export default function AiAgent() {
    return (
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="AI Agent Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">AI AGENT</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">AI AGENT</span>
                    </div>
                </div>
            </section>

            {/* ── 2. Intro Section ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Boost Your Team Productivity 10x with AI Mate
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        Meet AI Mate, your smart digital teammate — tightly integrated with the ChatMentorz product ecosystem. From handling customer conversations to automating repetitive tasks, AI Mate works 24/7 to supercharge your business efficiency.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                        alt="AI Agent Interface Mockup"
                        className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ── 3. Client Logos Strip ── */}
            <section className="bg-[#edf4ed] py-10 px-6">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <p className="text-gray-600 font-medium mb-6 uppercase tracking-wider text-xs">Trusted by leading brands worldwide</p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {trustLogos.map((logo, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-center w-[130px] h-[80px]">
                                <img src={logo.src} alt={logo.alt} className="max-h-[56px] max-w-[110px] object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. What AI Mate Can Do (Grid) ── */}
            <section className="bg-white py-20 px-6 lg:px-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Capabilities</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What AI Mate Can Do
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whatAiMateCanDo.map((s, i) => (
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

            {/* ── 5. Available Actions & Prompts (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1655393001768-d946c998b49f?w=500&q=80"
                            alt="Available Actions and Prompts"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Features</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Available Actions & Prompts
                        </h2>
                        <div className="flex flex-col gap-4">
                            {availableActions.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-5 rounded-lg w-full shadow-sm flex items-center gap-4">
                                    <span className="text-xl">✨</span>
                                    <h4 className="text-[17px] font-semibold m-0">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Benefits of Using an AI Agent ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Benefits of Using an AI Agent
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

            {/* ── 7. Why AI Mate? Section ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why AI Mate?
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
                            👉 With AI Mate, your team gets a powerful AI Agent that never sleeps, never misses a lead, and helps you scale faster than ever before.
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
