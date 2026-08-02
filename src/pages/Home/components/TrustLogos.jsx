import React from 'react';

export default function TrustLogos() {
  const logos = [
    { id: 1, content: <span className="font-bold text-gray-800 flex items-center text-lg"><span className="text-red-500 mr-1">O</span>nline Strikers</span> },
    { id: 2, content: <span className="font-bold text-blue-900 flex items-center text-lg">Biz<span className="text-blue-500">Molecules</span></span> },
    { id: 3, content: <span className="font-bold text-blue-800 text-center leading-tight">DAYITWA<br/><span className="text-green-600 text-xs">Education</span></span> },
    { id: 4, content: <span className="font-bold text-blue-600 flex items-center text-lg"><span className="text-orange-400 mr-1">H</span>SELLMERGER</span> },
    { id: 5, content: <span className="font-bold text-purple-900 flex items-center text-lg"><span className="text-purple-500 mr-1">T</span>echNova</span> },
    { id: 6, content: <span className="font-bold text-gray-800 flex items-center text-lg">Growth<span className="text-teal-500">Sync</span></span> },
    { id: 7, content: <span className="font-bold text-slate-800 flex items-center text-lg"><span className="text-blue-400">Data</span>Flow</span> },
    { id: 8, content: <span className="font-bold text-gray-800 flex items-center text-lg">Cloud<span className="text-sky-500">Scale</span></span> },
  ];

  return (
    <section 
      className="py-6 overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(90deg, rgba(50, 167, 82, 1) 0%, rgba(31, 156, 99, 1) 50%, rgba(15, 148, 113, 1) 100%)' }}
    >
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
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight lg:whitespace-nowrap">
              These Companies Trust ChatMentorz
            </h3>
          </div>
          
          {/* Right Logos Slider */}
          <div className="w-full flex-1 overflow-hidden relative flex group">
            {/* Gradient Masks for smooth fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[rgba(50,167,82,1)] to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[rgba(15,148,113,1)] to-transparent z-10 pointer-events-none hidden md:block"></div>
            
            <div className="flex animate-marquee pr-6">
              {logos.map((logo) => (
                <div key={logo.id} className="bg-white rounded-xl h-20 w-[160px] flex items-center justify-center p-4 shadow-sm shrink-0 mx-3">
                  {logo.content}
                </div>
              ))}
            </div>
            {/* Duplicated track for seamless infinite scroll */}
            <div className="flex animate-marquee pr-6">
              {logos.map((logo) => (
                <div key={`dup-${logo.id}`} className="bg-white rounded-xl h-20 w-[160px] flex items-center justify-center p-4 shadow-sm shrink-0 mx-3">
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
