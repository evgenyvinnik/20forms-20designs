import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Attendee Name</label>
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
        <label className="heroui-label">Ticket Tier</label>
        <select
          className="heroui-select"
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
      </div>
      <Button type="submit" color="primary">
        Register for Event
      </Button>
    </form>
  )
}
