import { Box, FormControl, TextInput, Button, Text } from '@primer/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <Text as="p" sx={{ color: 'fg.muted' }}>
        Request a password reset link via email.
      </Text>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput
          id="primer-password-reset-email"
          name="email"
          type="email"
          block
        />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Send reset link
      </Button>
    </Box>
  )
}

export default PasswordResetForm
