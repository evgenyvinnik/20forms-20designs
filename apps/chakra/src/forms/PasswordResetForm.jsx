import { Button, Field, Input, Stack, Text } from '@chakra-ui/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Text>Request a password reset link via email.</Text>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-password-reset-email" name="email" type="email" />
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Send reset link
        </Button>
      </Stack>
    </form>
  )
}

export default PasswordResetForm
