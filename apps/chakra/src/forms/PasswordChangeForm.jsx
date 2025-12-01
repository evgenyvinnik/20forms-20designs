import { Button, Field, Input, Stack, Checkbox } from '@chakra-ui/react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Current password</Field.Label>
          <Input
            id="chakra-password-change-current"
            name="currentPassword"
            type="password"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>New password</Field.Label>
          <Input
            id="chakra-password-change-new"
            name="newPassword"
            type="password"
            minLength={8}
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Confirm new password</Field.Label>
          <Input
            id="chakra-password-change-confirm"
            name="confirmPassword"
            type="password"
            minLength={8}
          />
        </Field.Root>
        <Checkbox.Root name="logoutOthers">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Sign out of other devices</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Update password
        </Button>
      </Stack>
    </form>
  )
}

export default PasswordChangeForm
