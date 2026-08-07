import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function GetInTouch() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append('_subject', 'New Inquiry from Home Page (Get In Touch)');
    formData.append('_captcha', 'false'); // disable recaptcha to avoid redirect

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
    <section className="bg-[linear-gradient(90deg,rgba(50,167,82,1)_0%,rgba(31,156,99,1)_50%,rgba(15,148,113,1)_100%)] py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] text-white">
            <span className="text-white/80 font-medium tracking-wide text-sm mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Let's Grow Together
            </h2>
            <p className="text-white/90 text-[15px] leading-relaxed mb-12 max-w-md">
              Have a question or want to elevate your communication? Let's connect — we'll help you simplify with automation and amazing customer conversations.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[#1e9a50] shadow-sm">
                  <Phone size={20} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Phone</h4>
                  <p className="text-white/90 text-sm">+91 8921675767</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[#1e9a50] shadow-sm">
                  <Mail size={20} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email</h4>
                  <p className="text-white/90 text-sm">sales@chatmentorz.in</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[#1e9a50] shadow-sm">
                  <MapPin size={22} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Address</h4>
                  <p className="text-white/90 text-sm leading-relaxed max-w-[200px]">
                    Trivandrum ,Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form Card */}
          <div className="w-full lg:w-[55%]">
            <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-2xl relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Get In Touch
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                Reach out today - let's start a conversation that leads to smarter customer engagement and lasting success.
              </p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="Name"
                    required
                    placeholder="Your Name" 
                    className="w-full bg-[#f3f4f6] text-gray-700 px-6 py-4 rounded-full text-sm outline-none border border-transparent focus:border-[#1e9a50] focus:bg-white transition-colors"
                  />
                  <input 
                    type="email" 
                    name="Email"
                    required
                    placeholder="Your Email" 
                    className="w-full bg-[#f3f4f6] text-gray-700 px-6 py-4 rounded-full text-sm outline-none border border-transparent focus:border-[#1e9a50] focus:bg-white transition-colors"
                  />
                </div>
                
                {/* Notice in the screenshot, subject has a green outline. We can mimic that by default for demonstration or rely on focus states. I'll make it standard but responsive to focus. */}
                <input 
                  type="text" 
                  name="Subject"
                  placeholder="Subject" 
                  className="w-full bg-[#f3f4f6] text-gray-700 px-6 py-4 rounded-full text-sm outline-none border border-transparent focus:border-[#1e9a50] focus:bg-white transition-colors border-[#1e9a50] bg-white" // explicitly adding border to match screenshot
                />
                
                <textarea 
                  name="Message"
                  required
                  placeholder="Write here message" 
                  className="w-full bg-[#f3f4f6] text-gray-700 px-6 py-4 rounded-[1.5rem] text-sm outline-none border border-transparent focus:border-[#1e9a50] focus:bg-white transition-colors h-36 resize-none"
                ></textarea>
                
                <button 
                  disabled={status === 'submitting'}
                  type="submit" 
                  className="w-full bg-[#1e9a50] text-white font-bold py-4 rounded-full hover:bg-green-700 transition-colors mt-2 disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium mt-4">Message sent successfully!</div>}
                {status === 'error' && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center font-medium mt-4">Oops! Something went wrong.</div>}
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
