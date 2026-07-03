import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Job Application
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
          Application submitted successfully!
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
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Phone Number</label>
        <input
          className="gluestack-input"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Cover Letter</label>
        <textarea
          className="gluestack-textarea"
          required
          rows={4}
          value={formData.coverLetter}
          onChange={(e) =>
            setFormData({ ...formData, coverLetter: e.target.value })
          }
        />
      </div>
      <button type="submit" className="gluestack-button">
        Submit Application
      </button>
    </form>
  )
}
