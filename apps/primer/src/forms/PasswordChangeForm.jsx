import { FormControl, TextInput, Checkbox, Button } from '@primer/react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <FormControl required>
        <FormControl.Label>Current password</FormControl.Label>
        <TextInput
          id="primer-password-current"
          name="currentPassword"
          type="password"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>New password</FormControl.Label>
        <TextInput
          id="primer-password-new"
          name="newPassword"
          type="password"
          minLength={8}
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Confirm new password</FormControl.Label>
        <TextInput
          id="primer-password-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          block
        />
      </FormControl>

      <FormControl>
        <Checkbox id="primer-password-logout" name="logoutOthers" />
        <FormControl.Label>Sign out of other devices</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
