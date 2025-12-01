import { Form, Button, Checkbox, Select } from 'semantic-ui-react'

const topicOptions = [
  { key: '', value: '', text: 'Select topic' },
  { key: 'support', value: 'support', text: 'Support' },
  { key: 'sales', value: 'sales', text: 'Sales' },
  { key: 'feedback', value: 'feedback', text: 'Feedback' },
  { key: 'other', value: 'other', text: 'Other' },
]

function ContactInquiryForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-contact-inquiry-fullname"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-contact-inquiry-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Field required>
        <label>Topic</label>
        <Select
          name="topic"
          options={topicOptions}
          placeholder="Select topic"
          required
        />
      </Form.Field>
      <Form.TextArea
        id="semantic-ui-contact-inquiry-message"
        name="message"
        label="Message"
        rows={4}
        required
      />
      <Form.Field>
        <Checkbox name="consent" label="Allow follow-up communication" />
      </Form.Field>
      <Button type="submit" primary>
        Submit inquiry
      </Button>
    </Form>
  )
}

export default ContactInquiryForm
