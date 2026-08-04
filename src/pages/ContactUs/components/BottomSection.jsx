import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function BottomSection() {
  return (
    <section className="bg-[#f5f8fc] py-12 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          
          {/* Phone Card */}
          <a 
            href="tel:+918921675767" 
            className="block bg-white py-8 md:py-12 px-6 flex flex-col items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-sm hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#01ab4a] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md shadow-[#01ab4a]/30">
              <Phone size={32} className="text-white fill-white w-7 h-7 md:w-8 md:h-8" />
            </div>
            <span className="text-[#01ab4a] font-medium text-center hover:underline">
              +91 8921675767
            </span>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:sales@chatmentorz.in" 
            className="block bg-white py-8 md:py-12 px-6 flex flex-col items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-sm hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#01ab4a] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md shadow-[#01ab4a]/30">
              <Mail size={32} className="text-white w-7 h-7 md:w-8 md:h-8" />
            </div>
            <span className="text-[#01ab4a] font-medium text-center hover:underline">
              sales@chatmentorz.in
            </span>
          </a>

          {/* Address Card */}
          <a 
            href="https://www.google.com/maps/search/1st+Floor,+TC+56%2F723,+Muthukattuvila+Line,+Naduvath,+Nemam,+Thiruvananthapuram,+Kerala+Nearby+Landmark:+Temple+PIN+Code:+695020/@8.45494,77.00081,10z?hl=en-US&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white py-8 md:py-12 px-6 flex flex-col items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-sm hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#01ab4a] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md shadow-[#01ab4a]/30">
              <MapPin size={32} className="text-white w-7 h-7 md:w-8 md:h-8" />
            </div>
            <span className="text-[#01ab4a] font-medium text-center hover:underline">
              Thiruvananthapuram,Kerala India
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
