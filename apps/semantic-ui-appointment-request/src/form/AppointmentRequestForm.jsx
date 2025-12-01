import { Form, Button } from 'semantic-ui-react'

function AppointmentRequestForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-appointment-request-fullname"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-appointment-request-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Input
        id="semantic-ui-appointment-request-date"
        name="date"
        label="Preferred date"
        type="date"
        required
      />
      <Form.Input
        id="semantic-ui-appointment-request-time"
        name="time"
        label="Preferred time"
        type="time"
        required
      />
      <Form.TextArea
        id="semantic-ui-appointment-request-reason"
        name="reason"
        label="Reason for visit"
        rows={3}
        required
      />
      <Button type="submit" primary>
        Request appointment
      </Button>
    </Form>
  )
}

export default AppointmentRequestForm
