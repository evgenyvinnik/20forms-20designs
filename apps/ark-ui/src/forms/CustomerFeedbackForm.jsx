import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function CustomerFeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Full name</Field.Label>
        <Field.Input
          className="ark-input"
          name="fullName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email address</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Overall rating</Field.Label>
        <select
          className="ark-select"
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
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Comments</Field.Label>
        <Field.Textarea
          className="ark-textarea"
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
      <button type="submit" className="ark-button">
        Send feedback
      </button>
    </form>
  )
}
