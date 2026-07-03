import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  SelectList,
  TextArea,
  TextField,
} from 'gestalt'

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

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-feedback-name"
          label="Name"
          onChange={({ value }) => setName(value)}
          type="text"
          value={name}
        />
        <TextField
          id="gestalt-feedback-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <SelectList
          id="gestalt-feedback-rating"
          label="Overall rating"
          onChange={({ value }) => setRating(value)}

          value={rating}
        >
          {[
            { label: 'Excellent', value: 'excellent' },
            { label: 'Good', value: 'good' },
            { label: 'Average', value: 'average' },
            { label: 'Poor', value: 'poor' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <TextArea
          id="gestalt-feedback-comments"
          label="Comments"
          onChange={({ value }) => setComments(value)}
          value={comments}
        />
        <Checkbox
          checked={followUp}
          id="gestalt-feedback-contact"
          label="I would like a follow-up"
          onChange={({ checked }) => setFollowUp(checked)}
        />
        <Box>
          <Button color="red" text="Send feedback" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default CustomerFeedbackForm
