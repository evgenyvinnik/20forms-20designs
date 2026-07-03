import { useState } from 'react'
import {
  TextInput,
  Selector,
  TextArea,
  CheckboxInput,
  Button,
} from '@astryxdesign/core'

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [comments, setComments] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  const ratingOptions = [
    { value: '', label: 'Select rating' },
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'average', label: 'Average' },
    { value: 'poor', label: 'Poor' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-feedback-name"
        name="name"
        type="text"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-feedback-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Selector
        id="astryx-feedback-rating"
        name="rating"
        label="Overall rating"
        value={rating}
        onChange={(val) => setRating(val)}
        options={ratingOptions}
      />

      <TextArea
        id="astryx-feedback-comments"
        name="comments"
        label="Comments"
        rows={4}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        required
      />

      <CheckboxInput
        name="followUp"
        label="I would like a follow-up"
        checked={followUp}
        onChange={(e) => setFollowUp(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Send feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
