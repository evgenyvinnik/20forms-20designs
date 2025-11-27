import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Text size="2" color="gray">
          Enter the code from your authenticator app or SMS.
        </Text>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="two-factor-code">
            Verification code
          </Text>
          <TextField.Root
            id="two-factor-code"
            name="code"
            type="text"
            inputMode="numeric"
            pattern="\d{6}"
            maxLength="6"
            placeholder="Enter 6-digit code"
            required
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="two-factor-backup">
            Backup code (optional)
          </Text>
          <TextField.Root
            id="two-factor-backup"
            name="backupCode"
            type="text"
            pattern="[A-Za-z0-9]{6,12}"
            placeholder="Enter backup code"
          />
        </Box>
        <Flex gap="2">
          <Button type="submit">Verify</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default TwoFactorAuthForm
