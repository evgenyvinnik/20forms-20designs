import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordResetForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
      <Field.Label className="ark-label">Account email address</Field.Label>
      <Field.Input className="ark-input" name="email" type="email"     required />
      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Instructions will be sent to this address if an account exists.</span>
    </Field.Root>
<button type="submit" className="ark-button">Send reset instructions</button>
    </form>
  )
}