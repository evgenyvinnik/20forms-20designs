import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
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
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email Address</Field.Label>
        <Field.Input
          className="ark-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
        />
        <Field.HelperText style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          Enter your registered email address to receive password reset
          instructions.
        </Field.HelperText>
      </Field.Root>
      <button type="submit" className="ark-button">
        Send Reset Link
      </button>
    </form>
  )
}
