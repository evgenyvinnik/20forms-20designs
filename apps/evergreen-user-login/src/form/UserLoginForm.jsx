import { Button, Checkbox, Pane, TextInputField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }
const buttonRowProps = { display: 'flex', gap: 12, flexWrap: 'wrap' }

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-user-login-identifier"
        label="Email or username"
        name="identifier"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-user-login-password"
        label="Password"
        name="password"
        type="password"
        required
      />
      <Checkbox label="Keep me signed in" name="remember" />
      <Pane {...buttonRowProps}>
        <Button appearance="primary" type="submit">
          Sign in
        </Button>
        <Button
          type="button"
          appearance="minimal"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </Pane>
    </Pane>
  )
}

export default UserLoginForm
