import { Button, Checkbox, Stack, PasswordInput } from '@mantine/core'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <PasswordInput
          id="mantine-password-change-current"
          name="currentPassword"
          label="Current password"
          required
        />
        <PasswordInput
          id="mantine-password-change-new"
          name="newPassword"
          label="New password"
          minLength={8}
          required
        />
        <PasswordInput
          id="mantine-password-change-confirm"
          name="confirmPassword"
          label="Confirm new password"
          minLength={8}
          required
        />
        <Checkbox
          name="logoutOthers"
          label="Sign out of other devices"
        />
        <Button type="submit">Update password</Button>
      </Stack>
    </form>
  )
}

export default PasswordChangeForm
