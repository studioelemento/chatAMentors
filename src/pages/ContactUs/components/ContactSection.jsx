import React from 'react';

export default function ContactSection() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        
        {/* Left Column: Form */}
        <div>
          <div className="mb-10">
            <h4 className="text-gray-800 text-lg font-medium mb-2">Get In Touch</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact With US</h2>
            <p className="text-gray-500 text-lg">
              Have questions about our WhatsApp Business solutions or need a customized automation workflow? Send us a message and our experts will get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                aria-label="First Name"
                placeholder="First Name" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
              <input 
                type="text" 
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                aria-label="Last Name"
                placeholder="Last Name" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="email" 
                id="email"
                name="email"
                autoComplete="email"
                aria-label="Email Address"
                placeholder="Email Address" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
              <input 
                type="tel" 
                id="phone"
                name="phone"
                autoComplete="tel"
                aria-label="Phone Number"
                placeholder="Phone Number" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
            </div>

            <textarea 
              id="message"
              name="message"
              rows="6" 
              aria-label="Your Message"
              placeholder="How can we help your business?" 
              className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-5 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all resize-none placeholder-gray-400"
            ></textarea>

            <button type="submit" className="mt-2 bg-[#01ab4a] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg shadow-[#01ab4a]/30">
              Submit Now
            </button>
          </form>
        </div>

        {/* Right Column: Google Maps Embed */}
        <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe 
            src="https://maps.google.com/maps?q=1st%20Floor%2C%20TC%2056%2F723%2C%20Muthukattuvila%20Line%2C%20Naduvath%2C%20Nemam%2C%20Thiruvananthapuram%2C%20Kerala%20695020&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ChatMentorz Office Location in Thiruvananthapuram, Kerala"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

