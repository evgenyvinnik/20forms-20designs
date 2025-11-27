import { Button, Checkbox, Pane, SelectField, TextInputField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField id="evergreen-event-name" label="Full name" name="fullName" type="text" required />
      <TextInputField id="evergreen-event-email" label="Email address" name="email" type="email" required />
      <SelectField id="evergreen-event-ticket" label="Ticket type" name="ticketType" defaultValue="" required>
        <option value="">Select ticket</option>
        <option value="general">General admission</option>
        <option value="vip">VIP</option>
        <option value="student">Student</option>
      </SelectField>
      <TextInputField
        id="evergreen-event-guests"
        label="Number of guests"
        name="guestCount"
        type="number"
        min={0}
        max={20}
        required
      />
      <Checkbox label="Notify me about future events" name="newsletter" />
      <Button appearance="primary" type="submit">
        Register
      </Button>
    </Pane>
  )
}

export default EventRegistrationForm
