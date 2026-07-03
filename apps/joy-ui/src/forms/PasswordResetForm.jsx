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
    alert('Submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Account email address</FormLabel>
        <Input name="email" type="email" required />
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
          Instructions will be sent to this address if an account exists.
        </span>
      </FormControl>
      <Button type="submit">Send reset instructions</Button>
    </Box>
  )
}
