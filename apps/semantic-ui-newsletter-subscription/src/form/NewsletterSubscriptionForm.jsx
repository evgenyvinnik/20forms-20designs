import { Form, Button, Checkbox, Select } from 'semantic-ui-react'

const frequencyOptions = [
  { key: '', value: '', text: 'Select frequency' },
  { key: 'weekly', value: 'weekly', text: 'Weekly' },
  { key: 'monthly', value: 'monthly', text: 'Monthly' },
  { key: 'quarterly', value: 'quarterly', text: 'Quarterly' },
]

function NewsletterSubscriptionForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-newsletter-subscription-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Field required>
        <label>Frequency</label>
        <Select
          name="frequency"
          options={frequencyOptions}
          placeholder="Select frequency"
          required
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          name="agree"
          label="Receive product updates"
        />
      </Form.Field>
      <Button type="submit" primary>
        Subscribe
      </Button>
    </Form>
  )
}

export default NewsletterSubscriptionForm
