import { Form, Button } from 'react-bootstrap'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-newsletter-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-newsletter-frequency">
        <Form.Label>Frequency</Form.Label>
        <Form.Select name="frequency" required>
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-newsletter-updates">
        <Form.Check
          type="checkbox"
          label="Receive product updates"
          name="agree"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </Form>
  )
}

export default NewsletterSubscriptionForm
