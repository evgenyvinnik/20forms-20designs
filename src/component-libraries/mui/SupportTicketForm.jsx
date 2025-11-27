import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="ticket-subject" name="subject" label="Subject" type="text" required />
      <FormControl required>
        <FormLabel id="ticket-priority-label">Priority</FormLabel>
        <RadioGroup
          aria-labelledby="ticket-priority-label"
          name="priority"
          defaultValue=""
          row
        >
          <FormControlLabel value="low" control={<Radio />} label="Low" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="high" control={<Radio />} label="High" />
        </RadioGroup>
      </FormControl>
      <TextField id="ticket-description" name="description" label="Issue description" multiline rows={4} required />
      <TextField id="ticket-attachments" name="attachments" label="Attachments" type="file" inputProps={{ multiple: true }} />
      <Button type="submit" variant="contained">
        Submit ticket
      </Button>
    </Box>
  )
}

export default SupportTicketForm
