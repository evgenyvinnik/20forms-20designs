import { Box, Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="newsletter-email" name="email" label="Email address" type="email" required />
      <TextField
        id="newsletter-frequency"
        name="frequency"
        label="Frequency"
        select
        required
        defaultValue=""
      >
        <MenuItem value="">Select frequency</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
        <MenuItem value="quarterly">Quarterly</MenuItem>
      </TextField>
      <FormControlLabel control={<Checkbox name="agree" />} label="Receive product updates" />
      <Button type="submit" variant="contained">
        Subscribe
      </Button>
    </Box>
  )
}

export default NewsletterSubscriptionForm
