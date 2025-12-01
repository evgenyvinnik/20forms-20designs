import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiTextArea,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

const ratingOptions = [
  { value: '', text: 'Select rating' },
  { value: 'excellent', text: 'Excellent' },
  { value: 'good', text: 'Good' },
  { value: 'average', text: 'Average' },
  { value: 'poor', text: 'Poor' },
]

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [comments, setComments] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Name">
        <EuiFieldText
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Overall rating">
        <EuiSelect
          options={ratingOptions}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Comments">
        <EuiTextArea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          rows={4}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="followUp"
          label="I would like a follow-up"
          checked={followUp}
          onChange={(e) => setFollowUp(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Send feedback
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default CustomerFeedbackForm
