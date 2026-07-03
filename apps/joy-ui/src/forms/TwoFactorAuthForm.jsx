import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@mui/joy'

export default function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('2FA code submitted!')
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
        <FormLabel htmlFor="joy-2fa-code">6-digit security code</FormLabel>
        <Input
          id="joy-2fa-code"
          name="code"
          type="text"
          slotProps={{
            input: { pattern: '[0-9]{6}', maxLength: 6, inputMode: 'numeric' },
          }}
          required
        />
        <FormHelperText>
          Enter the code from your authenticator app.
        </FormHelperText>
      </FormControl>

      <Checkbox
        name="trustDevice"
        label="Trust this browser for 30 days"
        sx={{ my: 1 }}
      />

      <Button type="submit">Verify code</Button>
    </Box>
  )
}
