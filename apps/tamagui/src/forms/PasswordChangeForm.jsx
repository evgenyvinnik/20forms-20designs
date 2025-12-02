import { Button, Checkbox, Input, Label, XStack, YStack, Text } from 'tamagui'
import { useState } from 'react'

function PasswordChangeForm() {
  const [logoutOthers, setLogoutOthers] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="currentPassword">Current password</Label>
          <Input
            id="currentPassword"
            name="currentPassword"
            secureTextEntry
            placeholder="Current password"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="newPassword">New password</Label>
          <Input
            id="newPassword"
            name="newPassword"
            secureTextEntry
            placeholder="New password"
            minLength={8}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="confirmPassword">Confirm new password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            secureTextEntry
            placeholder="Confirm new password"
            minLength={8}
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="logoutOthers"
            checked={logoutOthers}
            onCheckedChange={setLogoutOthers}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="logoutOthers">Sign out of other devices</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Update password
        </Button>
      </YStack>
    </form>
  )
}

export default PasswordChangeForm
