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
        <div style={{ display: 'flex', gap: '1rem' }}>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="low" /> Low
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="medium" defaultChecked />{' '}
            Medium
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="high" /> High
          </label>
        </div>
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Issue description</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          name="description"
          rows={4}
          required
        />
      </Field.Root>
      <Field.Root className="ark-field">
        <Field.Label className="ark-label">Attachments</Field.Label>
        <Field.Input className="ark-input" name="attachment" type="file" />
      </Field.Root>
      <button type="submit" className="ark-button">
        Submit ticket
      </button>
    </form>
  )
}
