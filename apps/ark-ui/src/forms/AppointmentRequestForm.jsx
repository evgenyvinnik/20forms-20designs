import { useState } from 'react'
import { Field } from '@ark-ui/react'

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
    <form onSubmit={handleSubmit} className="ark-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Book Appointment
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
          Appointment request submitted!
        </div>
      )}
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Your Name</Field.Label>
        <Field.Input
          className="ark-input"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Service Required</Field.Label>
        <select
          className="ark-select"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
          required
        >
          <option value="consultation">Initial Consultation</option>
          <option value="followup">Follow-up Session</option>
          <option value="review">Annual Review</option>
        </select>
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Preferred Date</Field.Label>
        <Field.Input
          className="ark-input"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </Field.Root>
      <Field.Root className="ark-field">
        <Field.Label className="ark-label">Special Instructions</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Request Appointment
      </button>
    </form>
  )
}
