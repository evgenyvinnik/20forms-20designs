import { Box, Button, TextField } from '@mui/material'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-appointment-name"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <TextField
        id="mui-appointment-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <TextField
        id="mui-appointment-date"
        name="date"
        label="Preferred date"
        type="date"
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="mui-appointment-time"
        name="time"
        label="Preferred time"
        type="time"
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="mui-appointment-reason"
        name="reason"
        label="Reason for visit"
        multiline
        rows={3}
        required
      />
      <Button type="submit" variant="contained">
        Request appointment
      </Button>
    </Box>
  )
}

export default AppointmentRequestForm
