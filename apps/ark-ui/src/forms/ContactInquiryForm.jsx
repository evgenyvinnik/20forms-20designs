import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Your name</Field.Label>
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
          defaultValue="general"
          required
        >
          <option value="general">General Support</option>
          <option value="sales">Sales & Business</option>
          <option value="feedback">Product Feedback</option>
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
      <button type="submit" className="ark-button">
        Send inquiry
      </button>
    </form>
  )
}
