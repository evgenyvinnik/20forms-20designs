import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  ChoiceList,
  Checkbox,
  Button,
} from '@shopify/polaris'

function CustomerFeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(['3'])
  const [feedback, setFeedback] = useState('')
  const [recommend, setRecommend] = useState(false)

  const ratingOptions = [
    { label: '1 - Very poor', value: '1' },
    { label: '2 - Poor', value: '2' },
    { label: '3 - Average', value: '3' },
    { label: '4 - Good', value: '4' },
    { label: '5 - Excellent', value: '5' },
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
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
        />
        <ChoiceList
          title="How would you rate your experience?"
          choices={ratingOptions}
          selected={rating}
          onChange={setRating}
        />
        <TextField
          label="Your feedback"
          value={feedback}
          onChange={setFeedback}
          multiline={4}
          autoComplete="off"
          requiredIndicator
        />
        <Checkbox
          label="Would you recommend us to others?"
          checked={recommend}
          onChange={setRecommend}
        />
        <Button submit variant="primary">
          Submit feedback
        </Button>
      </FormLayout>
    </form>
  )
}

export default CustomerFeedbackForm
