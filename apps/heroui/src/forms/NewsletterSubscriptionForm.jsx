import { useState } from 'react'
import { Input, Button, RadioGroup, Radio } from '@heroui/react'

export default function NewsletterSubscriptionForm() {
  const [formData, setFormData] = useState({
    email: '',
    frequency: 'weekly',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Subscribe to Newsletter
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
          Subscribed to newsletter successfully!
        </div>
      )}
      <div className="heroui-field">
        <label className="heroui-label">Email Address</label>
        <Input
          isRequired
          type="email"
          value={formData.email}
          onValueChange={(val) => setFormData({ ...formData, email: val })}
          placeholder="subscriber@example.com"
        />
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Digest Frequency</label>
        <RadioGroup
          value={formData.frequency}
          onValueChange={(val) => setFormData({ ...formData, frequency: val })}
        >
          <Radio value="daily">Daily updates</Radio>
          <Radio value="weekly">Weekly digest</Radio>
          <Radio value="monthly">Monthly summary</Radio>
        </RadioGroup>
      </div>
      <Button type="submit" color="primary">
        Subscribe
      </Button>
    </form>
  )
}
