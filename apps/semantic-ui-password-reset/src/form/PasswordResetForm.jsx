import { Form, Button } from 'semantic-ui-react'

function PasswordResetForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <p>Request a password reset link via email.</p>
      <Form.Input
        id="semantic-ui-password-reset-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Button type="submit" primary>
        Send reset link
      </Button>
    </Form>
  )
}

export default PasswordResetForm
