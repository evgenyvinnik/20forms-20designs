import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordResetForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password reset requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Request a password reset link via email.
      </p>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Account email address</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Send reset link
      </button>
    </form>
  )
}
