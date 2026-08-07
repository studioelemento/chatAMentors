import React, { useEffect } from 'react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Page Imports
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Products from './pages/Products/Products'
import Blogs from './pages/Blogs/Blogs'
import ContactUs from './pages/ContactUs/ContactUs'
import PrivacyPolicy from './components/Footer/components/privacyPolicy'
import TermsOfService from './components/Footer/components/termsOfService'
import CancellationRefundPolicy from './components/Footer/components/cancellationRefundPolicy'
import Gdpr from './components/Footer/components/gdpr'

// Scrolls to the hash element after route change (e.g. /about#hero)
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Use a short delay so the new page's DOM is fully mounted before scrolling
    const timer = setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <ScrollToHash />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cancellation" element={<CancellationRefundPolicy />} />
          <Route path="/gdpr" element={<Gdpr />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+918921675767"
          className="bg-[#03e78b] hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg shadow-green-500/30 transition-transform hover:scale-110 flex items-center justify-center group relative"
          aria-label="Call Us"
        >
          <FaPhoneAlt size={22} />
          <span className="absolute left-full ml-4 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call Us
          </span>
        </a>
        <a
          href="https://wa.me/918921675767"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 flex items-center justify-center group relative"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp size={22} />
          <span className="absolute left-full ml-4 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}

export default App
