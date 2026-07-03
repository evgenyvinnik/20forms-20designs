import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Button,
} from '@shopify/polaris'

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [comments, setComments] = useState('')
  const [followUp, setFollowUp] = useState(false)

  const ratingOptions = [
    { label: 'Select rating', value: '' },
    { label: 'Excellent', value: 'excellent' },
    { label: 'Good', value: 'good' },
    { label: 'Average', value: 'average' },
    { label: 'Poor', value: 'poor' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={setName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <Select
          label="Overall rating"
          options={ratingOptions}
          value={rating}
          onChange={setRating}
          requiredIndicator
        />
        <TextField
          label="Comments"
          value={comments}
          onChange={setComments}
          multiline={4}
          autoComplete="off"
          requiredIndicator
        />
        <Checkbox
          label="I would like a follow-up"
          checked={followUp}
          onChange={setFollowUp}
        />
        <Button submit variant="primary">
          Send feedback
        </Button>
      </FormLayout>
    </form>
  )
}

export default CustomerFeedbackForm
