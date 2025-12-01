import { Form, Button, SelectPicker, InputNumber, Checkbox } from 'rsuite'

const ticketOptions = [
  { label: 'General admission', value: 'general' },
  { label: 'VIP', value: 'vip' },
  { label: 'Student', value: 'student' },
]

function EventRegistrationForm() {
  const handleSubmit = () => {
    alert('Event registration submitted!')
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

      <Form.Group controlId="ticketType">
        <Form.ControlLabel>Ticket type</Form.ControlLabel>
        <Form.Control
          name="ticketType"
          accepter={SelectPicker}
          data={ticketOptions}
          placeholder="Select ticket"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="guestCount">
        <Form.ControlLabel>Number of guests</Form.ControlLabel>
        <Form.Control
          name="guestCount"
          accepter={InputNumber}
          min={0}
          max={20}
          defaultValue={0}
          required
        />
      </Form.Group>

      <Form.Group controlId="newsletter">
        <Checkbox name="newsletter">Notify me about future events</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Register
        </Button>
      </Form.Group>
    </Form>
  )
}

export default EventRegistrationForm
