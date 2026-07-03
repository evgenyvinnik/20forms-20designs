import { useState } from 'react'
import { Input, Button, TextArea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
        <label className="heroui-label">Service Required</label>
        <select
          className="heroui-select"
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
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Preferred Date</label>
        <Input
          isRequired
          type="date"
          value={formData.date}
          onValueChange={(val) => setFormData({ ...formData, date: val })}
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Special Instructions</label>
        <TextArea
          minRows={3}
          value={formData.notes}
          onValueChange={(val) => setFormData({ ...formData, notes: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Request Appointment
      </Button>
    </form>
  )
}
