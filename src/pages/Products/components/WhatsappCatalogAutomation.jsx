import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Features ─────────────── */
const IconEngage = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 20 L32 8 L52 20 L52 44 L32 56 L12 44 Z" />
        <path d="M32 24 L32 40 M24 32 L40 32" />
    </svg>
);

const IconCart = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="22" cy="52" r="4" fill="currentColor" />
        <circle cx="46" cy="52" r="4" fill="currentColor" />
        <path d="M8 12 H16 L24 40 H50 L56 20 H20" />
    </svg>
);

const IconShopping = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="14" y="20" width="36" height="36" rx="4" />
        <path d="M24 20 V14 A8 8 0 0 1 40 14 V20" />
    </svg>
);

const IconNoApp = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="18" y="10" width="28" height="44" rx="4" />
        <path d="M28 16 H36" />
        <circle cx="32" cy="48" r="2" fill="currentColor" />
    </svg>
);

const IconAutomation = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="16" />
        <path d="M32 10 V16 M32 48 V54 M10 32 H16 M48 32 H54" />
    </svg>
);

const IconInteraction = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 18 C12 14 16 10 24 10 H40 C48 10 52 14 52 18 V34 C52 38 48 42 40 42 H26 L14 52 V42 C12 40 12 36 12 34 Z" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const whyCatalogCards = [
    {
        icon: <IconEngage />,
        title: 'Engage Customers Where They Prefer',
        desc: 'With 80% of customers favoring messaging apps, WhatsApp lets you connect with them instantly, improving engagement and response rates.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconCart />,
        title: 'Reduce Abandoned Carts & Boost Sales',
        desc: 'Unlike traditional websites, WhatsApp reduces drop-offs by offering a frictionless shopping experience, leading to higher conversions.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
    {
        icon: <IconShopping />,
        title: 'Seamless In-App Shopping',
        desc: 'Customers can browse products, place orders, and complete transactions without ever leaving WhatsApp, ensuring a smooth and hassle-free experience.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconNoApp />,
        title: 'No App or Website Required',
        desc: 'Shoppers can explore your catalog and place orders directly through WhatsApp, eliminating barriers like app downloads or account registrations.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconAutomation />,
        title: 'Fully Automated for Efficiency',
        desc: 'AI-powered automation handles inquiries, order processing, and confirmations, reducing the need for human intervention and saving you time.',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
    },
    {
        icon: <IconInteraction />,
        title: 'Instant Customer Interaction',
        desc: 'Deliver quick replies, suggest relevant products, and provide real-time assistance, enhancing customer satisfaction and loyalty.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
    },
];

const targetBusinesses = [
    {
        title: 'E-commerce',
        desc: 'Showcase featured products, accept orders via WhatsApp, and sync seamlessly with your existing online store.',
    },
    {
        title: 'Restaurants & Cafes',
        desc: 'Allow customers to browse your menu and place orders instantly for dine-in, takeaway, or home delivery.',
    },
    {
        title: 'Grocery Stores',
        desc: 'Eliminate unstructured and lengthy WhatsApp chats by enabling customers to check product availability and place orders effortlessly.',
    },
    {
        title: 'Jewelry Brands',
        desc: 'Let customers explore collections, chat for recommendations, and track orders all within WhatsApp.',
    },
];

const keyFeatures = [
    {
        emoji: '📦',
        title: 'Easy Product Management',
        desc: 'Upload and manage products effortlessly with a user-friendly interface that automatically syncs with your WhatsApp catalog.',
    },
    {
        emoji: '📊',
        title: 'Automated Inventory Management',
        desc: 'Eliminate customer disputes by automatically stopping sales on WhatsApp when a product is out of stock. Inventory is auto-tracked for seamless management.',
    },
    {
        emoji: '📋',
        title: 'End-to-End Order Management',
        desc: 'Easily manage all WhatsApp orders through a powerful, user-friendly web-based dashboard. Approve, reject, void, edit, and collaborate on orders seamlessly.',
    },
    {
        emoji: '💳',
        title: 'Seamless Payment Collection',
        desc: 'Collect payments without leaving WhatsApp using native WhatsApp Payment Integration for Indian numbers, and share payment links for customers in other countries.',
    },
    {
        emoji: '🎯',
        title: 'Auto-Sell Products via Meta Paid Ads',
        desc: 'Start promoting your products on Instagram and Facebook with ads that direct customers to WhatsApp, automating the sales process seamlessly.',
    },
    {
        emoji: '💬',
        title: 'Chat & Buy on WhatsApp with Assisted Commerce',
        desc: 'Let customers view product details on WhatsApp, chat with human agents to clarify their doubts, and have agents place orders on their behalf using the assisted commerce model.',
    },
];

const whyChoosePoints = [
    'No app, no website needed — just WhatsApp',
    'Automated selling = less manual work, more conversions',
    'Personalized shopping experience for every customer',
    'Manage sales and customers from one unified dashboard',
];

const faqs = [
    {
        q: 'What is WhatsApp Catalog Automation?',
        a: 'WhatsApp Catalog Automation allows businesses to automatically share, update, and manage product listings through WhatsApp chats using AI chatbots or CRM triggers. Customers can view products, prices, images, and descriptions without leaving the app.',
    },
    {
        q: 'How does WhatsApp Catalog Automation work?',
        a: 'It works by integrating your product catalog with a chatbot or automation system. Based on user inputs (keywords, buttons, or menu selections), the bot automatically: Sends product listings Recommends items Shares product cards Provides links to the checkout or website.',
    },
    {
        q: 'How is it different from a traditional shared inbox?',
        a: 'Yes, in most cases. Catalog automation typically requires the WhatsApp Business API, which supports structured messaging formats like Multi-Product Messages (MPM) and Single Product Messages (SPM).',
    },
    {
        q: 'What types of products can I showcase?',
        a: 'You can list: Physical goods (e.g., clothing, electronics) Digital products (e.g., e-books, courses) Services (e.g., salon, appointments, consulting) As long as they comply with WhatsApp’s Commerce Policy.',
    },
    {
        q: 'Can customers place orders directly from the catalog?',
        a: 'Customers can browse products and send inquiries or orders via chat. Full checkout and payment typically require: A connected eCommerce site A payment integration (e.g., Razorpay, Stripe, or native WhatsApp Pay in supported regions)',
    },
    {
        q: 'Can I automate product recommendations?',
        a: 'Yes. Using chat automation, you can: Recommend products based on keywords or preferences Create guided product flows (e.g., select category → view items) Trigger recommendations via customer behavior or responses',
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
export default function WhatsappCatalogAutomation() {
    return (
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Whatsapp Catalog Automation Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">Whatsapp Catalog Automation</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">Whatsapp Catalog Automation</span>
                    </div>
                </div>
            </section>

            {/* ── 2. Intro Section ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Sell Smarter. Sell Faster.<br />Sell on WhatsApp.
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        With ChatMentorz WhatsApp Catalog Automation, you can manage products, showcase offerings, and automate sales — all directly inside WhatsApp. No need for a mobile app or eCommerce website; just WhatsApp and smart automation that drives results.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=500&q=80"
                        alt="WhatsApp Catalog Interface Mockup"
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

            {/* ── 4. Why WhatsApp Catalog Automation? (3-Column Grid) ── */}
            <section className="bg-white py-20 px-6 lg:px-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How it works</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why WhatsApp Catalog Automation?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyCatalogCards.map((s, i) => (
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

            {/* ── 5. Target Businesses Section (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&q=80"
                            alt="Target Businesses for WhatsApp Catalog"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            The Perfect Fit for Any Business<br />Selling Products
                        </h2>
                        <div className="flex flex-col gap-4">
                            {targetBusinesses.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-5 rounded-lg w-full shadow-sm">
                                    <h4 className="text-[17px] font-semibold mb-1">{item.title}</h4>
                                    <p className="text-white/85 text-[14px] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. Key Features That Drive More Sales ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Features</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Key Features That Drive More Sales
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
                        {keyFeatures.map((b, i) => (
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

            {/* ── 7. Why Choose WhatsApp Catalog Automation Section ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Choose WhatsApp Catalog Automation?
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
                            👉 With ChatMentorz WhatsApp Catalog Automation, you don’t just chat with your customers — you sell to them, automatically.
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
