import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Full name</Field.Label>
        <Field.Input className="park-input" name="name" type="text" required />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email address</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Topic</Field.Label>
        <select
          className="park-select"
          name="topic"
          defaultValue="support"
          required
        >
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Message</Field.Label>
        <Field.Textarea
          className="park-textarea"
          name="message"
          rows={4}
          required
        />
      </Field.Root>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="allowFollowup" />
        Allow follow-up communication
      </label>
      <button type="submit" className="park-button">
        Submit inquiry
      </button>
    </form>
  )
}
