import React, { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append('_subject', 'New Contact Us Message');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/ajax/chatmentorz@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        
        {/* Left Column: Form */}
        <div>
          <div className="mb-10">
            <h4 className="text-gray-800 text-lg font-medium mb-2">Get In Touch</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact With US</h2>
            <p className="text-gray-500 text-lg">
              It is a long established fact that a reader will be distracted
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="First Name"
                required
                placeholder="First Name" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
              <input 
                type="text" 
                name="Last Name"
                required
                placeholder="Last Name" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="email" 
                name="Email"
                required
                placeholder="Email Address" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
              <input 
                type="tel" 
                name="Phone"
                placeholder="phone" 
                className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all placeholder-gray-400" 
              />
            </div>

            <textarea 
              rows="6" 
              name="Message"
              required
              placeholder="Message" 
              className="w-full bg-[#f1f1f1] text-gray-700 px-6 py-5 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-[#01ab4a]/50 transition-all resize-none placeholder-gray-400"
            ></textarea>

            <button disabled={status === 'submitting'} type="submit" className="mt-2 bg-[#01ab4a] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg shadow-[#01ab4a]/30 disabled:opacity-70">
              {status === 'submitting' ? 'Sending...' : 'Submit Now'}
            </button>
            
            {status === 'success' && <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium mt-4">Message sent successfully!</div>}
            {status === 'error' && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center font-medium mt-4">Oops! Something went wrong.</div>}
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
            title="Location Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

