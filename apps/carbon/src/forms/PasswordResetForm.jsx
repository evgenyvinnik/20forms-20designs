import { Form, TextInput, Button, Stack } from '@carbon/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <p>Request a password reset link via email.</p>
        <TextInput
          id="carbon-password-reset-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Button type="submit">Send reset link</Button>
      </Stack>
    </Form>
  )
}

export default PasswordResetForm
