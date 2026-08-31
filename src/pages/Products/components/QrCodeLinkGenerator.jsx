import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/Seo/Seo';
import TrustLogos from './TrustLogos';
import { Home, ChevronRight, Plus, Minus } from 'lucide-react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';
import logo1 from '../../../assets/img-Home/Chatmentorz.png';

/* ─────────────── Inline SVG Icons for Features ─────────────── */
const IconLink = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M26 38 L38 26" />
        <path d="M30 18 L36 12 C42 6 52 6 58 12 C64 18 64 28 58 34 L52 40" />
        <path d="M34 46 L28 52 C22 58 12 58 6 52 C0 46 0 36 6 30 L12 24" />
    </svg>
);

const IconQr = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="8" y="8" width="20" height="20" rx="2" />
        <rect x="36" y="8" width="20" height="20" rx="2" />
        <rect x="8" y="36" width="20" height="20" rx="2" />
        <rect x="14" y="14" width="8" height="8" fill="currentColor" />
        <rect x="42" y="14" width="8" height="8" fill="currentColor" />
        <rect x="14" y="42" width="8" height="8" fill="currentColor" />
        <rect x="36" y="36" width="8" height="8" fill="currentColor" />
        <rect x="48" y="48" width="8" height="8" fill="currentColor" />
    </svg>
);

const IconTrack = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="24" />
        <path d="M32 16 V32 L42 42" />
        <path d="M12 32 H8 M56 32 H52 M32 12 V8 M32 56 V52" />
    </svg>
);

const IconOmni = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="32" cy="32" r="8" />
        <circle cx="16" cy="16" r="6" />
        <circle cx="48" cy="16" r="6" />
        <circle cx="16" cy="48" r="6" />
        <circle cx="48" cy="48" r="6" />
        <line x1="22" y1="20" x2="26" y2="26" />
        <line x1="42" y1="20" x2="38" y2="26" />
        <line x1="22" y1="44" x2="26" y2="38" />
        <line x1="42" y1="44" x2="38" y2="38" />
    </svg>
);

/* ─────────────── Data ─────────────── */
const whatYouCanDo = [
    {
        icon: <IconLink />,
        title: 'Smart Links for Every Campaign',
        desc: 'Generate unique links to share in ads, emails, or social media. Drive users directly into chat conversations and boost engagement.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: <IconQr />,
        title: 'QR Codes That Convert',
        desc: 'Place QR codes on flyers, banners, receipts, or stores. Customers scan → start chatting instantly on their preferred channel.',
        color: 'text-green-600',
        bg: 'bg-green-50',
    },
    {
        icon: <IconTrack />,
        title: 'Track & Optimize',
        desc: 'Measure clicks, scans, and conversations generated. Optimize campaigns with data-driven insights.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: <IconOmni />,
        title: 'Omnichannel Ready',
        desc: 'Works seamlessly with WhatsApp, Instagram, Facebook Messenger, Telegram, and Website Chatbots.',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
];

const keyFeaturesList = [
    { title: 'Dynamic & Static QR Code Generation' },
    { title: 'Custom Link Shortening' },
    { title: 'Click & Scan Tracking' },
    { title: 'Custom QR Code Design' },
    { title: 'Payment QR & Link Integration' },
];

const benefits = [
    {
        emoji: '🌐',
        title: 'Seamless Offline-to-Online Connectivity',
        desc: 'Instantly connect offline materials (flyers, posters, packaging) to digital content. Customers simply scan or click to access websites, apps, videos, menus, or forms.',
    },
    {
        emoji: '💳',
        title: 'Simplified Digital Payments',
        desc: 'Generate UPI or payment links as QR codes for quick, contactless payments. Useful in shops, invoices, or WhatsApp automation for collecting money.',
    },
    {
        emoji: '🎯',
        title: 'Smart Marketing Campaigns',
        desc: 'Track clicks and scans to analyze engagement. Add UTM parameters to short links for campaign performance tracking in Google Analytics.',
    },
    {
        emoji: '⚡',
        title: 'Smarter Marketing Automation',
        desc: 'Launch targeted broadcast campaigns on WhatsApp and social channels. Re-engage customers with cart reminders, coupons, gamified promotions, and behavior-triggered messaging.',
    },
    {
        emoji: '📊',
        title: 'Real-Time Analytics',
        desc: 'See who’s clicking or scanning your QR codes/links: Location, Device type, Time and frequency. Helps measure success and optimize content or placement.',
    },
    {
        emoji: '🎨',
        title: 'Branding & Customization',
        desc: 'Customize QR codes with logos, colors, and design to match your brand. Create branded short URLs (e.g., yourbrand.to/sale) to increase trust and recognition.',
    },
];

const whyChoosePoints = [
    'Simplifies customer entry points',
    'Boosts campaign performance with direct engagement',
    'Provides measurable results & insights',
    'Omnichannel support for maximum reach',
];

const faqs = [
    {
        q: 'What is a QR Code & Link Generator?',
        a: 'It’s a tool or software that allows users to: Create QR codes linked to specific URLs or actions Generate short, trackable links for easy sharing Often includes analytics, customization, and branding features.',
    },
    {
        q: 'What can I link a QR code or short link to?',
        a: 'You can link to almost anything, such as: Websites or landing pages Payment pages Product pages WhatsApp chats or messages Google Forms or Calendars PDFs or downloads App download links.',
    },
    {
        q: 'Are QR codes safe to use?',
        a: 'Yes, but you should: Use trusted QR generators Avoid scanning unknown or suspicious codes Ensure the linked content is secure (HTTPS) For payments, always verify the URL and sender.',
    },
    {
        q: 'Can I customize QR codes with logos and colors?',
        a: 'Yes. Many generators allow: Custom colors Company logos or icons in the center Shape and design tweaks for branding Just make sure the design doesn’t interfere with scannability.',
    },
    {
        q: 'Can QR codes be used for payments?',
        a: 'Yes. You can generate QR codes that link to: UPI payment requests (India) Razorpay, Stripe, PayPal payment links WhatsApp payment flows Great for retail counters, e-commerce, and service payments.',
    },
    {
        q: 'Do QR codes or short links expire?',
        a: 'Static QR codes: Never expire, but content can be outdated. Dynamic QR codes / short links: Can be set to expire or deactivate. Always check the settings of your generator tool.',
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
export default function QrCodeLinkGenerator() {
    return (
         <>
        <SEO
      title="QR Code & Link Generator"
      description="Generate QR codes and smart links for WhatsApp, payments, marketing campaigns, and seamless offline-to-online connectivity."
      canonical="https://chatamentors.com/qr-code-link-generator"
    />
        <div className="font-sans">

            {/* ── 1. Hero ── */}
            <section className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100">
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="QR Code & Link Generator Background" className="w-full h-full object-cover object-center opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] mb-4 px-4">QR Code & Link Generator</h1>
                    <div className="flex items-center space-x-2 text-[15px] font-medium">
                        <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
                            <Home size={16} className="mr-1.5 mb-[2px]" />
                            Home
                        </Link>
                        <ChevronRight size={16} className="text-gray-500" />
                        <span className="text-[#01ab4a]">QR Code & Link Generator</span>
                    </div>
                </div>
            </section>

            {/* ── 2. One Tool, Endless Ways to Reach Your Audience ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14 bg-white">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        One Tool, Endless Ways<br />to Reach Your Audience
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                        With ChatMentorz QR Code & Link Generator, you can instantly create smart, trackable entry points that connect your customers directly to conversations across WhatsApp, Instagram, Facebook, Telegram, and Websites.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1595079672139-cee2568b9711?w=500&q=80"
                        alt="QR Code & Link Generator"
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

            {/* ── 5. Key Features – QR Code & Link Generator (2-Column with Green Cards) ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80"
                            alt="QR Code & Link Features"
                            className="w-full max-w-[450px] rounded-xl object-cover shadow-md"
                        />
                    </div>
                    {/* Right: Title + Green Feature Cards */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Key Features – QR Code & Link Generator
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

            {/* ── 6. Benefits of a QR Code & Link Generator ── */}
            <section className="bg-white py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#01ab4a] text-[15px] font-semibold mb-2">Benefits</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Benefits of a QR Code & Link Generator
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

            {/* ── 7. Why Use ChatMentorz Generator? ── */}
            <section className="bg-[#edf4ed] py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: Text & Bullet Checklist */}
                    <div className="flex-1">
                        <p className="text-[#01ab4a] text-[14px] font-semibold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Use ChatMentorz Generator?
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
                            👉 With ChatMentorz QR Code & Link Generator, every scan and click is an opportunity to start a meaningful conversation.
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
