import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-50">
      <div className="max-w-7xl mx-auto py-4 px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <Link to="/" className="flex flex-col">
          <div className="flex items-center gap-1">
            {/* Using a placeholder for the logo icon */}
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

      <nav className="hidden md:flex items-center gap-8 font-medium text-secondary text-sm">
        <Link to="/" className="text-primary transition-colors">Home</Link>
        <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
        <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors group relative">
          Products <ChevronDown size={14} className="text-gray-400 group-hover:text-primary" />
        </div>
        <Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
        <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/login" className="font-medium text-secondary border border-gray-200 px-6 py-2 rounded-md hover:border-primary hover:text-primary transition-colors">
          Login
        </Link>
        <Link to="/signup" className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition-colors">
          Sign up
        </Link>
      </div>
      </div>
    </header>
  )
}
