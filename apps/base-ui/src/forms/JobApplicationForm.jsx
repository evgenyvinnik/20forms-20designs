import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Job Application
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
          Application submitted successfully!
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
        <Field.Label className="base-label">Phone Number</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Cover Letter</Field.Label>
        <Field.Control
          required
          render={<textarea className="base-control" rows={4} />}
          value={formData.coverLetter}
          onChange={(e) =>
            setFormData({ ...formData, coverLetter: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Submit Application
      </button>
    </form>
  )
}
