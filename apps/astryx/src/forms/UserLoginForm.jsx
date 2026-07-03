import { useState } from 'react'
import { TextInput, CheckboxInput, Button } from '@astryxdesign/core'

function UserLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-user-login-email"
        name="identifier"
        type="text"
        label="Email or username"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        required
      />

      <TextInput
        id="astryx-user-login-password"
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <CheckboxInput
        name="remember"
        label="Keep me signed in"
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Sign in
      </Button>

      <Button
        type="button"
        variant="secondary"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </form>
  )
}

export default UserLoginForm
