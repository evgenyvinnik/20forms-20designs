import { Button, Checkbox, FormGroup, InputGroup } from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup
        label="Current password"
        labelFor="blueprint-password-change-current"
      >
        <InputGroup
          id="blueprint-password-change-current"
          name="currentPassword"
          type="password"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="New password" labelFor="blueprint-password-change-new">
        <InputGroup
          id="blueprint-password-change-new"
          name="newPassword"
          type="password"
          minLength={8}
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Confirm new password"
        labelFor="blueprint-password-change-confirm"
      >
        <InputGroup
          id="blueprint-password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
          fill
        />
      </FormGroup>
      <Checkbox label="Sign out of other devices" name="logoutOthers" />
      <Button intent="primary" type="submit">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
