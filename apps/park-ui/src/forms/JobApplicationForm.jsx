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
    <form onSubmit={handleSubmit} className="park-form">
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
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Full Name</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email Address</Field.Label>
        <Field.Input
          className="park-input"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Phone Number</Field.Label>
        <Field.Input
          className="park-input"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Cover Letter</Field.Label>
        <Field.Textarea
          className="park-textarea"
          rows={4}
          value={formData.coverLetter}
          onChange={(e) =>
            setFormData({ ...formData, coverLetter: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="park-button">
        Submit Application
      </button>
    </form>
  )
}
