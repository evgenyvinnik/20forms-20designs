import { Box, Button, TextField, Typography } from '@mui/material'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography>
        Enter the code from your authenticator app or SMS.
      </Typography>
      <TextField
        id="mui-two-factor-code"
        name="code"
        label="Verification code"
        type="text"
        required
        inputProps={{ inputMode: 'numeric', pattern: '\\d{6}', maxLength: 6 }}
      />
      <TextField
        id="mui-two-factor-backup"
        name="backupCode"
        label="Backup code (optional)"
        type="text"
        inputProps={{ pattern: '[A-Za-z0-9]{6,12}' }}
      />
      <Button type="submit" variant="contained">
        Verify
      </Button>
      <Button
        type="button"
        variant="outlined"
        onClick={() => alert('A new code has been sent!')}
      >
        Resend code
      </Button>
    </Box>
  )
}

export default TwoFactorAuthForm
