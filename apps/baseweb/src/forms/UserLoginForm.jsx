import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function UserLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Email or username">
          <Input
            id="baseweb-user-login-email"
            name="identifier"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Password">
          <Input
            id="baseweb-user-login-password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Checkbox
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        >
          Keep me signed in
        </Checkbox>
        <Button type="submit">Sign in</Button>
        <Button
          type="button"
          kind="tertiary"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </Block>
    </form>
  )
}

export default UserLoginForm
