import {
  Button,
  Checkbox,
  Stack,
  TextInput,
  NumberInput,
  Select,
} from '@mantine/core'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-event-name"
          name="fullName"
          label="Full name"
          type="text"
          required
        />
        <TextInput
          id="mantine-event-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <Select
          id="mantine-event-ticket"
          name="ticketType"
          label="Ticket type"
          placeholder="Select ticket"
          data={[
            { value: 'general', label: 'General admission' },
            { value: 'vip', label: 'VIP' },
            { value: 'student', label: 'Student' },
          ]}
          required
        />
        <NumberInput
          id="mantine-event-guests"
          name="guestCount"
          label="Number of guests"
          min={0}
          max={20}
          required
        />
        <Checkbox name="newsletter" label="Notify me about future events" />
        <Button type="submit">Register</Button>
      </Stack>
    </form>
  )
}

export default EventRegistrationForm
