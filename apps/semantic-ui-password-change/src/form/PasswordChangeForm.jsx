import { Form, Button, Checkbox } from 'semantic-ui-react'

function PasswordChangeForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password updated!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-password-change-current"
        name="currentPassword"
        label="Current password"
        type="password"
        required
      />
      <Form.Input
        id="semantic-ui-password-change-new"
        name="newPassword"
        label="New password"
        type="password"
        required
        minLength={8}
      />
      <Form.Input
        id="semantic-ui-password-change-confirm"
        name="confirmPassword"
        label="Confirm new password"
        type="password"
        required
        minLength={8}
      />
      <Form.Field>
        <Checkbox name="logoutOthers" label="Sign out of other devices" />
      </Form.Field>
      <Button type="submit" primary>
        Update password
      </Button>
    </Form>
  )
}

export default PasswordChangeForm
