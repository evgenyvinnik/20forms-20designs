import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Subscribe to Newsletter
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
          Subscribed to newsletter successfully!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Email Address</label>
        <input
          className="gluestack-input"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="subscriber@example.com"
        />
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Digest Frequency</label>
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
      </div>
      <button type="submit" className="gluestack-button">
        Subscribe
      </button>
    </form>
  )
}
