import { Form, Button } from 'react-bootstrap'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Text as="div" muted className="mb-3">
        Request a password reset link via email.
      </Form.Text>
      <Form.Group className="mb-3" controlId="rb-password-reset-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send reset link
      </Button>
    </Form>
  )
}

export default PasswordResetForm
