import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import imgAboutPhones from '../../../assets/img-Home/homeAboutUs.png'

export default function AboutSection() {
  return (
    <section className="py-24 bg-[linear-gradient(91deg,rgba(51,168,80,1)_0%,rgba(12,133,133,1)_100%)] relative overflow-hidden">
      
      {/* Background Instagram Logo (Top Right) */}
      <div className="absolute top-12 right-12 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm z-0 hidden md:flex">
         <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-8 h-8 opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full md:w-[50%] lg:w-[45%] text-white">
            <h3 className="text-white font-semibold mb-3 text-[15px]">About Us</h3>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-6 leading-[1.2] tracking-tight">
              Building Conversations That Grow Your Business
            </h2>
            
            <div className="space-y-5 text-white/95 text-[15px] lg:text-[16px] leading-relaxed mb-8 pr-4">
              <p>
                At ChatMentorz, we specialize in AI-powered chatbot automation designed to help businesses scale faster and engage smarter. Our advanced NLP-driven chatbot solutions seamlessly integrate across WhatsApp, Instagram, Facebook, websites, and more, enabling real-time, personalized customer interactions.
              </p>
              <p>
                We help modern businesses automate conversations, increase conversions, and improve customer experience through intelligent automation. Whether it's lead generation, customer support, or sales engagement, our platform ensures efficient communication and measurable growth.
              </p>
            </div>
            
            <button className="bg-white text-primary px-5 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-md">
              View More 
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="w-full md:w-[50%] lg:w-[55%] relative flex justify-center lg:justify-end mt-12 md:mt-0">
            <div className="w-full max-w-[550px] relative z-10">
              <img 
                src={imgAboutPhones} 
                alt="ChatMentorz Mobile Chatbot Interface" 
                className="w-full h-[500px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
