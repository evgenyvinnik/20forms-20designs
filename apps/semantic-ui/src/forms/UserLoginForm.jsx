import { Form, Button, Checkbox } from 'semantic-ui-react'

function UserLoginForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-user-login-email"
        name="identifier"
        label="Email or username"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-user-login-password"
        name="password"
        label="Password"
        type="password"
        required
      />
      <Form.Field>
        <Checkbox name="remember" label="Keep me signed in" />
      </Form.Field>
      <Button type="submit" primary>
        Sign in
      </Button>
      <Button
        type="button"
        basic
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </Form>
  )
}

export default UserLoginForm
