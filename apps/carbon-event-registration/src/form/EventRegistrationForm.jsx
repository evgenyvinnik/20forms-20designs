import { Form, TextInput, Select, SelectItem, NumberInput, Button, Checkbox, Stack } from '@carbon/react'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-event-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-event-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-event-ticket"
          name="ticketType"
          labelText="Ticket type"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select ticket" />
          <SelectItem value="general" text="General admission" />
          <SelectItem value="vip" text="VIP" />
          <SelectItem value="student" text="Student" />
        </Select>
        <NumberInput
          id="carbon-event-guests"
          name="guestCount"
          label="Number of guests"
          min={0}
          max={20}
          value={0}
        />
        <Checkbox
          id="carbon-event-newsletter"
          name="newsletter"
          labelText="Notify me about future events"
        />
        <Button type="submit">Register</Button>
      </Stack>
    </Form>
  )
}

export default EventRegistrationForm
