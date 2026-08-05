import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube , FaPinterest } from 'react-icons/fa'
import { MapPin, Phone, Mail } from 'lucide-react'
import logo from '../../assets/img-Home/Chatmentorz.png'

export default function Footer() {
  return (
    <footer className="bg-white pt-16 border-t border-gray-100 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo & Socials */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col mb-8">
              <div className="flex items-center ">
                <img src={logo} alt="ChatMentorz Logo" className="h-20 w-auto" />
              </div>
            </Link>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61578251438146" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.youtube.com/@Chtmentorz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <FaYoutube size={16} />
              </a>
              <a href="https://www.linkedin.com/company/chat-mentorz/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://www.instagram.com/chatmentorz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.pinterest.com/chatmentorz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <FaPinterest size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-secondary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-700">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Login</Link></li>
              <li><Link to="/signup" className="hover:text-primary transition-colors">Signup</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cancellation" className="hover:text-primary transition-colors">Cancellation & Refund Policy</Link></li>
              {/* <li><Link to="/gdpr" className="hover:text-primary transition-colors leading-snug block">GDPR-compliant Data Processing Agreement</Link></li> */}
              <li><Link to="/knowledge-base" className="hover:text-primary transition-colors">Knowledge Base</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-xl font-bold text-secondary mb-6">Products</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-700">
              <li><Link to="/product/inbox" className="hover:text-primary transition-colors leading-snug block">Omni Channel Team Inbox</Link></li>
              <li><Link to="/product/whatsapp" className="hover:text-primary transition-colors">Whatsapp Commerce</Link></li>
              <li><Link to="/product/crm" className="hover:text-primary transition-colors leading-snug block">ChatMentorz Omni Channel CRM</Link></li>
              <li><Link to="/product/keyword" className="hover:text-primary transition-colors leading-snug block">Smart Keyword Automation</Link></li>
              <li><Link to="/product/catalog" className="hover:text-primary transition-colors leading-snug block">Whatsapp Catalog Automation</Link></li>
              <li><Link to="/product/ai-agent" className="hover:text-primary transition-colors uppercase">AI AGENT</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-2 uppercase">CHATMENTORZ PRIVATE LIMITED</h4>
            
            <div className="mt-6">
              <h5 className="text-lg font-bold text-secondary mb-2">Address</h5>
              <div className="flex items-start gap-2 text-sm font-medium text-gray-700">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Trivandrum, Kerala, India</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-lg font-bold text-secondary mb-2">Phone</h5>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Phone size={16} className="flex-shrink-0" />
                <span>8921675767</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-lg font-bold text-secondary mb-2">Email</h5>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:sales@chatmentorz.in" className="hover:text-primary transition-colors">sales@chatmentorz.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Bottom Left Socials */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61578251438146" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a href="https://www.youtube.com/@Chtmentorz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <FaYoutube size={14} />
            </a>
            <a href="https://www.linkedin.com/company/chat-mentorz/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <FaLinkedinIn size={14} />
            </a>
            <a href="https://www.instagram.com/chatmentorz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <FaInstagram size={14} />
            </a>
            <a href="https://www.pinterest.com/chatmentorz/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <FaPinterest size={14} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-primary text-sm font-medium">
            Copyright 2026 ChatMentorz All Rights Reserved.
          </div>
          
        </div>
      </div>
      
    </footer>
  )
}
