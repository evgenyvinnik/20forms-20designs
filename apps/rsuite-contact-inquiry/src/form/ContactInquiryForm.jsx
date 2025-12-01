import { Form, Button, SelectPicker, Input, Checkbox } from 'rsuite'

const topicOptions = [
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Other', value: 'other' },
]

function ContactInquiryForm() {
  const handleSubmit = () => {
    alert('Inquiry submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.ControlLabel>Full name</Form.ControlLabel>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="topic">
        <Form.ControlLabel>Topic</Form.ControlLabel>
        <Form.Control
          name="topic"
          accepter={SelectPicker}
          data={topicOptions}
          placeholder="Select topic"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.ControlLabel>Message</Form.ControlLabel>
        <Form.Control
          name="message"
          accepter={Input}
          as="textarea"
          rows={4}
          required
        />
      </Form.Group>

      <Form.Group controlId="consent">
        <Checkbox name="consent">Allow follow-up communication</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Submit inquiry
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ContactInquiryForm
