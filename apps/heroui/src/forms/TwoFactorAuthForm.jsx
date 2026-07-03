import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Authentication Code</label>
        <Input
          isRequired
          type="text"
          value={code}
          onValueChange={setCode}
          placeholder="123456"
          maxLength={6}
        />
        <span
          style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            marginTop: '0.25rem',
          }}
        >
          Enter the 6-digit code from your authenticator app.
        </span>
      </div>
      <Button type="submit" color="primary">
        Verify Code
      </Button>
    </form>
  )
}
