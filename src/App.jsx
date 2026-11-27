import { useEffect } from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import PageBanner from './components/PageBanner'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Products from './pages/Products/Products'
import Blogs from './pages/Blogs/Blogs'
import ContactUs from './pages/ContactUs/ContactUs'
import PrivacyPolicy from './components/Footer/components/privacyPolicy'
import TermsOfService from './components/Footer/components/termsOfService'
import CancellationRefundPolicy from './components/Footer/components/cancellationRefundPolicy'
import Gdpr from './components/Footer/components/gdpr'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function ProductRedirect() {
  const { slug } = useParams()
  const legacyProducts = ['inbox', 'whatsapp', 'crm', 'keyword', 'catalog', 'ai-agent']
  return <Navigate replace to={legacyProducts.includes(slug) ? `/products#${slug}` : '/products'} />
}

function NotFound() {
  return (
    <>
      <PageBanner title="Page not found" description="The page you’re looking for may have moved." />
      <div className="section wrap"><Link className="button" to="/">Back to home</Link></div>
    </>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a className="button skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <ScrollToHash />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<ProductRedirect />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cancellation" element={<CancellationRefundPolicy />} />
          <Route path="/gdpr" element={<Gdpr />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <div className="quick-contact" role="group" aria-label="Quick contact">
        <a href="tel:+918921675767" aria-label="Call ChatMentorz"><FaPhoneAlt aria-hidden="true" size={17} /></a>
        <a href="https://wa.me/918921675767" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><FaWhatsapp aria-hidden="true" size={22} /></a>
      </div>
    </div>
  )
}
