import { Form, Button, Checkbox } from 'rsuite'

function PasswordChangeForm() {
  const handleSubmit = () => {
    alert('Password change requested!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="currentPassword">
        <Form.ControlLabel>Current password</Form.ControlLabel>
        <Form.Control name="currentPassword" type="password" required />
      </Form.Group>

      <Form.Group controlId="newPassword">
        <Form.ControlLabel>New password</Form.ControlLabel>
        <Form.Control
          name="newPassword"
          type="password"
          minLength={8}
          required
        />
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.ControlLabel>Confirm new password</Form.ControlLabel>
        <Form.Control
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </Form.Group>

      <Form.Group controlId="logoutOthers">
        <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Update password
        </Button>
      </Form.Group>
    </Form>
  )
}

export default PasswordChangeForm
