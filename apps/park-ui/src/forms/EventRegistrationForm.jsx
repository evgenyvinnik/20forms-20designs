import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function EventRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Event registration submitted!')
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
        <Field.Label className="park-label">Ticket type</Field.Label>
        <select
          className="park-select"
          name="ticketType"
          defaultValue="general"
          required
        >
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Number of guests</Field.Label>
        <Field.Input
          className="park-input"
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
      <button type="submit" className="park-button">
        Register
      </button>
    </form>
  )
}
