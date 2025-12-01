import { Box, FormControl, TextInput, Checkbox, Button } from '@primer/react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Email or username</FormControl.Label>
        <TextInput
          id="primer-user-login-email"
          name="identifier"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Password</FormControl.Label>
        <TextInput
          id="primer-user-login-password"
          name="password"
          type="password"
          block
        />
      </FormControl>

      <FormControl>
        <Checkbox id="primer-user-login-remember" name="remember" />
        <FormControl.Label>Keep me signed in</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Sign in
      </Button>

      <Button
        type="button"
        variant="invisible"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </Box>
  )
}

export default UserLoginForm
