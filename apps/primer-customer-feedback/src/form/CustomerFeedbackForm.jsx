import {
  Box,
  FormControl,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  Button,
} from '@primer/react'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback sent!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Name</FormControl.Label>
        <TextInput id="primer-feedback-name" name="name" type="text" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput id="primer-feedback-email" name="email" type="email" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Overall rating</FormControl.Label>
        <Select id="primer-feedback-rating" name="rating" block>
          <Select.Option value="">Select rating</Select.Option>
          <Select.Option value="excellent">Excellent</Select.Option>
          <Select.Option value="good">Good</Select.Option>
          <Select.Option value="average">Average</Select.Option>
          <Select.Option value="poor">Poor</Select.Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormControl.Label>Comments</FormControl.Label>
        <Textarea
          id="primer-feedback-comments"
          name="comments"
          rows={4}
          block
        />
      </FormControl>

      <FormControl>
        <Checkbox id="primer-feedback-followup" name="followUp" />
        <FormControl.Label>I would like a follow-up</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Send feedback
      </Button>
    </Box>
  )
}

export default CustomerFeedbackForm
