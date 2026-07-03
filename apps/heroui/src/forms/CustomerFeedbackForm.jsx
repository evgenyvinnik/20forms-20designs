import { useState } from 'react'
import { Button, RadioGroup, Radio, TextArea } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Overall Satisfaction</label>
        <RadioGroup
          orientation="horizontal"
          value={formData.rating}
          onValueChange={(val) => setFormData({ ...formData, rating: val })}
        >
          <Radio value="1">1 - Poor</Radio>
          <Radio value="2">2 - Fair</Radio>
          <Radio value="3">3 - Good</Radio>
          <Radio value="4">4 - Very Good</Radio>
          <Radio value="5">5 - Excellent</Radio>
        </RadioGroup>
      </div>
      <div className="heroui-field">
        <label className="heroui-label">Detailed Comments</label>
        <TextArea
          isRequired
          minRows={4}
          value={formData.comments}
          onValueChange={(val) => setFormData({ ...formData, comments: val })}
        />
      </div>
      <Button type="submit" color="primary">
        Submit Feedback
      </Button>
    </form>
  )
}
