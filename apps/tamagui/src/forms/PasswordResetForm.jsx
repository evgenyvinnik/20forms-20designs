import { Button, Input, Label, YStack, Text } from 'tamagui'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <Text>Request a password reset link via email.</Text>

        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Send reset link
        </Button>
      </YStack>
    </form>
  )
}

export default PasswordResetForm
