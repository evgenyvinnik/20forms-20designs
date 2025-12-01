import { Box, FormControl, TextInput, Button, Text } from '@primer/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Two-factor authentication verified!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <Text as="p" sx={{ color: 'fg.muted' }}>
        Enter the code from your authenticator app or SMS.
      </Text>

      <FormControl required>
        <FormControl.Label>Verification code</FormControl.Label>
        <TextInput
          id="primer-2fa-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          block
        />
      </FormControl>

      <FormControl>
        <FormControl.Label>Backup code (optional)</FormControl.Label>
        <TextInput
          id="primer-2fa-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          block
        />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Verify
      </Button>

      <Button
        type="button"
        variant="invisible"
        onClick={() => alert('Resend code placeholder')}
      >
        Resend code
      </Button>
    </Box>
  )
}

export default TwoFactorAuthForm
