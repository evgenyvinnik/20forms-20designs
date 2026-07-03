import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function ProfileUpdateForm() {
  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    bio: 'Software engineer and open source enthusiast.',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Profile Settings
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
          Profile updated successfully!
        </div>
      )}
      <Field.Root className="base-field">
        <Field.Label className="base-label">Full Name</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Email Address</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Bio</Field.Label>
        <Field.Control
          render={<textarea className="base-control" rows={3} />}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Save Changes
      </button>
    </form>
  )
}
