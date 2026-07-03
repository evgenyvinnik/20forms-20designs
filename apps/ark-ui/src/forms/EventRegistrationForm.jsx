import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function EventRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Attendee name</Field.Label>
        <Field.Input className="ark-input" name="name" type="text" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email address</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Ticket pass</Field.Label>
        <select
          className="ark-select"
          name="ticket"
          defaultValue="general"
          required
        >
          <option value="general">General Admission</option>
          <option value="vip">VIP Access</option>
        </select>
      </Field.Root>
      <button type="submit" className="ark-button">
        Register for event
      </button>
    </form>
  )
}
