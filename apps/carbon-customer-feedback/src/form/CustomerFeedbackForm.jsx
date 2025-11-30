import { Form, TextInput, Select, SelectItem, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-feedback-name"
          name="name"
          labelText="Name"
          required
        />
        <TextInput
          id="carbon-feedback-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-feedback-rating"
          name="rating"
          labelText="Overall rating"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select rating" />
          <SelectItem value="excellent" text="Excellent" />
          <SelectItem value="good" text="Good" />
          <SelectItem value="average" text="Average" />
          <SelectItem value="poor" text="Poor" />
        </Select>
        <TextArea
          id="carbon-feedback-comments"
          name="comments"
          labelText="Comments"
          rows={4}
          required
        />
        <Checkbox
          id="carbon-feedback-followup"
          name="followUp"
          labelText="I would like a follow-up"
        />
        <Button type="submit">Send feedback</Button>
      </Stack>
    </Form>
  )
}

export default CustomerFeedbackForm
