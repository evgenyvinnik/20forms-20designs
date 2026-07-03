import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function TwoFactorAuthForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('2FA code submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Enter the code from your authenticator app or SMS.
      </p>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Verification code</Field.Label>
        <Field.Input
          className="park-input"
          name="code"
          type="text"
          maxLength={6}
          pattern="[0-9]{6}"
          required
        />
      </Field.Root>
      <Field.Root className="park-field">
        <Field.Label className="park-label">Backup code (optional)</Field.Label>
        <Field.Input className="park-input" name="backupCode" type="text" />
      </Field.Root>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="trustDevice" />
        Trust this device for 30 days
      </label>
      <button type="submit" className="park-button">
        Verify
      </button>
      <button
        type="button"
        style={{
          background: 'none',
          border: 'none',
          color: '#2563eb',
          cursor: 'pointer',
          fontSize: '0.875rem',
        }}
        onClick={() => alert('Resending code placeholder')}
      >
        Resend code
      </button>
    </form>
  )
}
