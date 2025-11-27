import { Button, Text, TextInput } from '@gravity-ui/uikit'

import { formStackStyle } from './common.jsx'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <Text variant="body-2">Request a password reset link via email.</Text>
      <TextInput
        id="gravity-password-reset-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <Button view="action" type="submit">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
