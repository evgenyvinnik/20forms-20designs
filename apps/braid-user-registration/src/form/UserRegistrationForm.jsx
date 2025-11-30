import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  TextField,
  Checkbox,
  Button,
} from 'braid-design-system'

function UserRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-user-registration-name"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          id="braid-user-registration-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          id="braid-user-registration-username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <TextField
          id="braid-user-registration-password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <TextField
          id="braid-user-registration-confirm"
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Checkbox
          id="braid-user-registration-terms"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
        >
          I agree to the terms and conditions
        </Checkbox>

        <Box>
          <Button type="submit">Create account</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default UserRegistrationForm
