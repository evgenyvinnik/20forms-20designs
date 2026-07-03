import { FormControl, TextInput, Button, Text } from '@primer/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
    </form>
  )
}

export default PasswordResetForm
