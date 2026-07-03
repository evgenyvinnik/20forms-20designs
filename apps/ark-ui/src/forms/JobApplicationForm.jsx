import { useState } from 'react'
import { Field } from '@ark-ui/react'

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
    <form onSubmit={handleSubmit} className="ark-form">
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
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Full Name</Field.Label>
        <Field.Input
          className="ark-input"
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email Address</Field.Label>
        <Field.Input
          className="ark-input"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Phone Number</Field.Label>
        <Field.Input
          className="ark-input"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Cover Letter</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          rows={4}
          value={formData.coverLetter}
          onChange={(e) =>
            setFormData({ ...formData, coverLetter: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Submit Application
      </button>
    </form>
  )
}
