import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const ratingOptions = [
  { label: 'Excellent', value: 'excellent' },
  { label: 'Good', value: 'good' },
  { label: 'Average', value: 'average' },
  { label: 'Poor', value: 'poor' },
]

function CustomerFeedbackForm() {
  const [rating, setRating] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-feedback-name">Name</Label>
          <Textfield
            id="atlaskit-feedback-name"
            name="name"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-feedback-email">Email address</Label>
          <Textfield
            id="atlaskit-feedback-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-feedback-rating">Overall rating</Label>
          <Select
            inputId="atlaskit-feedback-rating"
            name="rating"
            options={ratingOptions}
            value={rating}
            onChange={setRating}
            placeholder="Select rating"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-feedback-comments">Comments</Label>
          <TextArea
            id="atlaskit-feedback-comments"
            name="comments"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="followUp"
            label="I would like a follow-up"
          />
        </Box>
        <Button type="submit" appearance="primary">Send feedback</Button>
      </Stack>
    </form>
  )
}

export default CustomerFeedbackForm
