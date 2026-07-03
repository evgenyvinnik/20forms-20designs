import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

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
    <form onSubmit={handleSubmit} className="base-form">
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
      <Field.Root className="base-field">
        <Field.Label className="base-label">Your Name</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Service Required</Field.Label>
        <select
          className="base-control"
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
      <Field.Root className="base-field">
        <Field.Label className="base-label">Preferred Date</Field.Label>
        <Field.Control
          required
          className="base-control"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </Field.Root>
      <Field.Root className="base-field">
        <Field.Label className="base-label">Special Instructions</Field.Label>
        <Field.Control
          render={<textarea className="base-control" rows={3} />}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </Field.Root>
      <button type="submit" className="base-button">
        Request Appointment
      </button>
    </form>
  )
}
