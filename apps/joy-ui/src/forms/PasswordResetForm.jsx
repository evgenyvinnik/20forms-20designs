import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@mui/joy'

export default function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Reset link requested!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <FormControl required>
        <FormLabel htmlFor="joy-reset-email">Account email address</FormLabel>
        <Input id="joy-reset-email" name="email" type="email" required />
        <FormHelperText>
          Instructions will be sent to this address if an account exists.
        </FormHelperText>
      </FormControl>

      <Button type="submit">Send reset instructions</Button>
    </Box>
  )
}
