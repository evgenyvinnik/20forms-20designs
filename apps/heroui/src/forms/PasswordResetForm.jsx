import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={email}
          onValueChange={setEmail}
          placeholder="your.email@example.com"
        />
        <span
          style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            marginTop: '0.25rem',
          }}
        >
          Enter your registered email address to receive password reset
          instructions.
        </span>
      </div>
      <Button type="submit" color="primary">
        Send Reset Link
      </Button>
    </form>
  )
}
