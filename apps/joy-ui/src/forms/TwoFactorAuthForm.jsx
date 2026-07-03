import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography level="h3" component="h2">
        Two-Factor Authentication
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Two-factor authentication verified!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Authentication Code</FormLabel>
        <Input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="123456"
          slotProps={{ input: { maxLength: 6, pattern: '[0-9]{6}' } }}
        />
        <FormHelperText>
          Enter the 6-digit code from your authenticator app.
        </FormHelperText>
      </FormControl>
      <Button type="submit" color="primary">
        Verify Code
      </Button>
    </Box>
  )
}
