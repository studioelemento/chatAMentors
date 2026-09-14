import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/img-Home/Chatmentorz.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-50">
      <div className="max-w-7xl mx-auto py-4 px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" onClick={handleNavClick} className="flex flex-col">
            <div className="flex items-center">
              <img src={logo} alt="ChatMentorz Logo" className="h-[60px] w-auto object-contain" />
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-secondary text-sm">
          <Link to="/" onClick={handleNavClick} className="text-primary transition-colors">Home</Link>
          <Link to="/about" onClick={handleNavClick} className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/products" onClick={handleNavClick} className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors group relative">
            Products <ChevronDown size={14} className="text-gray-400 group-hover:text-primary" />
          </Link>
          <Link to="/blogs" onClick={handleNavClick} className="hover:text-primary transition-colors">Blogs</Link>
          <Link to="/contact" onClick={handleNavClick} className="hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.chatmentorz.com/en/login" className="font-medium text-secondary border border-gray-200 px-6 py-2 rounded-md hover:border-primary hover:text-primary transition-colors">
            Login
          </a>
          <a href="https://app.chatmentorz.com/en/new-bot" className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition-colors">
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-primary text-white p-2 rounded flex items-center justify-center hover:bg-green-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full left-0 top-[100%] bg-transparent z-50 pt-2">
          <div className="px-6 flex flex-col items-end w-full">
            
            {/* Tabs */}
            <div className="flex items-end gap-1 mb-[-1px] relative z-10 w-full justify-end pr-4">
              <a href="https://app.chatmentorz.com/en/login" className="px-8 py-2 border border-primary border-b-0 text-primary bg-white rounded-t-xl text-sm font-semibold">
                Login
              </a>
              <a href="https://app.chatmentorz.com/en/new-bot" className="px-8 py-2.5 bg-primary text-white rounded-t-xl text-sm font-semibold">
                Sign up
              </a>
            </div>

            {/* Menu Items Box */}
            <div className="w-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden relative z-20">
              <Link to="/" onClick={handleMobileNavClick} className="block w-full text-left bg-primary text-white py-4 px-6 text-lg font-medium">
                Home
              </Link>
              <div className="px-4">
                <Link to="/about" onClick={handleMobileNavClick} className="block w-full text-left text-[#00a68d] hover:bg-gray-50 py-4 px-4 text-lg border-b border-gray-50">
                  About Us
                </Link>
                <Link to="/products" onClick={handleMobileNavClick} className="flex items-center justify-between w-full text-left text-[#00a68d] hover:bg-gray-50 py-4 px-4 text-lg border-b border-gray-50">
                  Products <ChevronDown size={20} className="text-[#00a68d]" />
                </Link>
                <Link to="/blogs" onClick={handleMobileNavClick} className="block w-full text-left text-[#00a68d] hover:bg-gray-50 py-4 px-4 text-lg border-b border-gray-50">
                  Blogs
                </Link>
                <Link to="/contact" onClick={handleMobileNavClick} className="block w-full text-left text-[#00a68d] hover:bg-gray-50 py-4 px-4 text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
