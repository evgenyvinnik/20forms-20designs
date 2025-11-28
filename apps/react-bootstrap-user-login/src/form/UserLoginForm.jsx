import { Form, Button } from 'react-bootstrap'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-user-login-email">
        <Form.Label>Email or username</Form.Label>
        <Form.Control
          name="identifier"
          type="text"
          required
          placeholder="Enter email or username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-user-login-password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          required
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-user-login-remember">
        <Form.Check type="checkbox" label="Keep me signed in" name="remember" />
      </Form.Group>

      <div className="d-flex gap-2">
        <Button variant="primary" type="submit">
          Sign in
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </Form>
  )
}

export default UserLoginForm
