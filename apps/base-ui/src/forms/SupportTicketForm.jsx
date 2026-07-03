import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function SupportTicketForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Subject</Field.Label>
        <Field.Control
          className="base-input"
          name="subject"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Priority</Field.Label>
        <select
          className="base-select"
          name="priority"
          defaultValue="medium"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Description</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="description"
          rows={4}
          required
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Submit ticket
      </button>
    </form>
  )
}
