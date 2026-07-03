import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function PasswordResetForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Request a password reset link via email.
      </p>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Account email address</Field.Label>
        <Field.Control
          className="base-input"
          name="email"
          type="email"
          required
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Send reset link
      </button>
    </form>
  )
}
