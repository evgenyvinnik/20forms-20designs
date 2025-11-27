import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="job-full-name" name="fullName" label="Full name" type="text" required />
      <TextField id="job-email" name="email" label="Email address" type="email" required />
      <TextField
        id="job-phone"
        name="phone"
        label="Phone number"
        type="tel"
        required
        inputProps={{ pattern: '[+0-9\\s-]{7,20}', inputMode: 'tel' }}
      />
      <TextField id="job-role" name="role" label="Role applied for" type="text" required />
      <TextField id="job-resume" name="resume" label="Resume link" type="url" required />
      <TextField
        id="job-cover-letter"
        name="coverLetter"
        label="Cover letter"
        multiline
        rows={4}
        required
      />
      <FormControlLabel
        control={<Checkbox name="updates" />}
        label="Keep me informed about future roles"
      />
      <Button type="submit" variant="contained">
        Submit application
      </Button>
    </Box>
  )
}

export default JobApplicationForm
