import React from 'react';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaRobot, 
  FaTelegramPlane, 
  FaInbox 
} from 'react-icons/fa';

const PhoneMockup = () => (
  <div className="relative mx-auto border-gray-600 bg-gray-600 border-[12px] rounded-[2.5rem] h-[550px] w-[280px] shadow-2xl">
    {/* Notch */}
    <div className="w-[120px] h-[18px] bg-gray-600 absolute top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 z-20"></div>
    {/* Screen */}
    <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-white flex flex-col relative z-10">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between pt-8 shadow-sm">
        <span className="text-gray-400 font-bold text-lg cursor-pointer">&lt;</span>
        <span className="font-bold text-gray-800 text-sm">Chat</span>
        <span className="text-gray-500 font-bold tracking-widest leading-none cursor-pointer pb-2">&#8942;</span>
      </div>
      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col gap-5 overflow-y-auto bg-slate-50/50">
        {/* User Message */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-2xl rounded-tl-sm p-3 w-4/5 shadow-sm">
            <div className="h-1.5 bg-gray-300 rounded w-full mb-1.5"></div>
            <div className="h-1.5 bg-gray-300 rounded w-5/6 mb-1.5"></div>
            <div className="h-1.5 bg-gray-300 rounded w-4/6"></div>
          </div>
        </div>
        {/* Bot Message */}
        <div className="flex gap-2 flex-row-reverse mt-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-md">
            <FaRobot />
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl rounded-tr-sm p-3 w-4/5 shadow-sm">
            <div className="h-1.5 bg-gray-200 rounded w-full mb-1.5"></div>
            <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
        {/* User Message */}
        <div className="flex gap-2 mt-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-2xl rounded-tl-sm p-3 w-4/5 shadow-sm">
            <div className="h-1.5 bg-gray-300 rounded w-full mb-1.5"></div>
            <div className="h-1.5 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
         {/* Bot Message */}
         <div className="flex gap-2 flex-row-reverse mt-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-md">
            <FaRobot />
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl rounded-tr-sm p-3 w-4/5 shadow-sm">
            <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Features() {
  const leftFeatures = [
    {
      title: "WhatsApp API",
      description: "integrate WhatsApp messaging into their systems, CRMs, websites, or chatbot platforms..",
      icon: <FaWhatsapp className="text-[3.5rem] text-[#10b981]" />
    },
    {
      title: "Instagram Automation",
      description: "Supercharge your brand's Instagram presence with smart automation tools that grow your audience",
      icon: <FaInstagram className="text-[3.5rem] text-[#10b981]" />
    },
    {
      title: "Facebook Automation",
      description: "Transform the way your business engages on Facebook with powerful automation that drives conversations",
      icon: <FaFacebookF className="text-[3.5rem] text-[#10b981] border-4 border-[#10b981] rounded-lg p-2" />
    }
  ];

  const rightFeatures = [
    {
      title: "Website Chatbot",
      description: "Our Al-powered chatbot ensures no lead goes unnoticed and no question goes unanswered.",
      icon: <FaRobot className="text-[3.5rem] text-[#10b981]" />
    },
    {
      title: "Telegram Automation",
      description: "Our automation tools transform Telegram into a seamless business growth channel.",
      icon: <FaTelegramPlane className="text-[3.5rem] text-[#10b981]" />
    },
    {
      title: "Omnichannel Team Inbox",
      description: "Manage WhatsApp, Facebook Messenger, Instagram, Telegram, Email, and Website Chats all from a single place.",
      icon: <FaInbox className="text-[3.5rem] text-[#10b981]" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-teal-500 font-medium tracking-wide text-sm mb-3 block">
            Features
          </span>
          <h2 className="text-[30px] leading-[42px] md:text-[39px] md:leading-[59px] font-semibold text-black font-['Poppins',sans-serif]">
            Powerful AI Chatbot Features To Improve Customer Satisfaction
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
          
          {/* Left Features List */}
          <div className="flex-1 flex flex-col gap-10 order-2 lg:order-1 w-full lg:w-auto">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start group">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <div className="border-b border-[#cbd5e1] pb-8 w-full group-hover:border-teal-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Phone Mockup */}
          <div className="flex-shrink-0 order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:px-4 lg:-mt-4">
             <PhoneMockup />
          </div>

          {/* Right Features List */}
          <div className="flex-1 flex flex-col gap-10 order-3 w-full lg:w-auto">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-start group">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <div className="border-b border-[#cbd5e1] pb-8 w-full group-hover:border-teal-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
