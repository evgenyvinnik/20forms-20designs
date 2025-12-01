import { Form, TextInput, Button, Stack } from '@carbon/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <p>Enter the code from your authenticator app or SMS.</p>
        <TextInput
          id="carbon-two-factor-code"
          name="code"
          labelText="Verification code"
          maxLength={6}
          required
        />
        <TextInput
          id="carbon-two-factor-backup"
          name="backupCode"
          labelText="Backup code (optional)"
        />
        <Stack gap={4} orientation="horizontal">
          <Button type="submit">Verify</Button>
          <Button
            kind="secondary"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default TwoFactorAuthForm
