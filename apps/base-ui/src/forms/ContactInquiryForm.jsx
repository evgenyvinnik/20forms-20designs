import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Full name</Field.Label>
        <Field.Control
          className="base-input"
          name="name"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email address</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Topic</Field.Label>
        <select
          className="base-select"
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
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Message</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
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
      <button type="submit" className="base-button">
        Submit inquiry
      </button>
    </form>
  )
}
