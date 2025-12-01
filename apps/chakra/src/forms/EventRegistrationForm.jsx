import {
  Button,
  Field,
  Input,
  Stack,
  Checkbox,
  NativeSelect,
} from '@chakra-ui/react'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Full name</Field.Label>
          <Input id="chakra-event-name" name="fullName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-event-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Ticket type</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field id="chakra-event-ticket" name="ticketType">
              <option value="">Select ticket</option>
              <option value="general">General admission</option>
              <option value="vip">VIP</option>
              <option value="student">Student</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root required>
          <Field.Label>Number of guests</Field.Label>
          <Input
            id="chakra-event-guests"
            name="guestCount"
            type="number"
            min={0}
            max={20}
          />
        </Field.Root>
        <Checkbox.Root name="newsletter">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Notify me about future events</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Register
        </Button>
      </Stack>
    </form>
  )
}

export default EventRegistrationForm
