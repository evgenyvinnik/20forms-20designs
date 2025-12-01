import { Button, Checkbox, Pane, TextInputField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-password-change-current"
        label="Current password"
        name="currentPassword"
        type="password"
        required
      />
      <TextInputField
        id="evergreen-password-change-new"
        label="New password"
        name="newPassword"
        type="password"
        required
        minLength={8}
      />
      <TextInputField
        id="evergreen-password-change-confirm"
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        required
        minLength={8}
      />
      <Checkbox label="Sign out of other devices" name="logoutOthers" />
      <Button appearance="primary" type="submit">
        Update password
      </Button>
    </Pane>
  )
}

export default PasswordChangeForm
