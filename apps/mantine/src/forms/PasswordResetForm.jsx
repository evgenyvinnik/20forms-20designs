import { Button, Stack, TextInput, Text } from '@mantine/core'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <Text>Request a password reset link via email.</Text>
        <TextInput
          id="mantine-password-reset-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <Button type="submit">Send reset link</Button>
      </Stack>
    </form>
  )
}

export default PasswordResetForm
