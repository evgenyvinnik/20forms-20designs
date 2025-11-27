import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Text size="2" color="gray">
          Request a password reset link via email.
        </Text>
        <Box>
          <Text
            as="label"
            size="2"
            weight="medium"
            htmlFor="password-reset-email"
          >
            Email address
          </Text>
          <TextField.Root
            id="password-reset-email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </Box>
        <Button type="submit">Send reset link</Button>
      </Flex>
    </form>
  )
}

export default PasswordResetForm
