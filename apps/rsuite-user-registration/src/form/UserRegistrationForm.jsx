import { Form, Button, Checkbox } from 'rsuite'

function UserRegistrationForm() {
  const handleSubmit = () => {
    alert('Registration submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.ControlLabel>Full name</Form.ControlLabel>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="username">
        <Form.ControlLabel>Username</Form.ControlLabel>
        <Form.Control name="username" type="text" minLength={3} required />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.ControlLabel>Password</Form.ControlLabel>
        <Form.Control name="password" type="password" minLength={8} required />
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.ControlLabel>Confirm password</Form.ControlLabel>
        <Form.Control
          name="confirmPassword"
          type="password"
          minLength={8}
          required
        />
      </Form.Group>

      <Form.Group controlId="terms">
        <Checkbox name="terms" required>
          I agree to the terms and conditions
        </Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Create account
        </Button>
      </Form.Group>
    </Form>
  )
}

export default UserRegistrationForm
