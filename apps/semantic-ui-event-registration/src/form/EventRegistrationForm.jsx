import { Form, Button, Checkbox, Select } from 'semantic-ui-react'

const ticketOptions = [
  { key: '', value: '', text: 'Select ticket' },
  { key: 'general', value: 'general', text: 'General admission' },
  { key: 'vip', value: 'vip', text: 'VIP' },
  { key: 'student', value: 'student', text: 'Student' },
]

function EventRegistrationForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-event-registration-fullname"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-event-registration-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Field required>
        <label>Ticket type</label>
        <Select
          name="ticketType"
          options={ticketOptions}
          placeholder="Select ticket"
          required
        />
      </Form.Field>
      <Form.Input
        id="semantic-ui-event-registration-guestcount"
        name="guestCount"
        label="Number of guests"
        type="number"
        required
        min={0}
        max={20}
      />
      <Form.Field>
        <Checkbox
          name="newsletter"
          label="Notify me about future events"
        />
      </Form.Field>
      <Button type="submit" primary>
        Register
      </Button>
    </Form>
  )
}

export default EventRegistrationForm
