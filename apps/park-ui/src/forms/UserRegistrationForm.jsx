import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function UserRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration submitted!')
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
        <Field.Label className="park-label">Username</Field.Label>
        <Field.Input
          className="park-input"
          name="username"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Password</Field.Label>
        <Field.Input
          className="park-input"
          name="password"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Confirm password</Field.Label>
        <Field.Input
          className="park-input"
          name="confirmPassword"
          type="password"
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
        <input type="checkbox" name="terms" required />I agree to the terms and
        conditions
      </label>
      <button type="submit" className="park-button">
        Create account
      </button>
    </form>
  )
}
