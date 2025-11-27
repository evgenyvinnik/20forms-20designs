import { Box, Button, TextField, Typography } from '@mui/material'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography>Request a password reset link via email.</Typography>
      <TextField
        id="mui-password-reset-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Button type="submit" variant="contained">
        Send reset link
      </Button>
    </Box>
  )
}

export default PasswordResetForm
