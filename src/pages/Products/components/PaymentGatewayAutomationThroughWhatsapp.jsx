import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/Seo/Seo';
import TrustLogos from './TrustLogos';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Key Features ─────────────── */
const IconPayment = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="8" y="16" width="48" height="32" rx="4" />
        <line x1="8" y1="26" x2="56" y2="26" />
        <rect x="14" y="34" width="12" height="6" rx="1" />
        <circle cx="46" cy="37" r="4" />
    </svg>
);

const IconAutomation = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="14" y="22" width="36" height="28" rx="4" />
        <circle cx="24" cy="34" r="4" />
        <circle cx="40" cy="34" r="4" />
        <line x1="28" y1="44" x2="36" y2="44" />
        <line x1="32" y1="10" x2="32" y2="22" />
        <circle cx="32" cy="8" r="4" />
    </svg>
);

const IconOrder = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="12" y="8" width="40" height="48" rx="3" />
        <line x1="20" y1="22" x2="44" y2="22" />
        <line x1="20" y1="32" x2="44" y2="32" />
        <line x1="20" y1="42" x2="36" y2="42" />
        <path d="M20 16 L24 20 L32 12" />
    </svg>
);

const IconZeroHuman = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="20" r="10" />
        <path d="M16 56 C16 40 48 40 48 56" />
        <line x1="8" y1="8" x2="56" y2="56" strokeWidth="3" stroke="#ef4444" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const keyFeatures = [
    {
        icon: <IconPayment />,
        title: 'Seamless Payment Integration',
        desc: 'Connect your WhatsApp store with leading payment gateways. Collect secure payments directly inside the chat.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconAutomation />,
        title: 'End-to-End Sales Automation',
        desc: 'From browsing to checkout — the entire flow runs on autopilot. Eliminate manual effort, reduce errors, and scale faster.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconOrder />,
        title: 'Automated Order Management',
        desc: 'Instant order confirmations, invoices, and updates sent to customers. You only need to focus on shipping and delivery.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconZeroHuman />,
        title: 'Zero Human Intervention',
        desc: 'Smart chatbots handle queries, sales, and payments 24/7. Provide a smooth, consistent shopping experience for every customer.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
];

const howItWorksSteps = [
    { title: 'Customers browse your WhatsApp catalog or send a keyword.' },
    { title: 'The chatbot auto-generates product details, pricing, and an invoice.' },
    { title: 'Customers pay instantly via integrated payment gateways (UPI, cards, wallets, net banking).' },
    { title: 'Order confirmation and receipt are sent automatically.' },
    { title: 'You ship the order — that\'s it!' },
];

const driveMoreSales = [
    {
        emoji: '🔗',
        title: 'Automated Payment Link Generation',
        desc: 'Instantly generate and send dynamic payment links within WhatsApp conversations. Links are tied to specific transactions, order IDs, or customer profiles.',
    },
    {
        emoji: '🔒',
        title: 'Secure Payment Processing',
        desc: 'Payment links open secure, PCI-compliant gateways (Razorpay, Stripe, etc.). Supports UPI, credit/debit cards, net banking, wallets, etc.',
    },
    {
        emoji: '📡',
        title: 'Real-Time Payment Status Updates',
        desc: 'Instantly notify customers when: Payment is successful, Payment fails, Payment is pending or expired. Useful for automating order confirmations, shipping updates, or follow-ups.',
    },
    {
        emoji: '💳',
        title: 'Multi-Payment Method Support',
        desc: 'Collect payments without leaving WhatsApp using native WhatsApp Payment Integration for Indian numbers, and share payment links for customers in other countries.',
    },
    {
        emoji: '🤖',
        title: 'Chatbot Integration',
        desc: 'Use AI or rule-based bots to: Trigger payment flows automatically, Answer FAQs about payments, Handle retries or payment failures.',
    },
    {
        emoji: '🧾',
        title: 'Automated Receipts & Invoices',
        desc: 'Send digital receipts or invoices via WhatsApp as: Text summaries, PDF attachments, Downloadable links. Reduces manual follow-ups and improves post-purchase experience.',
    },
];

const whyChoosePoints = [
    'No app or website required — just WhatsApp',
    'Fully automated sales and payment collection',
    'Reduced manual workload → faster order processing',
    'Secure, instant transactions with trusted payment gateways',
    'Focus on growing your business while automation handles the rest',
];

const faqs = [
    {
        q: 'What is Payment Gateway Automation through WhatsApp?',
        a: 'It’s the integration of payment gateways (like Razorpay, Stripe, PayPal, etc.) with WhatsApp Business API or chatbot platforms to allow users to: Receive payment links Make payments securely Get automated confirmations and receipts …all within a WhatsApp conversation.',
    },
    {
        q: 'Is it safe to make payments via WhatsApp?',
        a: 'Yes, when implemented correctly. Payments are processed via secure, PCI-compliant payment gateways. WhatsApp only delivers the payment link—actual transactions happen on secure gateway pages.',
    },
    {
        q: 'How does it work for customers?',
        a: 'Customer interacts with the business on WhatsApp (e.g., placing an order or asking for a service). The system automatically generates a payment link and sends it. Customer clicks the link → completes payment on the secure gateway. WhatsApp bot confirms the payment instantly.',
    },
    {
        q: 'Which payment gateways support WhatsApp integration?',
        a: 'Popular gateways with WhatsApp integration capabilities include: Razorpay Stripe PayU Instamojo PayPal Cashfree PhonePe for Business Billdesk (for utilities) Many of these integrate through platforms like: Twilio WATI Zoko AiSensy Yellow.ai Gupshup',
    },
    {
        q: 'Do I need a WhatsApp Business API account to automate payments?',
        a: 'Yes. Automation is only possible through the WhatsApp Business API, not the regular WhatsApp Business app. You’ll also need a verified Facebook Business Manager account.',
    },
    {
        q: 'Can I accept UPI payments via WhatsApp automation?',
        a: 'Yes. Many Indian gateways (like Razorpay and Cashfree) offer UPI-based links that can be shared through WhatsApp and paid instantly using any UPI app.',
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
export default function PaymentGatewayAutomationThroughWhatsapp() {
    return (
         <>
        <SEO
      title="Payment Gateway Automation Through WhatsApp"
      description="Integrate payment gateways with WhatsApp Business API for seamless payments, instant receipts, and automated order management."
      canonical="https://chatamentors.com/payment-gateway-automation-through-whatsapp"
    />
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Payment Gateway Automation Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] mb-4 px-4">Payment Gateway Automation<br className="hidden md:block" /> through Whatsapp</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">Payment Gateway Automation through Whatsapp</span>
                    </div>
                </div>
            </section>

            {/* ── 2. Automate Sales. Collect Payments. Focus Only on Shipping. ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Automate Sales. Collect Payments.<br />Focus Only on Shipping.
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        With ChatMentorz Payment Gateway Automation, you can manage products, accept payments, and complete sales — all inside WhatsApp. No mobile app, no eCommerce website, and no human intervention required. Just WhatsApp automation handling everything while you focus on fulfilling orders.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80"
                        alt="Payment Gateway Automation"
                        className="w-full max-w-[500px] object-cover rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ── 3. Client Logos Strip ── */}
            <TrustLogos />

            {/* ── 4. Key Features (Grid) ── */}
            <section className="bg-white py-20 px-6 lg:px-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">How It's Work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Key Features
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            {/* ── 5. How It Works (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1655393001768-d946c998b49f?w=500&q=80"
                            alt="How Payment Gateway Works"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            How It Works
                        </h2>
                        <div className="flex flex-col gap-4">
                            {howItWorksSteps.map((item, i) => (
                                <div key={i} className="bg-[#01ab4a] text-white px-8 py-5 rounded-lg w-full shadow-sm flex items-center gap-4">
                                    <h4 className="text-[15px] font-semibold m-0">{item.title}</h4>
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
                        {driveMoreSales.map((b, i) => (
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

            {/* ── 7. Why Choose ChatMentorz Payment Automation? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Choose ChatMentorz Payment Automation?
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
                            👉 With Payment Gateway Automation through WhatsApp, your entire sales cycle is automated — from product discovery to payment — leaving you free to focus on shipping and scaling.
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
