import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordResetForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Request a password reset link via email.
      </p>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Account email address</Field.Label>
        <Field.Input className="ark-input" name="email" type="email" required />
      </Field.Root>
      <button type="submit" className="ark-button">
        Send reset link
      </button>
    </form>
  )
}
