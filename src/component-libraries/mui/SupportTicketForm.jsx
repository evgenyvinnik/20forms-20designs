import { Box, Button, MenuItem, TextField } from '@mui/material'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="ticket-subject" name="subject" label="Subject" type="text" required />
      <TextField id="ticket-priority" name="priority" label="Priority" select required defaultValue="">
        <MenuItem value="">Select priority</MenuItem>
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </TextField>
      <TextField id="ticket-description" name="description" label="Issue description" multiline rows={4} required />
      <TextField id="ticket-attachments" name="attachments" label="Attachments" type="file" inputProps={{ multiple: true }} />
      <Button type="submit" variant="contained">
        Submit ticket
      </Button>
    </Box>
  )
}

export default SupportTicketForm
