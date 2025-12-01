import { Form, Button } from 'react-bootstrap'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-event-name">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-event-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-event-ticket">
        <Form.Label>Ticket type</Form.Label>
        <Form.Select name="ticketType" required>
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-event-guests">
        <Form.Label>Number of guests</Form.Label>
        <Form.Control
          name="guestCount"
          type="number"
          min="0"
          max="20"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-event-newsletter">
        <Form.Check
          type="checkbox"
          label="Notify me about future events"
          name="newsletter"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  )
}

export default EventRegistrationForm
