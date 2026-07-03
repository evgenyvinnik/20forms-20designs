import { useState } from 'react'
import { Input, Button, TextArea } from '@heroui/react'

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Contact Us
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
          Thank you for your message. We will respond shortly!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Your Name</label>
        <Input
          isRequired
          type="text"
          value={formData.name}
          onValueChange={(val) => setFormData({ ...formData, name: val })}
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
        <label className="heroui-label">Inquiry Subject</label>
        <select
          className="heroui-select"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          required
        >
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing Question</option>
          <option value="partnership">Partnership Opportunity</option>
        </select>
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Message</label>
        <TextArea
          isRequired
          minRows={4}
          value={formData.message}
          onValueChange={(val) => setFormData({ ...formData, message: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Send Message
      </Button>
    </form>
  )
}
