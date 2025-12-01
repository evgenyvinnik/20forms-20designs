import { Form, Button } from 'react-bootstrap'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-contact-name">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-contact-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-contact-topic">
        <Form.Label>Topic</Form.Label>
        <Form.Select name="topic" required>
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-contact-message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={4} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-contact-consent">
        <Form.Check
          type="checkbox"
          label="Allow follow-up communication"
          name="consent"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit inquiry
      </Button>
    </Form>
  )
}

export default ContactInquiryForm
