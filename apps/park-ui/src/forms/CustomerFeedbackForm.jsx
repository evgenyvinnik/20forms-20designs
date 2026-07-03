import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function CustomerFeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Satisfaction rating</Field.Label>
        <select className="park-select" name="rating" defaultValue="5" required>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Very Poor</option>
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
      <button type="submit" className="park-button">
        Submit feedback
      </button>
    </form>
  )
}
