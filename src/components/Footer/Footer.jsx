import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa'
import logo from '../../assets/img-Home/Chatmentorz.png'

const socials = [
  ['Facebook', 'https://www.facebook.com/profile.php?id=61578251438146', FaFacebookF],
  ['YouTube', 'https://www.youtube.com/@Chtmentorz', FaYoutube],
  ['LinkedIn', 'https://www.linkedin.com/company/chat-mentorz/about/?viewAsMember=true', FaLinkedinIn],
  ['Instagram', 'https://www.instagram.com/chatmentorz/', FaInstagram],
  ['Pinterest', 'https://www.pinterest.com/chatmentorz/', FaPinterest],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" to="/"><img src={logo} alt="ChatMentorz home" /></Link>
          <p>AI-powered conversations for businesses, wherever customers reach out.</p>
          <div className="social-links">
            {socials.map(([name, href, Icon]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}><Icon aria-hidden="true" /></a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/products">Products</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <a href="https://app.chatmentorz.com/en/login">Log in</a>
          <a href="https://app.chatmentorz.com/en/new-bot">Create a bot</a>
        </div>
        <div className="footer-column">
          <h2>Legal</h2>
          <Link to="/privacy-policy">Privacy policy</Link>
          <Link to="/terms">Terms of service</Link>
          <Link to="/cancellation">Cancellation and refunds</Link>
          <Link to="/gdpr">Data processing agreement</Link>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <span>Trivandrum, Kerala, India</span>
          <a href="tel:+918921675767">+91 89216 75767</a>
          <a href="mailto:sales@chatmentorz.in">sales@chatmentorz.in</a>
        </div>
      </div>
      <div className="wrap footer-bottom">© {new Date().getFullYear()} ChatMentorz Private Limited</div>
    </footer>
  )
}
