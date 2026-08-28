import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrustLogos from './TrustLogos';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Solutions ─────────────── */
const IconFacebook = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="10" y="6" width="44" height="52" rx="6" />
        <path d="M36 58 V38 H42 L44 30 H36 V26 C36 23 37 22 40 22 H44 V14 H38 C30 14 28 19 28 26 V30 H22 L22 38 H28 V58" />
    </svg>
);

const IconInstagram = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="8" y="8" width="48" height="48" rx="12" />
        <circle cx="32" cy="32" r="12" />
        <circle cx="46" cy="18" r="3" fill="currentColor" />
    </svg>
);

const IconWhatsapp = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M32 6 C18 6 6 18 6 32 C6 37 7.5 42 10 46 L6 58 L18 54 C22 56.5 27 58 32 58 C46 58 58 46 58 32 C58 18 46 6 32 6Z" />
        <path d="M24 20 C24 20 22 20 22 24 C22 28 26 34 30 38 C34 42 40 44 42 44 C44 44 46 42 46 40 L44 36 L40 38 C40 38 36 34 34 30 C32 26 36 26 36 24 L34 20 Z" />
    </svg>
);

const IconTelegram = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="26" />
        <path d="M16 32 L46 20 L38 48 L30 36 Z" />
        <line x1="30" y1="36" x2="46" y2="20" />
    </svg>
);

const IconWebsite = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="6" y="10" width="52" height="40" rx="4" />
        <line x1="6" y1="20" x2="58" y2="20" />
        <circle cx="12" cy="15" r="2" fill="currentColor" />
        <circle cx="18" cy="15" r="2" fill="currentColor" />
        <circle cx="24" cy="15" r="2" fill="currentColor" />
        <line x1="20" y1="30" x2="44" y2="30" />
        <line x1="20" y1="38" x2="38" y2="38" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const omniSolutions = [
    {
        icon: <IconFacebook />,
        title: 'Facebook Automation',
        desc: 'Automate Messenger replies and comment responses. Share product catalogs, offers, or booking links instantly. Never miss a lead from your Facebook audience.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconInstagram />,
        title: 'Instagram Automation',
        desc: 'Auto-respond to story mentions, comments, and DMs. Deliver offers, product details, and campaigns instantly. Engage your followers with interactive chat flows.',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
    },
    {
        icon: <IconWhatsapp />,
        title: 'WhatsApp Automation',
        desc: 'Provide instant support, order updates, and personalized messages. Automate FAQs, appointment bookings, and payment links. Build stronger customer relationships with the official WhatsApp API.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconTelegram />,
        title: 'Telegram Automation',
        desc: 'Launch interactive Telegram bots without coding. Automate group or channel responses and customer support. Reach a growing audience of Telegram users seamlessly.',
        color: 'text-sky-500',
        bg: 'bg-sky-50',
    },
    {
        icon: <IconWebsite />,
        title: 'Website Automation',
        desc: 'Add a smart chatbot to your website to answer queries 24/7. Capture leads, provide instant support, and route visitors to the right information. Turn website traffic into qualified customers.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
];

const whatIsOmniChannel = [
    { title: 'Interact with customers wherever they are (email, SMS, social media, chat, phone, in-store, etc.)' },
    { title: 'Keep communication unified and contextual' },
    { title: 'Reduce manual intervention' },
    { title: 'Boost efficiency and personalization' },
];

const benefits = [
    {
        emoji: '🤝',
        title: 'Seamless Customer Experience',
        desc: 'Customers can switch between channels without repeating themselves. Automation ensures all channels are synchronized, maintaining context and history. Example: A customer starts a support request via chatbot and finishes it via phone without losing information.',
    },
    {
        emoji: '⚡',
        title: 'Faster Response Times',
        desc: 'Chatbots, autoresponders, and smart routing reduce wait times. Automated workflows can instantly process inquiries, orders, or support tickets. Benefit: Higher customer satisfaction and fewer abandoned carts or unresolved issues.',
    },
    {
        emoji: '💰',
        title: 'Lower Operational Costs',
        desc: 'Reduces the need for large support or sales teams. Automation handles routine queries, follow-ups, reminders, and transactions at scale. Cost savings can be reinvested in higher-value services or marketing.',
    },
    {
        emoji: '🎯',
        title: 'Personalization at Scale',
        desc: 'Automation tools use customer data to personalize messages, offers, and support. Every interaction feels custom, even though it\'s automated. Example: "Hi John, your order #12345 has been shipped" vs. generic updates.',
    },
    {
        emoji: '📊',
        title: 'Better Data Collection and Insights',
        desc: 'Centralized tracking across all channels gives you a 360° view of customer behavior. Analytics help identify trends, pain points, and opportunities for growth. Enables smarter decision-making based on real-time customer data.',
    },
    {
        emoji: '✨',
        title: 'Consistent Messaging and Branding',
        desc: 'Automated templates and workflows ensure uniform messaging across platforms. Reduces human error and brand inconsistency. Important for maintaining trust and professionalism across touchpoints.',
    },
];

const whyChoosePoints = [
    'One dashboard for all channels',
    'Drag-and-drop no-code chatbot builder',
    '24/7 instant replies and lead capture',
    'Seamless customer experience across platforms',
    'Trusted by 1,000+ businesses worldwide',
];

const faqs = [
    {
        q: 'What is Omni-Channel Automation?',
        a: 'Omni-channel automation is the use of automated tools and systems to deliver a consistent and connected customer experience across multiple communication channels—such as email, SMS, chat, social media, phone, and in-store—while keeping all interactions synced and contextual.',
    },
    {
        q: 'How is omni-channel different from multi-channel?',
        a: 'Multi-channel means offering multiple ways to interact (e.g., phone, email, chat), but they may not be connected. Omni-channel ensures all channels are integrated, allowing seamless switching and shared context between them.',
    },
    {
        q: 'Which channels can be automated in an omni-channel system?',
        a: 'Most customer-facing and back-office channels can be automated, including: Email SMS Live chat & chatbots Social media (Facebook, WhatsApp, Instagram, etc.) Phone (IVR & voice bots) Push notifications In-store kiosks/POS systems Web personalization',
    },
    {
        q: 'What are the main benefits of omni-channel automation?',
        a: 'Faster response times Improved customer experience Lower operational costs Better personalization Unified data and reporting 24/7 customer engagement Higher customer loyalty and retention',
    },
    {
        q: 'What types of businesses need omni-channel automation?',
        a: 'It benefits most industries, especially: E-commerce & Retail Banking & Finance Healthcare Travel & Hospitality SaaS & Tech Telecom Education Any business with multiple customer touchpoints can benefit.',
    },
    {
        q: 'Is it difficult to implement omni-channel automation?',
        a: 'It depends on the complexity of your current systems. Basic automation can be set up easily with tools like: HubSpot, Zoho, or ActiveCampaign for marketing Zendesk or Freshdesk for customer service Zapier or Make for cross-platform workflows Advanced setups may require technical integration and a clear customer journey strategy.',
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
export default function OmniChannelAutomation() {
    return (
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Omni Channel Automation Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">Omni Channel Automation</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">Omni Channel Automation</span>
                    </div>
                </div>
            </section>

            {/* ── 2. One Platform. Every Channel. Unlimited Possibilities. ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        One Platform. Every Channel.<br />Unlimited Possibilities.
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        With ChatMentorz's powerful no-code chatbots, you can manage conversations, capture leads, and drive sales across all your digital channels — all from a single platform. Stay connected with your customers wherever they are, without writing a single line of code.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                        alt="Omni Channel Platform"
                        className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ── 3. Client Logos Strip ── */}
            <TrustLogos />

            {/* ── 4. Our Omni Channel Solutions (Grid) ── */}
            <section className="bg-white py-20 px-6 lg:px-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How it's work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Omni Channel Solutions
                        </h2>
                    </div>
                    {/* Row 1: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {omniSolutions.slice(0, 3).map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className={`w-20 h-20 rounded-full ${s.bg} flex items-center justify-center ${s.color} mb-5`}>
                                    {s.icon}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    {/* Row 2: 2 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {omniSolutions.slice(3).map((s, i) => (
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

            {/* ── 5. What Is Omni-Channel Automation? (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1655393001768-d946c998b49f?w=500&q=80"
                            alt="Omni-Channel Automation Illustration"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            What Is Omni-Channel<br />Automation?
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                            It's the strategy and implementation of automation tools to:
                        </p>
                        <div className="flex flex-col gap-4">
                            {whatIsOmniChannel.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-5 rounded-lg w-full shadow-sm flex items-center gap-4">
                                    <h4 className="text-[15px] font-semibold m-0">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Benefits of Using an Omni Channel Automation ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Benefits of Using an Omni Channel Automation
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

            {/* ── 7. Why Chatmentorz Omni Channel Automation? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Chatmentorz Omni Channel Automation?
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
                            👉 With ChatMentorz Omni Channel Automation, your business is always connected, always responsive, and always ready to grow.
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
