import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function CustomerFeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Satisfaction rating</Field.Label>
        <select className="base-select" name="rating" defaultValue="5" required>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Very Poor</option>
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
      <button type="submit" className="base-button">
        Submit feedback
      </button>
    </form>
  )
}
