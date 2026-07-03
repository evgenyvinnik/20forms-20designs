import { useState } from 'react'
import { Field } from '@ark-ui/react'

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
    <form onSubmit={handleSubmit} className="ark-form">
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
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Issue Subject</Field.Label>
        <Field.Input
          className="ark-input"
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Priority Level</Field.Label>
        <select
          className="ark-select"
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
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Description of Issue</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Submit Ticket
      </button>
    </form>
  )
}
