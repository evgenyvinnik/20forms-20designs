import { Button, Checkbox, Input, Label, XStack, YStack, Text } from 'tamagui'
import { useState } from 'react'

function UserRegistrationForm() {
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full name"
            required
          />
        </YStack>

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

        <YStack gap="$1">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            minLength={3}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            secureTextEntry
            placeholder="Password"
            minLength={8}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            secureTextEntry
            placeholder="Confirm password"
            minLength={8}
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={setTermsAccepted}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Create account
        </Button>
      </YStack>
    </form>
  )
}

export default UserRegistrationForm
