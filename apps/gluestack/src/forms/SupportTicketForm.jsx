import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Create Support Ticket
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
          Support ticket created successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Issue Subject</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Priority Level</label>
        <select
          className="gluestack-select"
          required
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Description of Issue</label>
        <textarea
          className="gluestack-textarea"
          required
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <button type="submit" className="gluestack-button">
        Submit Ticket
      </button>
    </form>
  )
}
