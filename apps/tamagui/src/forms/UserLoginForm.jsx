import { Button, Checkbox, Input, Label, XStack, YStack, Text } from 'tamagui'
import { useState } from 'react'

function UserLoginForm() {
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="identifier">Email or username</Label>
          <Input
            id="identifier"
            name="identifier"
            placeholder="Email or username"
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
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={setRememberMe}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="remember">Keep me signed in</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Sign in
        </Button>

        <Button
          variant="outlined"
          onPress={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </YStack>
    </form>
  )
}

export default UserLoginForm
