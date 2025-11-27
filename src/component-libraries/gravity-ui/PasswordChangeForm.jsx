import { Button, Checkbox, TextInput } from '@gravity-ui/uikit'

import { formStackStyle } from './common.jsx'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-password-change-current"
        label="Current password"
        name="currentPassword"
        type="password"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-password-change-new"
        label="New password"
        name="newPassword"
        type="password"
        controlProps={{ required: true, minLength: 8 }}
      />
      <TextInput
        id="gravity-password-change-confirm"
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        controlProps={{ required: true, minLength: 8 }}
      />
      <Checkbox
        name="logoutOthers"
        value="yes"
        content="Sign out of other devices"
      />
      <Button view="action" type="submit">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
