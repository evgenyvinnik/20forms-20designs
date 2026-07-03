import { useState } from 'react'
import { Input, Button, TextArea } from '@heroui/react'

export default function SupportTicketForm() {
  const [formData, setFormData] = useState({
    subject: '',
    priority: 'medium',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Create Support Ticket
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
          Support ticket created successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Issue Subject</label>
        <Input
          isRequired
          type="text"
          value={formData.subject}
          onValueChange={(val) => setFormData({ ...formData, subject: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Priority Level</label>
        <select
          className="heroui-select"
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
          required
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Description of Issue</label>
        <TextArea
          isRequired
          minRows={4}
          value={formData.description}
          onValueChange={(val) =>
            setFormData({ ...formData, description: val })
          }
        />
      </div>
      <Button type="submit" color="primary">
        Submit Ticket
      </Button>
    </form>
  )
}
