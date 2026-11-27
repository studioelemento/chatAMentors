import { Link } from 'react-router-dom'
import { Bot, MessagesSquare, ShoppingBag } from 'lucide-react'
import Hero from './components/Hero'
import GetInTouch from './components/GetInTouch'
import automationImage from '../../assets/img-Home/support-workflow.jpg'
import biz from '../../assets/img-Brands/BizMolecules logo.png'
import dayitwa from '../../assets/img-Brands/Dayitwa logo.png'
import delhi from '../../assets/img-Brands/Delhi Institute logo.png'
import desibiz from '../../assets/img-Brands/desibiz logo.png'
import onlineStrikers from '../../assets/img-Brands/Online Strikers logo.png'
import sellmerger from '../../assets/img-Brands/sellmerger logo.png'

const highlights = [
  [MessagesSquare, 'One inbox for every channel', 'Manage messages from WhatsApp, Instagram, Facebook Messenger, Telegram, and your website from a shared inbox.'],
  [Bot, 'Build chatbots without code', 'Start from a customizable template and build multilingual conversations with a drag-and-drop flow builder.'],
  [ShoppingBag, 'Sell through WhatsApp', 'Use catalogs, automated messages, and payment workflows to move customers from a question to an order.'],
]

const clients = [['BizMolecules', biz], ['Dayitwa', dayitwa], ['Delhi Institute', delhi], ['Online Strikers', onlineStrikers], ['Desibiz', desibiz], ['Sellmerger', sellmerger]]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="trust-strip" aria-label="Businesses using ChatMentorz">
        <div className="wrap trust-inner">
          <p>Trusted by businesses</p>
          <div className="trust-logos">{clients.map(([name, logo]) => <img key={name} src={logo} alt={name} />)}</div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-intro">
          <p className="eyebrow">The platform</p>
          <h2>From first message to follow-up</h2>
          <p>Connect your channels, automate routine conversations, and give your team one place to help customers.</p>
        </div>
        <div className="feature-grid">
          {highlights.map(([Icon, title, description]) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon"><Icon size={23} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <Link className="button button-outline section-action" to="/products">View all products</Link>
      </section>
      <section className="soft-section section">
        <div className="wrap story-grid">
          <img src={automationImage} alt="Support workflow: send an automated reply, save the lead to the CRM, and hand the conversation to the team in the shared inbox." loading="lazy" />
          <div className="section-intro">
            <p className="eyebrow">Automation and support</p>
            <h2>Give your team more time for the conversations that need them</h2>
            <p>Use keyword automation for common questions, capture leads in your CRM, and let your team take over from the shared inbox.</p>
            <Link className="button button-outline section-action" to="/about">How ChatMentorz works</Link>
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  )
}
