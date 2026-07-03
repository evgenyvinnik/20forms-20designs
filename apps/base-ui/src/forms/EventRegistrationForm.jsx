import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function EventRegistrationForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
      <Field.Label className="base-label">Attendee name</Field.Label>
      <Field.Control className="base-input" name="name" type="text"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
      <Field.Label className="base-label">Email address</Field.Label>
      <Field.Control className="base-input" name="email" type="email"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
        <Field.Label className="base-label">Ticket pass</Field.Label>
        <select className="base-select" name="ticket" defaultValue="general" required>
          <option value="general">General Admission</option>
          <option value="vip">VIP Access</option>
        </select>
      </Field.Root>
<button type="submit" className="base-button">Register for event</button>
    </form>
  )
}