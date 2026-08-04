import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Chatbot Integration',
      description: 'Help clients seamlessly integrate chatbots into their existing systems, such as websites, mobile apps, and CRM platforms.',
    },
    {
      title: 'Custom Chatbot Development',
      description: 'Develop bespoke chatbots tailored to the specific needs and requirements of your clients, including design, programming, and implementation.',
    },
    {
      title: 'Chatbot Training And Maintenance',
      description: 'Provide training and ongoing maintenance services to ensure that chatbots remain up to date and effective.',
    }
  ];

  return (
    <section className="py-4 md:py-10 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <div>
            <div className="rounded-[32px] overflow-hidden bg-[#f4f7fe] md:p-8 flex items-center justify-center h-full">
               <img 
                 src="https://clearinfo.in/wp-content/uploads/2023/05/group-of-people-communicating-orally.jpg" 
                 alt="Chatbot Services" 
                 className="w-full h-auto object-cover rounded-[32px]"
               />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <p className="text-gray-400 font-medium mb-4 text-[15px]">Services We Offer</p>
            <h2 className="text-4xl md:text-[44px] font-bold text-black mb-10 leading-[1.25]">
              Smart Chatbot<br />
              Communication Tools For<br />
              Businesses
            </h2>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center bg-transparent">
                      <Check className="w-5 h-5 text-black" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-black">{service.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-[1.8] text-[15px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
