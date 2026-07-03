import { useState } from 'react'

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Create Account
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
          Registration successful!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Full Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          placeholder="Jane Doe"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="jane@example.com"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          minLength={8}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Confirm Password</label>
        <input
          className="gluestack-input"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </div>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          required
          checked={formData.terms}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
        />
        I agree to the Terms of Service and Privacy Policy
      </label>
      <button type="submit" className="gluestack-button">
        Register
      </button>
    </form>
  )
}
