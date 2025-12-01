import { Form, Button } from 'rsuite'

function PasswordResetForm() {
  const handleSubmit = () => {
    alert('Password reset link requested!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <p style={{ marginBottom: '16px' }}>
        Request a password reset link via email.
      </p>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Send reset link
        </Button>
      </Form.Group>
    </Form>
  )
}

export default PasswordResetForm
