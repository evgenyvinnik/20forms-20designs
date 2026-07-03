import { useState } from 'react'

export default function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Two-Factor Authentication
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dbeafe',
            color: '#1e40af',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
          }}
        >
          Two-factor authentication verified!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Authentication Code</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
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
      <button type="submit" className="gluestack-button">
        Verify Code
      </button>
    </form>
  )
}
