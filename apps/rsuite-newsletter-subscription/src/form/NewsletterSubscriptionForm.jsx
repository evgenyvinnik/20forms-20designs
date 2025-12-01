import { Form, Button, SelectPicker, Checkbox } from 'rsuite'

const frequencyOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
]

function NewsletterSubscriptionForm() {
  const handleSubmit = () => {
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="frequency">
        <Form.ControlLabel>Frequency</Form.ControlLabel>
        <Form.Control
          name="frequency"
          accepter={SelectPicker}
          data={frequencyOptions}
          placeholder="Select frequency"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="agree">
        <Checkbox name="agree">Receive product updates</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Subscribe
        </Button>
      </Form.Group>
    </Form>
  )
}

export default NewsletterSubscriptionForm
