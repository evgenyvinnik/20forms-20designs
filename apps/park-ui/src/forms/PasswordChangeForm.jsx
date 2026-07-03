import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function PasswordChangeForm() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Change Password
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
          Password changed successfully!
        </div>
      )}
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Current Password</Field.Label>
        <Field.Input
          className="park-input"
          type="password"
          value={formData.currentPassword}
          onChange={(e) =>
            setFormData({ ...formData, currentPassword: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">New Password</Field.Label>
        <Field.Input
          className="park-input"
          type="password"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData({ ...formData, newPassword: e.target.value })
          }
          minLength={8}
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Confirm New Password</Field.Label>
        <Field.Input
          className="park-input"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Update Password
      </button>
    </form>
  )
}
