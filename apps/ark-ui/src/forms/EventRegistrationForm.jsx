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
        <Field.Label className="ark-label">Ticket type</Field.Label>
        <select
          className="ark-select"
          name="ticketType"
          defaultValue="general"
          required
        >
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Number of guests</Field.Label>
        <Field.Input
          className="ark-input"
          name="guests"
          type="number"
          defaultValue="1"
          required
        />
      </Field.Root>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="notify" />
        Notify me about future events
      </label>
      <button type="submit" className="ark-button">
        Register
      </button>
    </form>
  )
}
