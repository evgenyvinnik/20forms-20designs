import { Form, TextField, Button, Flex, Text } from '@adobe/react-spectrum'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Code verified!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <Text>Enter the code from your authenticator app or SMS.</Text>
        <TextField
          label="Verification code"
          name="code"
          type="text"
          inputMode="numeric"
          maxLength={6}
          isRequired
        />
        <TextField
          label="Backup code (optional)"
          name="backupCode"
          type="text"
        />
        <Flex gap="size-100">
          <Button type="submit" variant="accent">
            Verify
          </Button>
          <Button
            type="button"
            variant="secondary"
            onPress={() => alert('Code resent!')}
          >
            Resend code
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}

export default TwoFactorAuthForm
