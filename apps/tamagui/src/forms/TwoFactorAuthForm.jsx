import { Button, Input, Label, YStack, Text } from 'tamagui'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <Text>Enter the code from your authenticator app or SMS.</Text>

        <YStack gap="$1">
          <Label htmlFor="code">Verification code</Label>
          <Input
            id="code"
            name="code"
            inputMode="numeric"
            placeholder="Verification code"
            maxLength={6}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="backupCode">Backup code (optional)</Label>
          <Input id="backupCode" name="backupCode" placeholder="Backup code" />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Verify
        </Button>

        <Button
          variant="outlined"
          onPress={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </YStack>
    </form>
  )
}

export default TwoFactorAuthForm
