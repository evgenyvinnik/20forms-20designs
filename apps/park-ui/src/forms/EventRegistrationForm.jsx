import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: 'standard',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Event Registration
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
          Event registration confirmed!
        </div>
      )}
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Attendee Name</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Email Address</Field.Label>
        <Field.Input
          className="park-input"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Field.Root>
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Ticket Tier</Field.Label>
        <select
          className="park-select"
          value={formData.ticketType}
          onChange={(e) =>
            setFormData({ ...formData, ticketType: e.target.value })
          }
          required
        >
          <option value="standard">Standard Pass</option>
          <option value="vip">VIP Pass</option>
          <option value="student">Student Pass</option>
        </select>
      </Field.Root>
      <button type="submit" className="park-button">
        Register for Event
      </button>
    </form>
  )
}
