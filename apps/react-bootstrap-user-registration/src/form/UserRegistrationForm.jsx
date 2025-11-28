import { Form, Button } from 'react-bootstrap'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-user-registration-name">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-user-registration-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-user-registration-username">
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" type="text" minLength="3" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-user-registration-password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          minLength="8"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-user-registration-confirm">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          minLength="8"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-user-registration-terms">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          name="terms"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create account
      </Button>
    </Form>
  )
}

export default UserRegistrationForm
