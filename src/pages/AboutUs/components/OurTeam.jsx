import React, { useState, useEffect } from 'react';

const teamImage = 'https://img.freepik.com/premium-photo/person-using-laptop-job_1112329-42943.jpg';

const teamMembers = [
  {
    name: 'Mick Donalds',
    role: 'Designer',
    image: teamImage
  },
  {
    name: 'Danielle Wyatt',
    role: 'Developer',
    image: teamImage
  },
  {
    name: 'Sara Bellum',
    role: 'Developer',
    image: teamImage
  }
];

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 10 seconds (10s gap)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 10000); // 10s gap

    return () => clearInterval(timer);
  }, []);

  // Calculate visible members to always loop infinitely
  const getVisibleMembers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(teamMembers[(currentIndex + i) % teamMembers.length]);
    }
    return visible;
  };

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#10b981] font-medium tracking-wide mb-3 text-[15px]">Our Team</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">Meet The Team</h2>
        </div>
        
        <div className="relative">
          {/* Slider Container */}
          <div className="flex gap-8 transition-all duration-700 ease-in-out">
            {getVisibleMembers().map((member, index) => (
              <div 
                key={`${currentIndex}-${index}`} 
                className="w-full md:w-[calc(33.333%-1.33rem)] flex-shrink-0 border border-gray-100 p-4 rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow bg-white animate-fade-in"
              >
                <div className="rounded-[16px] overflow-hidden mb-6 h-[260px] md:h-[280px]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-[22px] font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-gray-400 text-[15px]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateX(20px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.5s ease-out forwards;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
