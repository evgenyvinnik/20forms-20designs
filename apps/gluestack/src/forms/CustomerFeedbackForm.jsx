import { useState } from 'react'

export default function CustomerFeedbackForm() {
  const [formData, setFormData] = useState({
    rating: '5',
    comments: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Customer Feedback
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
          Thank you for your feedback!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Overall Satisfaction</label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['1', '2', '3', '4', '5'].map((r) => (
            <label
              key={r}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.875rem',
              }}
            >
              <input
                type="radio"
                name="rating"
                value={r}
                checked={formData.rating === r}
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
              />
              {r}
            </label>
          ))}
        </div>
      </div>
      <div className="gluestack-field">
        <label className="gluestack-label">Detailed Comments</label>
        <textarea
          className="gluestack-textarea"
          required
          rows={4}
          value={formData.comments}
          onChange={(e) =>
            setFormData({ ...formData, comments: e.target.value })
          }
        />
      </div>
      <button type="submit" className="gluestack-button">
        Submit Feedback
      </button>
    </form>
  )
}
