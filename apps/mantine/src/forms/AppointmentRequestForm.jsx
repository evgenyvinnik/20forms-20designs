import { Button, Stack, TextInput, Textarea } from '@mantine/core'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-appointment-name"
          name="fullName"
          label="Full name"
          type="text"
          required
        />
        <TextInput
          id="mantine-appointment-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <TextInput
          id="mantine-appointment-date"
          name="date"
          label="Preferred date"
          type="date"
          required
        />
        <TextInput
          id="mantine-appointment-time"
          name="time"
          label="Preferred time"
          type="time"
          required
        />
        <Textarea
          id="mantine-appointment-reason"
          name="reason"
          label="Reason for visit"
          rows={3}
          required
        />
        <Button type="submit">Request appointment</Button>
      </Stack>
    </form>
  )
}

export default AppointmentRequestForm
