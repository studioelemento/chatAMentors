import { FormStatus } from '../../../components/LeadForm'
import { useLeadForm } from '../../../components/useLeadForm'

export default function GetInTouch() {
  const [status, submit] = useLeadForm('New Inquiry from Home Page (Get In Touch)')

  return (
    <section className="section wrap lead-grid" id="get-in-touch">
      <div className="section-intro">
        <p className="eyebrow">Get in touch</p>
        <h2>Tell us what you’d like to automate</h2>
        <p>Share your goals and the channels you use. Our team can help you find the right starting point.</p>
        <a className="text-link" href="mailto:sales@chatmentorz.in">sales@chatmentorz.in</a>
      </div>
      <form className="lead-form" onSubmit={submit}>
        <div className="field-grid">
          <label>Name<input name="Name" autoComplete="name" required /></label>
          <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
        </div>
        <label>Subject <span>(optional)</span><input name="Subject" /></label>
        <label>Message<textarea name="Message" rows="4" required /></label>
        <button className="button" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send inquiry'}</button>
        <FormStatus status={status} />
      </form>
    </section>
  )
}
