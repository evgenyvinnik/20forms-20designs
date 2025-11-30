import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Button, Text } from 'braid-design-system'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <Text>Request a password reset link via email.</Text>

        <TextField
          id="braid-password-reset-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Box>
          <Button type="submit">Send reset link</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default PasswordResetForm
