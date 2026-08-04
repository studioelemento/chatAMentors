import React from 'react';
import { Users, Paperclip, Clock } from 'lucide-react';
import featureImage from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png';

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-[#ebf0ec]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div>
            <div className="mb-12">
              <p className="text-[#1b9a59] font-medium mb-4 text-[15px]">Explore Our Offerings</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-[1.2]">
                Key Features Of Our AI Chatbot Platform
              </h2>
              <p className="text-gray-500 leading-[1.8] text-[15px]">
                At ChatMentorz, we provide powerful AI-driven automation tools that help businesses streamline communication, boost engagement, and increase conversions across multiple chat platforms.
              </p>
            </div>

            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0 w-[72px] h-[72px] rounded-full border border-gray-800 flex items-center justify-center bg-transparent">
                <Users className="w-8 h-8 text-black" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-black mb-3">Natural Language Processing (NLP)</h3>
                <p className="text-gray-500 leading-[1.8] text-[15px]">
                  ChatMentorz is equipped with NLP algorithms that enable them to understand and process human language, engaging in conversations with users in a natural and human-like manner.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-[72px] h-[72px] rounded-full border border-gray-800 flex items-center justify-center bg-transparent">
                <Paperclip className="w-8 h-8 text-black" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-black mb-3">Transactional Capabilities</h3>
                <p className="text-gray-500 leading-[1.8] text-[15px]">
                  ChatMentorz can facilitate transactions, such as placing orders, booking appointments, or making reservations, directly within the conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <img 
              src={featureImage} 
              alt="AI Chatbot Virtual Assistant" 
              className="w-full h-auto rounded-[32px] object-cover shadow-sm mb-12"
            />

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-[72px] h-[72px] rounded-full border border-gray-800 flex items-center justify-center bg-transparent">
                <Clock className="w-8 h-8 text-black" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-black mb-3">24/7 Availability</h3>
                <p className="text-gray-500 leading-[1.8] text-[15px]">
                  ChatMentorz is available round the clock, providing instant support and information to users at any time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
