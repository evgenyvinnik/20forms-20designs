import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Two-Factor Authentication
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          Two-factor authentication verified!
        </div>
      )}
      <Field.Root className="base-field">
        <Field.Label className="base-label">Authentication Code</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="123456"
          maxLength={6}
        />
        <Field.Description style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          Enter the 6-digit code from your authenticator app.
        </Field.Description>
      </Field.Root>
      <button type="submit" className="base-button">
        Verify Code
      </button>
    </form>
  )
}
