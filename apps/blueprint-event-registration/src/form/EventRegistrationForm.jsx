import {
  Button,
  Checkbox,
  FormGroup,
  HTMLSelect,
  InputGroup,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Full name" labelFor="blueprint-event-name">
        <InputGroup
          id="blueprint-event-name"
          name="fullName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Email address" labelFor="blueprint-event-email">
        <InputGroup
          id="blueprint-event-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Ticket type" labelFor="blueprint-event-ticket">
        <HTMLSelect
          id="blueprint-event-ticket"
          name="ticketType"
          required
          fill
          options={[
            { label: 'Select ticket', value: '' },
            { label: 'General admission', value: 'general' },
            { label: 'VIP', value: 'vip' },
            { label: 'Student', value: 'student' },
          ]}
        />
      </FormGroup>
      <FormGroup
        label="Number of guests"
        labelFor="blueprint-event-guests"
      >
        <InputGroup
          id="blueprint-event-guests"
          name="guestCount"
          type="number"
          min={0}
          max={20}
          required
          fill
        />
      </FormGroup>
      <Checkbox label="Notify me about future events" name="newsletter" />
      <Button intent="primary" type="submit">
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
