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

export default function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('2FA code submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
        Enter the code from your authenticator app or SMS.
      </p>
      <FormControl required>
        <FormLabel>Verification code</FormLabel>
        <Input
          name="code"
          type="text"
          slotProps={{ input: { maxLength: 6 } }}
          slotProps={{ input: { pattern: '[0-9]{6}' } }}
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel>Backup code (optional)</FormLabel>
        <Input name="backupCode" type="text" />
      </FormControl>
      <Checkbox name="trustDevice" label="Trust this device for 30 days" />
      <Button type="submit">Verify</Button>
      <Button
        type="button"
        variant="plain"
        color="neutral"
        onClick={() => alert('Resending code placeholder')}
      >
        Resend code
      </Button>
    </Box>
  )
}
