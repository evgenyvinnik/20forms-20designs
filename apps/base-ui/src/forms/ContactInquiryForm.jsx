import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function ContactInquiryForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Your name</Field.Label>
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
          defaultValue="general"
          required
        >
          <option value="general">General Support</option>
          <option value="sales">Sales & Business</option>
          <option value="feedback">Product Feedback</option>
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
      <button type="submit" className="base-button">
        Send inquiry
      </button>
    </form>
  )
}
