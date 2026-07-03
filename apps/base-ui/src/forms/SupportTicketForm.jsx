import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

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
    <form onSubmit={handleSubmit} className="base-form">
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
      <Field.Root className="base-field">
        <Field.Label className="base-label">Issue Subject</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Priority Level</Field.Label>
        <select
          className="base-control"
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
      <Field.Root className="base-field">
        <Field.Label className="base-label">Description of Issue</Field.Label>
        <Field.Control
          required
          render={<textarea className="base-control" rows={4} />}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Submit Ticket
      </button>
    </form>
  )
}
