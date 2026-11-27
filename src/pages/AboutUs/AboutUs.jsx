import { Link } from 'react-router-dom'
import { BookOpen, Compass, Lightbulb } from 'lucide-react'
import PageBanner from '../../components/PageBanner'
import aboutImage from '../../assets/img-Home/homeAboutUs.png'

const principles = [
  [Compass, 'Mission', 'Help businesses hold more useful, human conversations at scale while giving their teams time to focus on complex requests.'],
  [Lightbulb, 'Vision', 'Make conversational AI a practical part of how businesses serve customers and build lasting relationships.'],
  [BookOpen, 'Values', 'Keep improving how automation adapts to real customer needs and make powerful tools accessible to the teams that use them.'],
]

export default function AboutUs() {
  return (
    <>
      <PageBanner label="About ChatMentorz" title="Bring your business closer to its customers" description="We build conversational AI tools for the channels where people already talk to businesses." />
      <section className="section wrap story-grid">
        <div className="section-intro">
          <h2>Build around the way your customers talk</h2>
          <p>ChatMentorz brings messaging, customer support, and sales automation into one workspace. Build conversations with a no-code editor and route questions that need a person to your team.</p>
          <Link className="button button-outline section-action" to="/products">Explore our products</Link>
        </div>
        <img src={aboutImage} alt="ChatMentorz business automation illustration" loading="lazy" />
      </section>
      <section className="soft-section section">
        <div className="wrap">
          <div className="section-intro"><h2>What guides our work</h2></div>
          <div className="feature-grid">
            {principles.map(([Icon, title, description]) => (
              <article className="feature-card" key={title}>
                <span className="feature-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-intro">
          <p className="eyebrow">Services</p>
          <h2>Support from integration to maintenance</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card"><h3>Chatbot integration</h3><p>Connect chatbots to your website, app, or CRM.</p></article>
          <article className="feature-card"><h3>Custom chatbot development</h3><p>Design and implement a chatbot around your business requirements.</p></article>
          <article className="feature-card"><h3>Training and maintenance</h3><p>Help your team manage the chatbot and keep its responses current.</p></article>
        </div>
      </section>
      <section className="cta-panel"><div className="wrap"><h2>Talk to us about your workflow</h2><Link className="button" to="/contact">Contact our team</Link></div></section>
    </>
  )
}
