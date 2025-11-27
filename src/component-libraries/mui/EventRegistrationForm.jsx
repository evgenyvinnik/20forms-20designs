import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from '@mui/material'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-event-name"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <TextField
        id="mui-event-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <TextField
        id="mui-event-ticket"
        name="ticketType"
        label="Ticket type"
        select
        required
        defaultValue=""
      >
        <MenuItem value="">Select ticket</MenuItem>
        <MenuItem value="general">General admission</MenuItem>
        <MenuItem value="vip">VIP</MenuItem>
        <MenuItem value="student">Student</MenuItem>
      </TextField>
      <TextField
        id="mui-event-guests"
        name="guestCount"
        label="Number of guests"
        type="number"
        required
        inputProps={{ min: 0, max: 20 }}
      />
      <FormControlLabel
        control={<Checkbox name="newsletter" />}
        label="Notify me about future events"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Box>
  )
}

export default EventRegistrationForm
