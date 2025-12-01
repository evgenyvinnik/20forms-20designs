import { Form, Button } from 'react-bootstrap'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-appointment-name">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-appointment-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-appointment-date">
        <Form.Label>Preferred date</Form.Label>
        <Form.Control name="date" type="date" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-appointment-time">
        <Form.Label>Preferred time</Form.Label>
        <Form.Control name="time" type="time" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-appointment-reason">
        <Form.Label>Reason for visit</Form.Label>
        <Form.Control as="textarea" name="reason" rows={3} required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Request appointment
      </Button>
    </Form>
  )
}

export default AppointmentRequestForm
