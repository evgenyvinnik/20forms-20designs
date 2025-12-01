import { Form, Button, DatePicker, Input } from 'rsuite'

function AppointmentRequestForm() {
  const handleSubmit = () => {
    alert('Appointment request submitted!')
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

      <Form.Group controlId="date">
        <Form.ControlLabel>Preferred date</Form.ControlLabel>
        <Form.Control
          name="date"
          accepter={DatePicker}
          format="yyyy-MM-dd"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="time">
        <Form.ControlLabel>Preferred time</Form.ControlLabel>
        <Form.Control
          name="time"
          accepter={DatePicker}
          format="HH:mm"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="reason">
        <Form.ControlLabel>Reason for visit</Form.ControlLabel>
        <Form.Control name="reason" accepter={Input} as="textarea" rows={3} required />
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Request appointment
        </Button>
      </Form.Group>
    </Form>
  )
}

export default AppointmentRequestForm
