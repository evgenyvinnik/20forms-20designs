import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function CustomerFeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Full name</Field.Label>
        <Field.Control
          className="base-input"
          name="fullName"
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
        <Field.Label className="base-label">Overall rating</Field.Label>
        <select
          className="base-select"
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
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Comments</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
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
      <button type="submit" className="base-button">
        Send feedback
      </button>
    </form>
  )
}
