import { useState } from 'react'
import { Box, Button, Flex, TextArea, TextField } from 'gestalt'

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-appointment-name"
          label="Full name"
          onChange={({ value }) => setFullName(value)}
          type="text"
          value={fullName}
        />
        <TextField
          id="gestalt-appointment-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <TextField
          id="gestalt-appointment-date"
          label="Preferred date"
          onChange={({ value }) => setDate(value)}
          type="date"
          value={date}
        />
        <TextField
          id="gestalt-appointment-time"
          label="Preferred time"
          onChange={({ value }) => setTime(value)}
          type="time"
          value={time}
        />
        <TextArea
          id="gestalt-appointment-reason"
          label="Reason for visit"
          onChange={({ value }) => setReason(value)}

          rows={3}
          value={reason}
        />
        <Box>
          <Button color="red" text="Request appointment" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default AppointmentRequestForm
