import { InputField, Button, Stack, Text } from '@kiwicom/orbit-components'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <Text>Request a password reset link via email.</Text>
        <InputField label="Email address" name="email" type="email" required />
        <Button type="primary" submit>
          Send reset link
        </Button>
      </Stack>
    </form>
  )
}

export default PasswordResetForm
