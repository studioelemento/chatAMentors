import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons ─────────────── */
const IconStore = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="8" y="24" width="48" height="32" rx="3" />
        <path d="M8 24 L16 8 L48 8 L56 24" />
        <line x1="32" y1="24" x2="32" y2="56" />
        <line x1="8" y1="40" x2="56" y2="40" />
    </svg>
);

const IconCatalog = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="12" y="8" width="40" height="48" rx="3" />
        <line x1="20" y1="22" x2="44" y2="22" />
        <line x1="20" y1="32" x2="44" y2="32" />
        <line x1="20" y1="42" x2="36" y2="42" />
        <rect x="20" y="12" width="10" height="8" rx="1" />
    </svg>
);

const IconPayment = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="8" y="16" width="48" height="32" rx="4" />
        <line x1="8" y1="26" x2="56" y2="26" />
        <rect x="14" y="34" width="12" height="6" rx="1" />
    </svg>
);

const IconAutomate = () => (
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

const IconPromote = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M8 20 L40 12 L40 52 L8 44 Z" />
        <line x1="40" y1="24" x2="52" y2="18" />
        <line x1="40" y1="40" x2="52" y2="46" />
        <circle cx="52" cy="18" r="4" />
        <circle cx="52" cy="46" r="4" />
        <line x1="20" y1="44" x2="20" y2="56" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const setupSteps = [
    {
        icon: <IconStore />,
        title: 'Set Up a WhatsApp Business Account',
        desc: 'Download WhatsApp Business, then create a profile with your company name, logo, description, and contact info.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconCatalog />,
        title: 'Create a Product Catalogue',
        desc: 'Use the "Catalogue" feature to upload products, including images, descriptions, prices, and any relevant product details. Organize products into categories if necessary.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
    {
        icon: <IconPayment />,
        title: 'Integrate Payment Options',
        desc: 'Enable payment options by integrating with supported payment gateways or linking to payment methods such as bank transfers, PayPal, or local payment solutions.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconAutomate />,
        title: 'Automate Responses',
        desc: 'Set up automated responses to common queries and order confirmations to streamline customer communication.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconPromote />,
        title: 'Promote Your WhatsApp Store',
        desc: 'Share your WhatsApp number on your website, social media platforms, and marketing campaigns to attract customers to your WhatsApp store.',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
    },
];

const ecommerceFeatures = [
    {
        title: 'Product Catalogue',
        desc: 'Display your products with images, descriptions, and prices directly in WhatsApp.',
    },
    {
        title: 'Direct Customer Interaction',
        desc: 'Engage with customers in real-time, answering queries and providing personalized recommendations.',
    },
    {
        title: 'Order and Payment Processing',
        desc: 'Streamline the purchasing process by allowing customers to place orders and make payments within the chat.',
    },
    {
        title: 'Personalized Shopping Experience',
        desc: 'Offer tailored shopping experiences based on customer preferences and previous interactions.',
    },
];

const advantages = [
    { emoji: '🤝', title: 'Direct Interaction with Customers', desc: 'Engage in real-time communication with clients to strengthen bonds and foster trust. Conversions are more likely as a result of the direct engagement.' },
    { emoji: '🛒', title: 'Easy Shopping', desc: 'A single app allows users to view, inquire about, and buy products, making the buying process easy and convenient.' },
    { emoji: '💰', title: 'Economical Sales Channel', desc: 'Use WhatsApp as a low-cost sales channel instead of relying on a large e-commerce platform or website.' },
    { emoji: '🎯', title: 'Increased Customization', desc: 'To boost client happiness and loyalty, make tailored product recommendations based on their questions and previous purchases.' },
    { emoji: '🌍', title: 'Greater Reach', desc: "Utilize WhatsApp's enormous user base to connect with more prospective clients, even those who might not use conventional e-commerce sites." },
    { emoji: '📈', title: 'Greater Rates of Conversion', desc: 'Compared to other online sales platforms, WhatsApp discussions frequently have higher conversion rates because of their ease of use and speed.' },
    { emoji: '⚡', title: 'Effective Customer Service', desc: 'Quickly and effectively respond to consumer inquiries to enhance the overall customer experience and shorten the time it takes to make a purchase.' },
    { emoji: '💵', title: 'Increases Revenue and Sales', desc: 'Businesses may boost sales and profitability by making the shopping experience more entertaining and accessible.' },
    { emoji: '📦', title: 'Simplified Order Processing', desc: 'The WhatsApp interface streamlines the sales process by allowing you to manage orders and monitor client interactions.' },
];

const whyChoosePoints = [
    'Convert WhatsApp into a revenue-generating channel',
    'Deliver a frictionless shopping experience inside WhatsApp',
    'Boost sales with personalized product recommendations',
    'Manage store, orders, and customer engagement from one dashboard',
];

const faqs = [
    {
        q: 'What is WhatsApp Commerce?',
        a: 'WhatsApp Commerce allows businesses to sell products and services directly through WhatsApp using catalogs, product messages, and integrated payment options (in some regions).',
    },
    {
        q: 'Do I need a Business Account?',
        a: 'Yes, you must use the WhatsApp Business App or the WhatsApp Business Platform (API) to access commerce features.',
    },
    {
        q: 'How do I create a product catalog?',
        a: 'In the WhatsApp Business App: Go to Business Tools > Catalog Tap Add Product/Service Add images, name, price, and description',
    },
    {
        q: 'How many products can I list in my catalog?',
        a: 'You can list up to 500 products or services in your catalog.',
    },
    {
        q: 'Can I integrate WhatsApp Commerce with my online store?',
        a: 'Yes, platforms like Shopify, WooCommerce, and Magento offer WhatsApp integrations. You can sync product catalogs and automate messages.',
    },
    {
        q: 'Are there any product restrictions?',
        a: "Yes. WhatsApp prohibits the sale of certain items (e.g., alcohol, tobacco, weapons, and adult content). Refer to the Commerce Policy for full details.",
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
export default function WhatsappCommerce() {
    return (
        <div className="font-sans">

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="WhatsApp Commerce Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">WhatsApp Commerce</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">WhatsApp Commerce</span>
                    </div>
                </div>
            </section>

            {/* ── Turn WhatsApp Into Your Online Store ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Turn WhatsApp Into Your<br />Online Store
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                        With ChatMentorz WhatsApp Commerce, you can transform your WhatsApp Business API into a full-fledged
                        online store. Showcase your products, share catalogs, and let customers browse, add to cart, and
                        purchase — all without leaving WhatsApp.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80"
                        alt="WhatsApp Commerce Store"
                        className="w-full max-w-[500px] object-contain rounded-xl"
                    />
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

            {/* ── How to Set Up E-commerce in WhatsApp ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How It's Work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How To Set Up E-Commerce In WhatsApp</h2>
                    </div>
                    {/* Row 1: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {setupSteps.slice(0, 3).map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className={`w-20 h-20 rounded-full ${s.bg} flex items-center justify-center ${s.color} mb-5`}>
                                    {s.icon}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider ${s.color} mb-1`}>{s.step}</span>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    {/* Row 2: 2 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {setupSteps.slice(3).map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className={`w-20 h-20 rounded-full ${s.bg} flex items-center justify-center ${s.color} mb-5`}>
                                    {s.icon}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider ${s.color} mb-1`}>{s.step}</span>
                                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-400 text-[14px] leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What Is E-Commerce In WhatsApp? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80"
                            alt="WhatsApp E-Commerce"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: title + green feature boxes */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            What Is E-Commerce<br />In WhatsApp?
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                            With WhatsApp's e-commerce capability, businesses can reach customers where they already spend their
                            time by using the chat service as a powerful e-commerce tool.
                        </p>
                        <div className="flex flex-col gap-5">
                            {ecommerceFeatures.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-6 rounded-lg w-full">
                                    <h4 className="text-[17px] font-semibold mb-1">{item.title}</h4>
                                    <p className="text-white/85 text-[14px] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WhatsApp's Business Advantages ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            WhatsApp's Business Advantages Of E-Commerce
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
                        {advantages.map((b, i) => (
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

            {/* ── Why Choose WhatsApp Commerce with ChatMentorz? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Choose WhatsApp Commerce<br />With ChatMentorz?
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
                            With WhatsApp Commerce by ChatMentorz, your customers can browse, buy, and pay — all in one conversation.
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
