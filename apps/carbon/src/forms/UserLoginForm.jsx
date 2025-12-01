import { Form, TextInput, Button, Checkbox, Stack } from '@carbon/react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-user-login-email"
          name="identifier"
          labelText="Email or username"
          required
        />
        <TextInput
          id="carbon-user-login-password"
          name="password"
          type="password"
          labelText="Password"
          required
        />
        <Checkbox
          id="carbon-user-login-remember"
          name="remember"
          labelText="Keep me signed in"
        />
        <Stack gap={4} orientation="horizontal">
          <Button type="submit">Sign in</Button>
          <Button
            kind="secondary"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default UserLoginForm
