import { Box, Button, Checkbox, Flex, Text, TextField } from '@radix-ui/themes'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="user-login-email">
            Email or username
          </Text>
          <TextField.Root
            id="user-login-email"
            name="identifier"
            type="text"
            placeholder="Enter your email or username"
            required
          />
        </Box>
        <Box>
          <Text
            as="label"
            size="2"
            weight="medium"
            htmlFor="user-login-password"
          >
            Password
          </Text>
          <TextField.Root
            id="user-login-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </Box>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox name="remember" />
            Keep me signed in
          </Flex>
        </Text>
        <Flex gap="2">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default UserLoginForm
