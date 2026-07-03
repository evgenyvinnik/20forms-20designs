import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function EventRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Event registration submitted!')
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
        <Field.Label className="base-label">Ticket type</Field.Label>
        <select
          className="base-select"
          name="ticketType"
          defaultValue="general"
          required
        >
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Number of guests</Field.Label>
        <Field.Control
          className="base-input"
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
      <button type="submit" className="base-button">
        Register
      </button>
    </form>
  )
}
