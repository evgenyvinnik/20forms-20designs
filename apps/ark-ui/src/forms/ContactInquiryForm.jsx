import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Contact Us
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          Thank you for your message. We will respond shortly!
        </div>
      )}
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Your Name</Field.Label>
        <Field.Input
          className="ark-input"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email Address</Field.Label>
        <Field.Input
          className="ark-input"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Inquiry Subject</Field.Label>
        <select
          className="ark-select"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          required
        >
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing Question</option>
          <option value="partnership">Partnership Opportunity</option>
        </select>
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Message</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Send Message
      </button>
    </form>
  )
}
