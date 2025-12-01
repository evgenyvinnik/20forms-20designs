import {
  Button,
  Checkbox,
  Stack,
  TextInput,
  PasswordInput,
} from '@mantine/core'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-user-login-email"
          name="identifier"
          label="Email or username"
          type="text"
          required
        />
        <PasswordInput
          id="mantine-user-login-password"
          name="password"
          label="Password"
          required
        />
        <Checkbox name="remember" label="Keep me signed in" />
        <Button type="submit">Sign in</Button>
        <Button
          variant="subtle"
          type="button"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </Stack>
    </form>
  )
}

export default UserLoginForm
