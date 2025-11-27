import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-user-registration-name"
            >
              Full name
            </Text>
            <TextField.Root
              id="radix-user-registration-name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-user-registration-email"
            >
              Email address
            </Text>
            <TextField.Root
              id="radix-user-registration-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-user-registration-username"
            >
              Username
            </Text>
            <TextField.Root
              id="radix-user-registration-username"
              name="username"
              type="text"
              placeholder="Choose a username"
              minLength="3"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-user-registration-password"
            >
              Password
            </Text>
            <TextField.Root
              id="radix-user-registration-password"
              name="password"
              type="password"
              placeholder="Create a password"
              minLength="8"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-user-registration-confirm"
            >
              Confirm password
            </Text>
            <TextField.Root
              id="radix-user-registration-confirm"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              minLength="8"
              required
            />
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="terms" required />I agree to the terms and
              conditions
            </Flex>
          </Text>
          <Button type="submit">Create account</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default UserRegistrationForm
