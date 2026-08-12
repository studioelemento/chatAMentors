import React from 'react';
import imgBizMolecules from '../../../assets/img-Brands/BizMolecules logo.png';
import imgDayitwa from '../../../assets/img-Brands/Dayitwa logo.png';
import imgDelhiInstitute from '../../../assets/img-Brands/Delhi Institute logo.png';
import imgOnlineStrikers from '../../../assets/img-Brands/Online Strikers logo.png';
import imgDesibiz from '../../../assets/img-Brands/desibiz logo.png';
import imgSellmerger from '../../../assets/img-Brands/sellmerger logo.png';

export default function TrustLogos() {
  const logos = [
    { id: 1, content: <img src={imgOnlineStrikers} alt="Online Strikers" className="max-h-full max-w-full object-contain" /> },
    { id: 2, content: <img src={imgBizMolecules} alt="BizMolecules" className="max-h-full max-w-full object-contain" /> },
    { id: 3, content: <img src={imgDayitwa} alt="Dayitwa" className="max-h-full max-w-full object-contain" /> },
    { id: 4, content: <img src={imgDelhiInstitute} alt="Delhi Institute" className="max-h-full max-w-full object-contain" /> },
    { id: 5, content: <img src={imgDesibiz} alt="Desibiz" className="max-h-full max-w-full object-contain" /> },
    { id: 6, content: <img src={imgSellmerger} alt="Sellmerger" className="max-h-full max-w-full object-contain" /> },
  ];

  return (
    <section className="py-8 overflow-hidden ">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* Left Text */}
          <div className="w-full lg:w-auto flex-shrink-0 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-[#01ab4a] leading-tight lg:whitespace-nowrap">
              These Companies Trust ChatMentorz
            </h3>
          </div>
          
          {/* Right Logos Slider */}
          <div className="w-full flex-1 overflow-hidden relative flex group">
            {/* Gradient Masks for smooth fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
            
            <div className="flex animate-marquee gap-1 pr-3">
              {logos.map((logo) => (
                <div key={logo.id} className="bg-white rounded-xl h-20 w-[160px] flex items-center justify-center p-4 shadow-sm shrink-0">
                  {logo.content}
                </div>
              ))}
            </div>
            {/* Duplicated track for seamless infinite scroll */}
            <div className="flex animate-marquee gap-1 pr-3">
              {logos.map((logo) => (
                <div key={`dup-${logo.id}`} className="bg-white rounded-xl h-20 w-[160px] flex items-center justify-center p-4 shadow-sm shrink-0">
                  {logo.content}
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
