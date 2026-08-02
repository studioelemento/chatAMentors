import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

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
            <div className="flex items-center gap-1">
              <div className="text-primary font-bold text-3xl leading-none">
                <span className="text-primary">M</span>
              </div>
              <span className="text-2xl font-extrabold text-[#0f172a] tracking-tight">ChatMentorz</span>
            </div>
            <span className="text-[10px] text-blue-600 font-semibold tracking-wider uppercase mt-0.5 flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-1 opacity-20"></span>
              Meta Business Partner
            </span>
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
          <Link to="/login" onClick={handleNavClick} className="font-medium text-secondary border border-gray-200 px-6 py-2 rounded-md hover:border-primary hover:text-primary transition-colors">
            Login
          </Link>
          <Link to="/signup" onClick={handleNavClick} className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition-colors">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-[100%] shadow-lg shadow-black/5">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-gray-700">
            <Link to="/" onClick={handleMobileNavClick} className="text-primary py-2 border-b border-gray-50">Home</Link>
            <Link to="/about" onClick={handleMobileNavClick} className="hover:text-primary py-2 border-b border-gray-50">About Us</Link>
            <Link to="/products" onClick={handleMobileNavClick} className="flex items-center justify-between hover:text-primary py-2 border-b border-gray-50">
              Products <ChevronDown size={16} className="text-gray-400" />
            </Link>
            <Link to="/blogs" onClick={handleMobileNavClick} className="hover:text-primary py-2 border-b border-gray-50">Blogs</Link>
            <Link to="/contact" onClick={handleMobileNavClick} className="hover:text-primary py-2">Contact Us</Link>
            
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <Link to="/login" onClick={handleMobileNavClick} className="text-center font-medium text-gray-700 border border-gray-200 px-6 py-2.5 rounded-md hover:bg-gray-50">
                Login
              </Link>
              <Link to="/signup" onClick={handleMobileNavClick} className="text-center bg-primary text-white px-6 py-2.5 rounded-md font-medium hover:bg-green-600">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
