import React from 'react';
import { Link } from 'react-router-dom';
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
      title: "Omni Channel Team Inbox",
      description: "Your Customers & Team United Through A Omnichannel Team Inbox Integrated Seamlessly With Whatapp, Instagram, Website, Telegram And Facebook Messenger Using Chatmentorz Inbox.",
      icon: <FaNetworkWired className="text-blue-500 text-4xl" />
    },
    {
      title: "Whatsapp Commerce",
      description: "Utilize Whatsapp Commerce To Convert Your Whatsapp API Into A Online Commercial Store.",
      icon: <FaWhatsapp className="text-green-500 text-4xl" />
    },
    {
      title: "Chatmentorz Omni Channel CRM",
      description: "The All In One Pipeline With AI Chatbot, Instagram Chatbot, Facebook Chatbot Website Chatbot And Whatssapp Automation Improves Lead Management",
      icon: <FaPlayCircle className="text-blue-500 text-4xl" />
    },
    {
      title: "Smart Keyword Automation",
      description: "Keep Your Business Open 24 X 7 With Our Artificail Intelligence (AI) & Machine Learning ( ML ) Chatbots In You Instagram Facebook Whatsapp And Website.",
      icon: <FaCogs className="text-gray-600 text-4xl" />
    },
    {
      title: "Whatsapp Catalog Automation",
      description: "Manage Products & Automates Sales In Whatsapp. No Mobile APP, No Ecommerce Website Just WhatsaApp And Auto Selling.",
      icon: <FaWhatsapp className="text-green-500 text-4xl" />
    },
    {
      title: "AI AGENT",
      description: "Boost Your Team Productivity 10x With AI Mate, Tightly Integrated With The Chatmentorz Products Ecosystem.",
      icon: <FaRobot className="text-blue-700 text-4xl" />
    },
    {
      title: "Omni Channel Automation",
      description: "Facebook Automation, Instagram Automation Whatsapp Automation, Telegram Automation And Website Automation Using Chat Mentorz Powerful No Code Chatbots.",
      icon: <FaProjectDiagram className="text-indigo-400 text-4xl" />
    },
    {
      title: "Payment Gateway Automation Through Whatsapp",
      description: "Manage Products & Automate Sales In WhatsApp. No Mobile APP, No E Commerce Website, No Humans. Just WhatsaApp And Focus On Shipping Orders.",
      icon: <FaMoneyCheckAlt className="text-blue-600 text-4xl" />
    },
    {
      title: "QR Code & Link Generator",
      description: "Generate Powerful QR Codes And Links To Drive Conversations Across WhatsApp, Instagram, Facebook, And More. One Tool, Endless Ways To Reach Your Audience.",
      icon: <FaQrcode className="text-gray-800 text-4xl" />
    },
    {
      title: "Template Messaging & Broadcasting",
      description: "Broadcast Messaes On Whatsapp, Facebook, Instagram, Telegram To Nurture Leads, Convert Customers, And Boost Sales",
      icon: <FaRegCommentDots className="text-blue-500 text-4xl" />
    },
    {
      title: "No Code Chatbot Builder",
      description: "Build Most Advanced Chatbots By Just Connecting The Dots With Our Drag And Drop Zero Coding Flow Builder. Why Limitting Your Processes Just To Whatsapp Unleash The Power Of Omni Channel With Chatmentorz Omnichannel Chatbot Builders.",
      icon: <FaHeadset className="text-indigo-800 text-4xl" />
    },
    {
      title: "Other Features",
      description: "Appoinment Booking Through Whatsapp. Drip Campaigns",
      icon: <FaSitemap className="text-teal-500 text-4xl" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-xl font-bold uppercase tracking-wider text-gray-800">Products</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product, index) => {
          const isOmniInbox = product.title === "Omni Channel Team Inbox";
          const cardContent = (
            <div key={index} className={`flex flex-col items-start text-left group hover:scale-[1.02] transition-transform duration-300 ${isOmniInbox ? 'cursor-pointer' : ''}`}>
              <div className="mb-4 bg-gray-50 p-3 rounded-xl">
                {product.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          );

          return isOmniInbox ? (
            <Link key={index} to="/products/omni-channel-team-inbox" className="no-underline">
              {cardContent}
            </Link>
          ) : (
            <React.Fragment key={index}>{cardContent}</React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
