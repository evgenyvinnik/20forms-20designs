import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordResetForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Password reset requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Account email address</Field.Label>
        <Field.Input
          className="park-input"
          name="email"
          type="email"
          required
        />
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
          Instructions will be sent to this address if an account exists.
        </span>
      </Field.Root>
      <button type="submit" className="park-button">
        Send reset instructions
      </button>
    </form>
  )
}
