import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function CustomerFeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Full name</Field.Label>
        <Field.Input
          className="park-input"
          name="fullName"
          type="text"
          required
        />
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
        <Field.Label className="park-label">Overall rating</Field.Label>
        <select
          className="park-select"
          name="rating"
          defaultValue="excellent"
          required
        >
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Comments</Field.Label>
        <Field.Textarea
          className="park-textarea"
          name="comments"
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
        <input type="checkbox" name="followUp" />I would like a follow-up
      </label>
      <button type="submit" className="park-button">
        Send feedback
      </button>
    </form>
  )
}
