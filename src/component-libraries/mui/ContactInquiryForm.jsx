import { Box, Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="contact-name" name="fullName" label="Full name" type="text" required />
      <TextField id="contact-email" name="email" label="Email address" type="email" required />
      <TextField id="contact-topic" name="topic" label="Topic" select required defaultValue="">
        <MenuItem value="">Select topic</MenuItem>
        <MenuItem value="support">Support</MenuItem>
        <MenuItem value="sales">Sales</MenuItem>
        <MenuItem value="feedback">Feedback</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </TextField>
      <TextField id="contact-message" name="message" label="Message" multiline rows={4} required />
      <FormControlLabel control={<Checkbox name="consent" />} label="Allow follow-up communication" />
      <Button type="submit" variant="contained">
        Submit inquiry
      </Button>
    </Box>
  )
}

export default ContactInquiryForm
