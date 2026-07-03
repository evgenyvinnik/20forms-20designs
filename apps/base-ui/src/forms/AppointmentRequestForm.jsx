import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function AppointmentRequestForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Your name</Field.Label>
        <Field.Control
          className="base-input"
          name="name"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Service requested</Field.Label>
        <select
          className="base-select"
          name="service"
          defaultValue="consultation"
          required
        >
          <option value="consultation">Initial Consultation</option>
          <option value="followup">Follow-up Session</option>
        </select>
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Preferred date</Field.Label>
        <Field.Control
          className="base-input"
          name="date"
          type="date"
          required
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Notes</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="notes"
          rows={3}
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Request appointment
      </button>
    </form>
  )
}
