import { useState } from 'react'

export function useLeadForm(subject) {
  const [status, setStatus] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const body = new FormData(form)
    body.append('_subject', subject)
    body.append('_captcha', 'false')
    setStatus('submitting')

    try {
      const response = await fetch('https://formsubmit.co/ajax/chatmentorz@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      if (!response.ok) {
        setStatus('error')
        return
      }
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return [status, handleSubmit]
}
