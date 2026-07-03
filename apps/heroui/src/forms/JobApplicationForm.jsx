import { useState } from 'react'
import { Input, Button, TextArea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Full Name</label>
        <Input
          isRequired
          type="text"
          value={formData.fullName}
          onValueChange={(val) => setFormData({ ...formData, fullName: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Phone Number</label>
        <Input
          isRequired
          type="tel"
          value={formData.phone}
          onValueChange={(val) => setFormData({ ...formData, phone: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Cover Letter</label>
        <TextArea
          isRequired
          minRows={4}
          value={formData.coverLetter}
          onValueChange={(val) =>
            setFormData({ ...formData, coverLetter: val })
          }
        />
      </div>
      <Button type="submit" color="primary">
        Submit Application
      </Button>
    </form>
  )
}
