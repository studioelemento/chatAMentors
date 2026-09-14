import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Calendar, Clock, ArrowRight, User, Tag, Sparkles } from 'lucide-react';
import SEO from '../../components/Seo/Seo';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Complete Guide to WhatsApp Commerce: From Catalog Setup to Automated Checkout',
    slug: 'complete-guide-to-whatsapp-commerce',
    category: 'WhatsApp Automation',
    summary: 'Discover how modern retail and D2C brands are turning WhatsApp into an interactive, 24/7 revenue channel with native catalogs, cart synchronization, and instant payment links.',
    date: '2026-03-10',
    readTime: '6 min read',
    author: 'ChatMentorz Growth Team',
    tag: 'WhatsApp Commerce',
    productLink: '/products/whatsapp-commerce',
    productLabel: 'Explore WhatsApp Commerce Solution',
  },
  {
    id: 2,
    title: 'How No-Code AI Chatbots Slash Customer Support Response Time by 80%',
    slug: 'how-no-code-ai-chatbots-reduce-support-time',
    category: 'AI & Chatbots',
    summary: 'Learn the architectural strategies and conversation flows that empower support teams to resolve routine queries instantly without human intervention while improving CSAT scores.',
    date: '2026-03-05',
    readTime: '5 min read',
    author: 'AI Solutions Specialist',
    tag: 'Chatbot Builder',
    productLink: '/products/no-code-chatbot-builder',
    productLabel: 'Build Your Free Chatbot',
  },
  {
    id: 3,
    title: 'Mastering WhatsApp Broadcasts: Best Practices to Maximize Open Rates and Avoid Spam Flags',
    slug: 'mastering-whatsapp-broadcasts-best-practices',
    category: 'Marketing',
    summary: 'Sending targeted WhatsApp campaigns requires finesse. Here is how leading brands segment audiences, craft approved templates, and achieve up to 98% message open rates safely.',
    date: '2026-02-28',
    readTime: '7 min read',
    author: 'Customer Success Team',
    tag: 'Broadcasting',
    productLink: '/products/template-messaging-broadcasting',
    productLabel: 'Learn About Broadcast Messaging',
  },
  {
    id: 4,
    title: 'Omni-Channel Team Inbox: Unifying WhatsApp, Instagram, and Web Inquiries in One Screen',
    slug: 'omnichannel-team-inbox-unifying-conversations',
    category: 'CRM & Growth',
    summary: 'Eliminate missed messages and fragmented support conversations by routing chats across multiple channels to designated agents with smart tagging and collision detection.',
    date: '2026-02-20',
    readTime: '5 min read',
    author: 'Operations Architect',
    tag: 'Omni-Channel Inbox',
    productLink: '/products/omni-channel-team-inbox',
    productLabel: 'Discover Team Inbox Features',
  },
  {
    id: 5,
    title: 'Accepting WhatsApp Payments Seamlessly: Complete Playbook for Indian Businesses',
    slug: 'accepting-whatsapp-payments-seamlessly-playbook',
    category: 'WhatsApp Automation',
    summary: 'A step-by-step breakdown of configuring payment gateways inside WhatsApp chats so customers can place orders and complete UPI transactions without leaving the app.',
    date: '2026-02-14',
    readTime: '6 min read',
    author: 'Fintech Integration Lead',
    tag: 'Payment Automation',
    productLink: '/products/payment-gateway-automation-through-whatsapp',
    productLabel: 'See Payment Gateway Setup',
  },
  {
    id: 6,
    title: 'AI Agents vs Rule-Based Bots: What Truly Delivers Higher ROI in 2026?',
    slug: 'ai-agents-vs-rule-based-bots-roi-comparison',
    category: 'AI & Chatbots',
    summary: 'Compare generative AI conversational agents against structured decision trees to understand which model fits your sales pipeline, support complexity, and growth goals.',
    date: '2026-02-08',
    readTime: '8 min read',
    author: 'Chief AI Strategist',
    tag: 'AI Agents',
    productLink: '/products/ai-agent',
    productLabel: 'Meet the ChatMentorz AI Agent',
  },
];

const CATEGORIES = ['All', 'WhatsApp Automation', 'AI & Chatbots', 'Marketing', 'CRM & Growth'];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ChatMentorz Business Automation & WhatsApp Marketing Blog",
    "url": "https://chatamentors.com/blogs",
    "description": "Expert articles, tutorials, and strategic insights on WhatsApp automation, AI chatbots, omnichannel CRM, and business growth.",
    "publisher": {
      "@type": "Organization",
      "name": "ChatMentorz",
      "url": "https://chatamentors.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chatamentors.com/Chatmentorz.png"
      }
    },
    "blogPost": BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.summary,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "ChatMentorz"
      },
      "url": `https://chatamentors.com/blogs#${post.slug}`,
      "mainEntityOfPage": `https://chatamentors.com/blogs#${post.slug}`,
      "keywords": `${post.category}, ${post.tag}, WhatsApp automation, ChatMentorz`
    }))
  };

  return (
    <>
      <SEO
        title="Blogs & Insights | ChatMentorz - AI Automation & WhatsApp Marketing"
        description="Explore expert articles, tutorials, and insights on WhatsApp Business automation, no-code AI chatbots, omnichannel CRM, and conversational marketing strategies."
        canonical="https://chatamentors.com/blogs"
        keywords={[
          "WhatsApp automation blog",
          "AI chatbot marketing guide",
          "WhatsApp Business CRM strategies",
          "conversational commerce tips",
          "customer support automation",
          "WhatsApp broadcast best practices",
          "no code chatbot tutorials",
          "ChatMentorz blogs"
        ]}
        schema={blogSchema}
      />

      <div className="w-full bg-[#f8fafc]">
        {/* Breadcrumb & Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-b from-gray-100 to-white border-b border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-500 mb-6">
              <Link to="/" className="flex items-center hover:text-primary transition-colors">
                <Home size={15} className="mr-1.5" />
                Home
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-primary font-semibold">Blogs & Articles</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4">
              <Sparkles size={14} />
              <span>Knowledge Base & Industry Insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight max-w-4xl mx-auto leading-tight mb-6">
              AI Automation & WhatsApp Marketing Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Practical guides, case studies, and actionable strategies to accelerate your business with AI chatbots, CRM, and WhatsApp Business API.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-10">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-md shadow-green-500/20'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                id={post.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-8">
                  {/* Meta pill & read time */}
                  <div className="flex items-center justify-between gap-2 mb-4 text-xs font-semibold text-gray-500">
                    <span className="inline-flex items-center gap-1 bg-green-50 text-primary px-3 py-1 rounded-full border border-green-100">
                      <Tag size={12} />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Card Footer with internal link */}
                <div className="px-8 pb-8 pt-4 border-t border-gray-50 bg-gray-50/50">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5 font-medium">
                      <User size={13} />
                      {post.author}
                    </span>
                    <time dateTime={post.date} className="flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </time>
                  </div>

                  <Link
                    to={post.productLink}
                    className="inline-flex items-center text-sm font-bold text-primary group-hover:text-green-700 transition-colors gap-1.5"
                    aria-label={`${post.productLabel} for ${post.title}`}
                  >
                    <span>{post.productLabel}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SEO Conversion / Lead Magnet Section */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
              Ready to Automate Your WhatsApp Sales & Customer Support?
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of growing businesses using ChatMentorz to send broadcasts, configure AI chatbots, and boost conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://app.chatmentorz.com/en/new-bot"
                className="w-full sm:w-auto bg-primary hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-green-500/25 transition-all text-center"
              >
                Start Free Trial
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-3.5 rounded-full transition-all text-center"
              >
                Book a 1-on-1 Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
