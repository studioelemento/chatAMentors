import React from 'react';
import { Archive, Lightbulb, BookOpen } from 'lucide-react';

const HowitWorks = () => {
  const cards = [
    {
      title: 'Mission',
      icon: <Archive className="w-8 h-8 text-black" strokeWidth={1} />,
      description: 'To empower businesses to build smarter, more human-like conversations at scale—enhancing customer experiences, increasing operational efficiency, and driving measurable growth through advanced conversational AI.',
    },
    {
      title: 'Vision',
      icon: <Lightbulb className="w-8 h-8 text-black" strokeWidth={1} />,
      description: 'To become the most trusted and innovative conversational AI partner for modern businesses across industries, redefining how brands engage, convert, and retain customers globally.',
    },
    {
      title: 'Values',
      icon: <BookOpen className="w-8 h-8 text-black" strokeWidth={1} />,
      description: 'At ChatMentorz, our core values shape every decision we make and every product we build. We are driven by innovation, constantly pushing the boundaries of conversational AI to deliver smarter, more adaptive solutions.',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-gray-500 font-medium mb-4 text-[15px]">How It's Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">Engage With ChatMentorz</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="p-8 md:p-10 border border-gray-50 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_0px_25px_rgba(0,0,0,0.06)] transition-shadow duration-300">
              <div className="w-20 h-20 rounded-full border border-gray-800 flex items-center justify-center mb-8">
                {card.icon}
              </div>
              <h3 className="text-[26px] font-bold text-black mb-5">{card.title}</h3>
              <p className="text-gray-500 leading-[1.8] text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
