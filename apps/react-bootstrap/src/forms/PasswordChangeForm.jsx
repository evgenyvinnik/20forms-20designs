import { Form, Button } from 'react-bootstrap'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-password-change-current">
        <Form.Label>Current password</Form.Label>
        <Form.Control name="currentPassword" type="password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-password-change-new">
        <Form.Label>New password</Form.Label>
        <Form.Control
          name="newPassword"
          type="password"
          minLength="8"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-password-change-confirm">
        <Form.Label>Confirm new password</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          minLength="8"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-password-change-logout">
        <Form.Check
          type="checkbox"
          label="Sign out of other devices"
          name="logoutOthers"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update password
      </Button>
    </Form>
  )
}

export default PasswordChangeForm
