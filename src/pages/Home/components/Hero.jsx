import React from 'react'
import { Check } from 'lucide-react'
import heroRobot from '../../../assets/img-Home/homeHero.png'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-white">
      {/* Faint vertical grid lines background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: 'linear-gradient(to right, #f3f4f6 1px, transparent 1px)',
          backgroundSize: '20% 100%'
        }}
      ></div>

      {/* Floating decorative circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-50/50 rounded-full -translate-x-1/2 -translate-y-1/4 z-0 blur-xl"></div>
      <div className="absolute bottom-10 left-[25%] w-24 h-24 bg-green-100/60 rounded-full z-0 blur-sm"></div>
      <div className="absolute bottom-[20%] left-[45%] w-32 h-32 bg-green-100/60 rounded-full z-0 blur-md"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8 relative">
            
            <h1 className="text-6xl md:text-[5rem] lg:text-[5.5rem] font-extrabold text-[#0f172a] leading-[1.05] tracking-tighter">
              AI Business<br />
              Automation<br />
              <span className="text-[#01ab4a]">Software</span>
            </h1>
            
            {/* Email Input & Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-[460px] bg-transparent sm:bg-gray-100 rounded-2xl sm:rounded-full p-0 sm:p-1.5 mt-8 gap-3 sm:gap-0 relative z-20">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-gray-100 sm:bg-transparent rounded-full sm:rounded-none outline-none py-3 px-6 text-gray-600 placeholder-gray-400 font-medium"
              />
              <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap shadow-sm w-full sm:w-auto">
                Book a Demo
              </button>
            </div>
            
            {/* Checkmarks */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 relative z-20">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-[15px] font-medium text-gray-800">Multi-Language Conversations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-[15px] font-medium text-gray-800">Customizable Chatbot Templates</span>
              </div>
            </div>
          </div>
          
          {/* Right Image Container */}
          <div className="w-full md:w-1/2 relative z-10 flex justify-end">
            <div className="relative w-full max-w-[400px] lg:max-w-[460px] rounded-[2rem] overflow-hidden">
              <img 
                src={heroRobot}
                alt="AI Business Automation Robot" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
