import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Full name</Field.Label>
        <Field.Input className="ark-input" name="name" type="text" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email address</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Topic</Field.Label>
        <select
          className="ark-select"
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
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Message</Field.Label>
        <Field.Textarea
          className="ark-textarea"
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
      <button type="submit" className="ark-button">
        Submit inquiry
      </button>
    </form>
  )
}
