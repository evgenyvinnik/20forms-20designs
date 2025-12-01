import { Button, Stack, TextInput, Text } from '@mantine/core'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <Text>Enter the code from your authenticator app or SMS.</Text>
        <TextInput
          id="mantine-two-factor-code"
          name="code"
          label="Verification code"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          required
        />
        <TextInput
          id="mantine-two-factor-backup"
          name="backupCode"
          label="Backup code (optional)"
          pattern="[A-Za-z0-9]{6,12}"
        />
        <Button type="submit">Verify</Button>
        <Button
          variant="subtle"
          type="button"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </Stack>
    </form>
  )
}

export default TwoFactorAuthForm
