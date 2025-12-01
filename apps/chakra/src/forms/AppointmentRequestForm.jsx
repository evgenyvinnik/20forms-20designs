import { Button, Field, Input, Stack, Textarea } from '@chakra-ui/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Full name</Field.Label>
          <Input id="chakra-appointment-name" name="fullName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-appointment-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Preferred date</Field.Label>
          <Input id="chakra-appointment-date" name="date" type="date" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Preferred time</Field.Label>
          <Input id="chakra-appointment-time" name="time" type="time" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Reason for visit</Field.Label>
          <Textarea id="chakra-appointment-reason" name="reason" rows={3} />
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Request appointment
        </Button>
      </Stack>
    </form>
  )
}

export default AppointmentRequestForm
