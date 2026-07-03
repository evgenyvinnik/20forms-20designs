import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function PasswordResetForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
      <Field.Label className="base-label">Account email address</Field.Label>
      <Field.Control className="base-input" name="email" type="email"     required />
      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Instructions will be sent to this address if an account exists.</span>
    </Field.Root>
<button type="submit" className="base-button">Send reset instructions</button>
    </form>
  )
}