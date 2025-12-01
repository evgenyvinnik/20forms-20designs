import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function EventRegistrationForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-event-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-event-name"
          name="fullName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-event-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-ticket"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Ticket type
        </Label>
        <Select
          id="uswds-event-ticket"
          name="ticketType"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-event-guests"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Number of guests
        </Label>
        <TextInput
          id="uswds-event-guests"
          name="guestCount"
          type="number"
          min={0}
          max={20}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-event-newsletter"
          name="newsletter"
          label="Notify me about future events"
        />
      </FormGroup>
      <Button type="submit">Register</Button>
    </Form>
  )
}

export default EventRegistrationForm
