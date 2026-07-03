import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function EventRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Attendee name</Field.Label>
        <Field.Input className="park-input" name="name" type="text" required />
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
        <Field.Label className="park-label">Ticket pass</Field.Label>
        <select
          className="park-select"
          name="ticket"
          defaultValue="general"
          required
        >
          <option value="general">General Admission</option>
          <option value="vip">VIP Access</option>
        </select>
      </Field.Root>
      <button type="submit" className="park-button">
        Register for event
      </button>
    </form>
  )
}
