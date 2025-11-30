import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Textarea, Button } from 'braid-design-system'

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-appointment-name"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          id="braid-appointment-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          id="braid-appointment-date"
          label="Preferred date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <TextField
          id="braid-appointment-time"
          label="Preferred time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <Textarea
          id="braid-appointment-reason"
          label="Reason for visit"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          lines={3}
          required
        />

        <Box>
          <Button type="submit">Request appointment</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default AppointmentRequestForm
