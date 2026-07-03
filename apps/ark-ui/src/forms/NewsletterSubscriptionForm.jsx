import { useState } from 'react'
import { Field } from '@ark-ui/react'

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
    <form onSubmit={handleSubmit} className="ark-form">
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
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Email Address</Field.Label>
        <Field.Input
          className="ark-input"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="subscriber@example.com"
        />
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Digest Frequency</Field.Label>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            <input
              type="radio"
              name="frequency"
              value="daily"
              checked={formData.frequency === 'daily'}
              onChange={(e) =>
                setFormData({ ...formData, frequency: e.target.value })
              }
            />
            Daily updates
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            <input
              type="radio"
              name="frequency"
              value="weekly"
              checked={formData.frequency === 'weekly'}
              onChange={(e) =>
                setFormData({ ...formData, frequency: e.target.value })
              }
            />
            Weekly digest
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            <input
              type="radio"
              name="frequency"
              value="monthly"
              checked={formData.frequency === 'monthly'}
              onChange={(e) =>
                setFormData({ ...formData, frequency: e.target.value })
              }
            />
            Monthly summary
          </label>
        </div>
      </Field.Root>
      <button type="submit" className="ark-button">
        Subscribe
      </button>
    </form>
  )
}
