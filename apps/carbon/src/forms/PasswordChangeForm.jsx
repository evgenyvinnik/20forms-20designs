import { Form, TextInput, Button, Checkbox, Stack } from '@carbon/react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-password-change-current"
          name="currentPassword"
          type="password"
          labelText="Current password"
          required
        />
        <TextInput
          id="carbon-password-change-new"
          name="newPassword"
          type="password"
          labelText="New password"
          required
        />
        <TextInput
          id="carbon-password-change-confirm"
          name="confirmPassword"
          type="password"
          labelText="Confirm new password"
          required
        />
        <Checkbox
          id="carbon-password-change-logout"
          name="logoutOthers"
          labelText="Sign out of other devices"
        />
        <Button type="submit">Update password</Button>
      </Stack>
    </Form>
  )
}

export default PasswordChangeForm
