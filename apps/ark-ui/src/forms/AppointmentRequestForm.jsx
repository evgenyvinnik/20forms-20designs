import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AppointmentRequestForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Full name</Field.Label>
        <Field.Input
          className="ark-input"
          name="fullName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email address</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Preferred date</Field.Label>
        <Field.Input className="ark-input" name="date" type="date" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Preferred time</Field.Label>
        <Field.Input className="ark-input" name="time" type="time" required />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Reason for visit</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          name="reason"
          rows={3}
          required
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Request appointment
      </button>
    </form>
  )
}
