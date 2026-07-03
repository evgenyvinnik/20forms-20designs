import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AppointmentRequestForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Full name</Field.Label>
        <Field.Input
          className="park-input"
          name="fullName"
          type="text"
          required
        />
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
        <Field.Label className="park-label">Preferred date</Field.Label>
        <Field.Input className="park-input" name="date" type="date" required />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Preferred time</Field.Label>
        <Field.Input className="park-input" name="time" type="time" required />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Reason for visit</Field.Label>
        <Field.Textarea
          className="park-textarea"
          name="reason"
          rows={3}
          required
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Request appointment
      </button>
    </form>
  )
}
