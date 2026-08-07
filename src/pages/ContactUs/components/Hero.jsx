import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import bgImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-40 overflow-hidden flex items-center justify-center bg-gray-100"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Contact Us Background"
          className="w-full h-full object-cover object-center opacity-40 blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] mb-4">
          Contact Us
        </h1>
        <div className="flex items-center space-x-2 text-[15px] font-medium">
          <Link to="/" className="flex items-center text-[#1f2937] hover:text-[#01ab4a] transition-colors">
            <Home size={16} className="mr-1.5 mb-[2px]" />
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-500" />
          <span className="text-[#01ab4a]">Contact Us</span>
        </div>
      </div>
    </section>
  );
}

