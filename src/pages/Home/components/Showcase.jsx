import React from 'react'
import imgNuclear from '../../../assets/img-Home/ai-nuclear-energy-future-innovation-disruptive-technology-1.png'
import imgChatBot from '../../../assets/img-Home/chat-bot-service-concept-enhancing-customer-experience-with-virtual-assistant-1.png'

export default function Showcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-center">

          {/* Left Card - Robot with phone */}
          <div className="w-full md:w-[55%] relative">
            <img
              src={imgChatBot}
              alt="Chatbot virtual assistant"
              className="w-full h-auto rounded-[2rem] shadow-xl"
            />
          </div>

          {/* Right Card - Glowing Hand */}
          <div className="w-full md:w-[38%] relative">
            <img
              src={imgNuclear}
              alt="AI Innovation Hand"
              className="w-full h-auto rounded-[2rem] shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
