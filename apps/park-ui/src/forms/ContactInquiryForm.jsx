import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Your name</Field.Label>
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
          defaultValue="general"
          required
        >
          <option value="general">General Support</option>
          <option value="sales">Sales & Business</option>
          <option value="feedback">Product Feedback</option>
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
      <button type="submit" className="park-button">
        Send inquiry
      </button>
    </form>
  )
}
