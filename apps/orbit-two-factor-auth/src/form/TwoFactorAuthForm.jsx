import { InputField, Button, Stack, Text, ButtonLink } from '@kiwicom/orbit-components'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <Text>Enter the code from your authenticator app or SMS.</Text>
        <InputField
          label="Verification code"
          name="code"
          type="text"
          inputMode="numeric"
          maxLength={6}
          required
        />
        <InputField
          label="Backup code (optional)"
          name="backupCode"
          type="text"
        />
        <Stack direction="row" spacing="small">
          <Button type="primary" submit>
            Verify
          </Button>
          <ButtonLink type="secondary" onClick={() => alert('A new code has been sent!')}>
            Resend code
          </ButtonLink>
        </Stack>
      </Stack>
    </form>
  )
}

export default TwoFactorAuthForm
