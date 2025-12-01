import {
  Button,
  Checkbox,
  Stack,
  TextInput,
  Textarea,
  Select,
} from '@mantine/core'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-feedback-name"
          name="name"
          label="Name"
          type="text"
          required
        />
        <TextInput
          id="mantine-feedback-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <Select
          id="mantine-feedback-rating"
          name="rating"
          label="Overall rating"
          placeholder="Select rating"
          data={[
            { value: 'excellent', label: 'Excellent' },
            { value: 'good', label: 'Good' },
            { value: 'average', label: 'Average' },
            { value: 'poor', label: 'Poor' },
          ]}
          required
        />
        <Textarea
          id="mantine-feedback-comments"
          name="comments"
          label="Comments"
          rows={4}
          required
        />
        <Checkbox name="followUp" label="I would like a follow-up" />
        <Button type="submit">Send feedback</Button>
      </Stack>
    </form>
  )
}

export default CustomerFeedbackForm
