import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Select,
  TextInput,
} from 'grommet'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Full name"
        name="fullName"
        htmlFor="grommet-event-name"
        required
      >
        <TextInput id="grommet-event-name" name="fullName" type="text" />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-event-email"
        required
      >
        <TextInput id="grommet-event-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Ticket type"
        name="ticketType"
        htmlFor="grommet-event-ticket"
        required
      >
        <Select
          id="grommet-event-ticket"
          name="ticketType"
          options={['General admission', 'VIP', 'Student']}
          placeholder="Select ticket"
        />
      </FormField>
      <FormField
        label="Number of guests"
        name="guestCount"
        htmlFor="grommet-event-guests"
        required
      >
        <TextInput
          id="grommet-event-guests"
          name="guestCount"
          type="number"
          min={0}
          max={20}
        />
      </FormField>
      <FormField name="newsletter" htmlFor="grommet-event-newsletter">
        <CheckBox
          id="grommet-event-newsletter"
          name="newsletter"
          label="Notify me about future events"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Register" />
      </Box>
    </Form>
  )
}

export default EventRegistrationForm
