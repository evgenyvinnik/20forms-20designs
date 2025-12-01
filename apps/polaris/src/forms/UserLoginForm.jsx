import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Checkbox,
  Button,
  InlineStack,
} from '@shopify/polaris'

function UserLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Login submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Email or username"
          value={identifier}
          onChange={setIdentifier}
          autoComplete="username"
          requiredIndicator
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
          requiredIndicator
        />
        <Checkbox
          label="Keep me signed in"
          checked={remember}
          onChange={setRemember}
        />
        <InlineStack gap="300">
          <Button submit variant="primary">
            Sign in
          </Button>
          <Button
            variant="plain"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </InlineStack>
      </FormLayout>
    </form>
  )
}

export default UserLoginForm
