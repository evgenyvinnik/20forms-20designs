import { Box, FormControl, TextInput, Textarea, Button } from '@primer/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
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
          id="primer-appointment-fullname"
          name="fullName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput
          id="primer-appointment-email"
          name="email"
          type="email"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Preferred date</FormControl.Label>
        <TextInput id="primer-appointment-date" name="date" type="date" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Preferred time</FormControl.Label>
        <TextInput id="primer-appointment-time" name="time" type="time" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Reason for visit</FormControl.Label>
        <Textarea id="primer-appointment-reason" name="reason" rows={3} block />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Request appointment
      </Button>
    </Box>
  )
}

export default AppointmentRequestForm
