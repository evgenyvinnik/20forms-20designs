import { Button, Field, Input, Stack, Text } from '@chakra-ui/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Text>Enter the code from your authenticator app or SMS.</Text>
        <Field.Root required>
          <Field.Label>Verification code</Field.Label>
          <Input
            id="chakra-two-factor-code"
            name="code"
            type="text"
            inputMode="numeric"
            pattern="\d{6}"
            maxLength={6}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Backup code (optional)</Field.Label>
          <Input
            id="chakra-two-factor-backup"
            name="backupCode"
            type="text"
            pattern="[A-Za-z0-9]{6,12}"
          />
        </Field.Root>
        <Stack direction="row" gap={3}>
          <Button type="submit" colorPalette="blue">
            Verify
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default TwoFactorAuthForm
