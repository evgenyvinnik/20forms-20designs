import { FormControl, TextInput, Button, Text } from '@primer/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
    </form>
  )
}

export default TwoFactorAuthForm
