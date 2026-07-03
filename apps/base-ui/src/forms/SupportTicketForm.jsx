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
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Issue description</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="description"
          rows={4}
          required
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Attachments</Field.Label>
        <Field.Control className="base-input" name="attachment" type="file" />
      </Field.Root>
      <button type="submit" className="base-button">
        Submit ticket
      </button>
    </form>
  )
}
