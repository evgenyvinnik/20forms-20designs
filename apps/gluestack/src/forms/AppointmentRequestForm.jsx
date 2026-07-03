import { useState } from 'react'

export default function AppointmentRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: 'consultation',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Book Appointment
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
          Appointment request submitted!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Your Name</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Service Required</label>
        <select
          className="gluestack-select"
          required
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
        >
          <option value="consultation">Initial Consultation</option>
          <option value="followup">Follow-up Session</option>
          <option value="review">Annual Review</option>
        </select>
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Preferred Date</label>
        <input
          className="gluestack-input"
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Special Instructions</label>
        <textarea
          className="gluestack-textarea"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>
      <button type="submit" className="gluestack-button">
        Request Appointment
      </button>
    </form>
  )
}
