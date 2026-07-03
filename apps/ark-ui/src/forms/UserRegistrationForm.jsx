import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function UserRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
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
        <Field.Label className="ark-label">Username</Field.Label>
        <Field.Input
          className="ark-input"
          name="username"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Password</Field.Label>
        <Field.Input
          className="ark-input"
          name="password"
          type="password"
          required
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Confirm password</Field.Label>
        <Field.Input
          className="ark-input"
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
      <button type="submit" className="ark-button">
        Create account
      </button>
    </form>
  )
}
