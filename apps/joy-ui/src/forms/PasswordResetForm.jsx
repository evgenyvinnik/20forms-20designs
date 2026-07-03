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

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
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
        Reset Password
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Password reset link sent to your email!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
        />
        <FormHelperText>
          Enter your registered email address to receive password reset
          instructions.
        </FormHelperText>
      </FormControl>
      <Button type="submit" color="primary">
        Send Reset Link
      </Button>
    </Box>
  )
}
