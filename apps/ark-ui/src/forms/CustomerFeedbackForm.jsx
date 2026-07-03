import { useState } from 'react'
import { Field } from '@ark-ui/react'

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
    <form onSubmit={handleSubmit} className="ark-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Customer Feedback
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
          Thank you for your feedback!
        </div>
      )}
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Overall Satisfaction</Field.Label>
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
      </Field.Root>
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Detailed Comments</Field.Label>
        <Field.Textarea
          className="ark-textarea"
          rows={4}
          value={formData.comments}
          onChange={(e) =>
            setFormData({ ...formData, comments: e.target.value })
          }
        />
      </Field.Root>
      <button type="submit" className="ark-button">
        Submit Feedback
      </button>
    </form>
  )
}
