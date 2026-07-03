import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Reset Password
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
          Password reset link sent to your email!
        </div>
      )}
      <Field.Root className="base-field">
        <Field.Label className="base-label">Email Address</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
        />
        <Field.Description style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          Enter your registered email address to receive password reset
          instructions.
        </Field.Description>
      </Field.Root>
      <button type="submit" className="base-button">
        Send Reset Link
      </button>
    </form>
  )
}
