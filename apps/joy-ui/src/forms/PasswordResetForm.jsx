import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'

export default function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Request a password reset link via email.
      </p>
      <FormControl required>
        <FormLabel>Account email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <Button type="submit">Send reset link</Button>
    </Box>
  )
}
