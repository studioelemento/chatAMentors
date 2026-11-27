import { Mail, MapPin, Phone } from 'lucide-react'
import { FormStatus } from '../../../components/LeadForm'
import { useLeadForm } from '../../../components/useLeadForm'

const address = '1st Floor, TC 56/723, Muthukattuvila Line, Naduvath, Nemam, Thiruvananthapuram, Kerala 695020'
const mapQuery = encodeURIComponent(address)

export default function ContactSection() {
  const [status, submit] = useLeadForm('New Contact Us Message')

  return (
    <section className="section wrap contact-grid">
      <form className="lead-form" onSubmit={submit}>
        <h2>Send us a message</h2>
        <div className="field-grid">
          <label>First name<input name="First Name" autoComplete="given-name" required /></label>
          <label>Last name<input name="Last Name" autoComplete="family-name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Phone <span>(optional)</span><input name="Phone" type="tel" autoComplete="tel" /></label>
        </div>
        <label>Message<textarea name="Message" rows="6" required /></label>
        <button className="button" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send message'}</button>
        <FormStatus status={status} />
      </form>
      <aside className="contact-details">
        <h2>Contact details</h2>
        <ul>
          <li><Phone size={19} /><a href="tel:+918921675767">+91 89216 75767</a></li>
          <li><Mail size={19} /><a href="mailto:sales@chatmentorz.in">sales@chatmentorz.in</a></li>
          <li><MapPin size={19} /><a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}>{address}</a></li>
        </ul>
        <iframe title="ChatMentorz office map" src={`https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </aside>
    </section>
  )
}
