import { Button, Checkbox, TextInput } from '@gravity-ui/uikit'

import { formStackStyle } from './common.jsx'

const buttonRowStyle = { display: 'flex', gap: 12, flexWrap: 'wrap' }

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-user-login-identifier"
        label="Email or username"
        name="identifier"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-user-login-password"
        label="Password"
        name="password"
        type="password"
        controlProps={{ required: true }}
      />
      <Checkbox name="remember" value="true" content="Keep me signed in" />
      <div style={buttonRowStyle}>
        <Button view="action" type="submit">
          Sign in
        </Button>
        <Button
          view="flat"
          type="button"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

export default UserLoginForm
