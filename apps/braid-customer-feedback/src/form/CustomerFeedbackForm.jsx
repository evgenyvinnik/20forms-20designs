import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Dropdown, Textarea, Checkbox, Button } from 'braid-design-system'

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
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-feedback-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextField
          id="braid-feedback-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Dropdown
          id="braid-feedback-rating"
          label="Overall rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Select rating"
        >
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </Dropdown>

        <Textarea
          id="braid-feedback-comments"
          label="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          lines={4}
          required
        />

        <Checkbox
          id="braid-feedback-followup"
          label="I would like a follow-up"
          checked={followUp}
          onChange={(e) => setFollowUp(e.target.checked)}
        />

        <Box>
          <Button type="submit">Send feedback</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default CustomerFeedbackForm
