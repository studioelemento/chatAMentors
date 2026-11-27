import { Link } from 'react-router-dom'
import PageBanner from '../../components/PageBanner'
import { 
  FaNetworkWired, 
  FaWhatsapp, 
  FaPlayCircle, 
  FaCogs, 
  FaRobot, 
  FaProjectDiagram, 
  FaMoneyCheckAlt, 
  FaQrcode, 
  FaRegCommentDots, 
  FaHeadset, 
  FaSitemap 
} from 'react-icons/fa';

export default function Products() {
  const products = [
    {
      id: 'inbox',
      title: "Omni Channel Team Inbox",
      description: "Your Customers & Team United Through A Omnichannel Team Inbox Integrated Seamlessly With Whatapp, Instagram, Website, Telegram And Facebook Messenger Using Chatmentorz Inbox.",
      icon: <FaNetworkWired className="text-blue-500 text-4xl" />
    },
    {
      id: 'whatsapp',
      title: "Whatsapp Commerce",
      description: "Utilize Whatsapp Commerce To Convert Your Whatsapp API Into A Online Commercial Store.",
      icon: <FaWhatsapp className="text-green-500 text-4xl" />
    },
    {
      id: 'crm',
      title: "Chatmentorz Omni Channel CRM",
      description: "The All In One Pipeline With AI Chatbot, Instagram Chatbot, Facebook Chatbot Website Chatbot And Whatssapp Automation Improves Lead Management",
      icon: <FaPlayCircle className="text-blue-500 text-4xl" />
    },
    {
      id: 'keyword',
      title: "Smart Keyword Automation",
      description: "Keep Your Business Open 24 X 7 With Our Artificail Intelligence (AI) & Machine Learning ( ML ) Chatbots In You Instagram Facebook Whatsapp And Website.",
      icon: <FaCogs className="text-gray-600 text-4xl" />
    },
    {
      id: 'catalog',
      title: "Whatsapp Catalog Automation",
      description: "Manage Products & Automates Sales In Whatsapp. No Mobile APP, No Ecommerce Website Just WhatsaApp And Auto Selling.",
      icon: <FaWhatsapp className="text-green-500 text-4xl" />
    },
    {
      id: 'ai-agent',
      title: "AI AGENT",
      description: "Boost Your Team Productivity 10x With AI Mate, Tightly Integrated With The Chatmentorz Products Ecosystem.",
      icon: <FaRobot className="text-blue-700 text-4xl" />
    },
    {
      id: 'omnichannel',
      title: "Omni Channel Automation",
      description: "Facebook Automation, Instagram Automation Whatsapp Automation, Telegram Automation And Website Automation Using Chat Mentorz Powerful No Code Chatbots.",
      icon: <FaProjectDiagram className="text-indigo-400 text-4xl" />
    },
    {
      id: 'payments',
      title: "Payment Gateway Automation Through Whatsapp",
      description: "Manage Products & Automate Sales In WhatsApp. No Mobile APP, No E Commerce Website, No Humans. Just WhatsaApp And Focus On Shipping Orders.",
      icon: <FaMoneyCheckAlt className="text-blue-600 text-4xl" />
    },
    {
      id: 'qr-codes',
      title: "QR Code & Link Generator",
      description: "Generate Powerful QR Codes And Links To Drive Conversations Across WhatsApp, Instagram, Facebook, And More. One Tool, Endless Ways To Reach Your Audience.",
      icon: <FaQrcode className="text-gray-800 text-4xl" />
    },
    {
      id: 'broadcasts',
      title: "Template Messaging & Broadcasting",
      description: "Broadcast Messaes On Whatsapp, Facebook, Instagram, Telegram To Nurture Leads, Convert Customers, And Boost Sales",
      icon: <FaRegCommentDots className="text-blue-500 text-4xl" />
    },
    {
      id: 'bot-builder',
      title: "No Code Chatbot Builder",
      description: "Build Most Advanced Chatbots By Just Connecting The Dots With Our Drag And Drop Zero Coding Flow Builder. Why Limitting Your Processes Just To Whatsapp Unleash The Power Of Omni Channel With Chatmentorz Omnichannel Chatbot Builders.",
      icon: <FaHeadset className="text-indigo-800 text-4xl" />
    },
    {
      id: 'more-features',
      title: "Other Features",
      description: "Appoinment Booking Through Whatsapp. Drip Campaigns",
      icon: <FaSitemap className="text-teal-500 text-4xl" />
    }
  ];

  return (
    <>
      <PageBanner label="Products" title="Tools for every customer conversation" description="Explore the inbox, chatbot builder, CRM, and commerce tools that connect your messaging channels to your team." />
      <section className="section wrap" aria-label="Product features">
        <div className="feature-grid product-grid">
          {products.map((product) => (
            <article className="feature-card" id={product.id} key={product.id}>
              <span className="feature-icon" aria-hidden="true">{product.icon}</span>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-panel">
        <div className="wrap">
          <h2>See how the tools fit your business</h2>
          <Link className="button" to="/contact">Talk to our team</Link>
        </div>
      </section>
    </>
  )
}
