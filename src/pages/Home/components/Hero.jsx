import { Link } from 'react-router-dom'
import { Bot, Check, Globe, MessagesSquare, Send } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FormStatus } from '../../../components/LeadForm'
import { useLeadForm } from '../../../components/useLeadForm'

export default function Hero() {
  const [status, handleSubmit] = useLeadForm('New Demo Request from chatmentorz.in')

  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI business automation</p>
          <h1>Every conversation.<br /><em>One workspace.</em></h1>
          <p>Bring WhatsApp, Instagram, and website chats together. Automate replies and give your team the context to pick up where the bot left off.</p>
          <form className="demo-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="demo-email">Work email</label>
            <input id="demo-email" type="email" name="email" autoComplete="email" placeholder="Your work email" required />
            <button className="button" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Book a demo'}</button>
          </form>
          <FormStatus status={status} success="Demo request sent." />
          <Link className="hero-link" to="/products">Explore the platform</Link>
        </div>

        <figure className="inbox-preview" aria-label="Illustration of the ChatMentorz team inbox">
          <div className="preview-top"><span><MessagesSquare size={18} /> Team inbox</span><small>Example conversation</small></div>
          <div className="preview-body">
            <div className="preview-channels">
              <span><FaWhatsapp /> WhatsApp</span>
              <span><FaInstagram size={18} /> Instagram</span>
              <span><Globe size={18} /> Website</span>
            </div>
            <div className="preview-chat">
              <div className="chat-title"><span className="chat-avatar"><FaWhatsapp /></span><div><strong>New inquiry</strong><small>WhatsApp</small></div></div>
              <p className="chat-bubble inbound">Hi! Can I book a demo?</p>
              <div className="chat-reply"><Bot size={16} /><p className="chat-bubble outbound">Absolutely! What time works for you?</p></div>
              <p className="chat-status"><Check size={14} /> Replied automatically</p>
              <div className="chat-compose">Reply to conversation <Send size={15} /></div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
