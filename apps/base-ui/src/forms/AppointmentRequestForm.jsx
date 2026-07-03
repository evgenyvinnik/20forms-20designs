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
        <Field.Label className="base-label">Full name</Field.Label>
        <Field.Control
          className="base-input"
          name="fullName"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email address</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          required
        />
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
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Preferred time</Field.Label>
        <Field.Control
          className="base-input"
          name="time"
          type="time"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Reason for visit</Field.Label>
        <Field.Control
          render={<textarea />}
          className="base-textarea"
          name="reason"
          rows={3}
          required
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Request appointment
      </button>
    </form>
  )
}
