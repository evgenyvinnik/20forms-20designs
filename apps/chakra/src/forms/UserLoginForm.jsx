import { Button, Field, Input, Stack, Checkbox } from '@chakra-ui/react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Email or username</Field.Label>
          <Input id="chakra-user-login-email" name="identifier" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Password</Field.Label>
          <Input
            id="chakra-user-login-password"
            name="password"
            type="password"
          />
        </Field.Root>
        <Checkbox.Root name="remember">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Keep me signed in</Checkbox.Label>
        </Checkbox.Root>
        <Stack direction="row" gap={3}>
          <Button type="submit" colorPalette="blue">
            Sign in
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default UserLoginForm
