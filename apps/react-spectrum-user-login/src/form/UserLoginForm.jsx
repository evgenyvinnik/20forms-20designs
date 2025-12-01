import { Form, TextField, Checkbox, Button, Flex } from '@adobe/react-spectrum'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Email or username"
          name="identifier"
          type="text"
          isRequired
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          isRequired
        />
        <Checkbox name="remember">Keep me signed in</Checkbox>
        <Flex gap="size-100">
          <Button type="submit" variant="accent">
            Sign in
          </Button>
          <Button
            type="button"
            variant="secondary"
            onPress={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Flex>
      </Flex>
    </Form>
  )
}

export default UserLoginForm
