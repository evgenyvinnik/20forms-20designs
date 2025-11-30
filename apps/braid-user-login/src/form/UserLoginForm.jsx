import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  TextField,
  Checkbox,
  Button,
  Inline,
} from 'braid-design-system'

function UserLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Login submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-user-login-email"
          label="Email or username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />

        <TextField
          id="braid-user-login-password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Checkbox
          id="braid-user-login-remember"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        >
          Keep me signed in
        </Checkbox>

        <Inline space="small">
          <Button type="submit">Sign in</Button>
          <Button
            variant="ghost"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default UserLoginForm
