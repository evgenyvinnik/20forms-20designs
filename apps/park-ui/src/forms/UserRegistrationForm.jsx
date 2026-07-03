import { useState } from 'react'
import { Field } from '@ark-ui/react'

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
    <form onSubmit={handleSubmit} className="park-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Create Account
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
          Registration successful!
        </div>
      )}
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Full Name</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          placeholder="Jane Doe"
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email Address</Field.Label>
        <Field.Input
          className="park-input"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="jane@example.com"
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Password</Field.Label>
        <Field.Input
          className="park-input"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          minLength={8}
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Confirm Password</Field.Label>
        <Field.Input
          className="park-input"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </Field.Root>
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
      <button type="submit" className="park-button">
        Register
      </button>
    </form>
  )
}
