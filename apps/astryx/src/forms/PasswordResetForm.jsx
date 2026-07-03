import { useState } from 'react'
import { TextInput, Button, Text } from '@astryxdesign/core'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Text variant="body">Request a password reset link via email.</Text>

      <TextInput
        id="astryx-password-reset-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button type="submit" variant="primary">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
