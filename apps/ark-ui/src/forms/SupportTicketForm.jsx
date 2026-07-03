import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function SupportTicketForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Subject</Field.Label>
        <Field.Input
          className="ark-input"
          name="subject"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Priority</Field.Label>
        <select
          className="ark-select"
          name="priority"
          defaultValue="medium"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Description</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          name="description"
          rows={4}
          required
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Submit ticket
      </button>
    </form>
  )
}
