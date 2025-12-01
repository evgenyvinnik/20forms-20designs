import { Form, Button, Checkbox, Select } from 'semantic-ui-react'

const ratingOptions = [
  { key: '', value: '', text: 'Select rating' },
  { key: 'excellent', value: 'excellent', text: 'Excellent' },
  { key: 'good', value: 'good', text: 'Good' },
  { key: 'average', value: 'average', text: 'Average' },
  { key: 'poor', value: 'poor', text: 'Poor' },
]

function CustomerFeedbackForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-customer-feedback-name"
        name="name"
        label="Name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-customer-feedback-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Field required>
        <label>Overall rating</label>
        <Select
          name="rating"
          options={ratingOptions}
          placeholder="Select rating"
          required
        />
      </Form.Field>
      <Form.TextArea
        id="semantic-ui-customer-feedback-comments"
        name="comments"
        label="Comments"
        rows={4}
        required
      />
      <Form.Field>
        <Checkbox name="followUp" label="I would like a follow-up" />
      </Form.Field>
      <Button type="submit" primary>
        Send feedback
      </Button>
    </Form>
  )
}

export default CustomerFeedbackForm
