import {
  Box,
  FormControl,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@primer/react'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration complete!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Full name</FormControl.Label>
        <TextInput
          id="primer-event-fullname"
          name="fullName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput id="primer-event-email" name="email" type="email" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Ticket type</FormControl.Label>
        <Select id="primer-event-ticket" name="ticketType" block>
          <Select.Option value="">Select ticket</Select.Option>
          <Select.Option value="general">General admission</Select.Option>
          <Select.Option value="vip">VIP</Select.Option>
          <Select.Option value="student">Student</Select.Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormControl.Label>Number of guests</FormControl.Label>
        <TextInput
          id="primer-event-guests"
          name="guestCount"
          type="number"
          min={0}
          max={20}
          block
        />
      </FormControl>

      <FormControl>
        <Checkbox id="primer-event-newsletter" name="newsletter" />
        <FormControl.Label>Notify me about future events</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Register
      </Button>
    </Box>
  )
}

export default EventRegistrationForm
