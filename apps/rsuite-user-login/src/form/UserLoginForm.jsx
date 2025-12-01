import { Form, ButtonToolbar, Button, Input, Checkbox } from 'rsuite'

function UserLoginForm() {
  const handleSubmit = () => {
    alert('Login submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="identifier">
        <Form.ControlLabel>Email or username</Form.ControlLabel>
        <Form.Control name="identifier" type="text" required />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.ControlLabel>Password</Form.ControlLabel>
        <Form.Control name="password" type="password" required />
      </Form.Group>

      <Form.Group controlId="remember">
        <Checkbox name="remember">Keep me signed in</Checkbox>
      </Form.Group>

      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Sign in
          </Button>
          <Button
            appearance="default"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  )
}

export default UserLoginForm
