import { Button, Checkbox, FormGroup, InputGroup } from '@blueprintjs/core'
import { actionRowStyles, formStackStyles } from './formStyles.js'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup
        label="Email or username"
        labelFor="blueprint-user-login-identifier"
      >
        <InputGroup
          id="blueprint-user-login-identifier"
          name="identifier"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Password" labelFor="blueprint-user-login-password">
        <InputGroup
          id="blueprint-user-login-password"
          name="password"
          type="password"
          required
          fill
        />
      </FormGroup>
      <Checkbox label="Keep me signed in" name="remember" />
      <div style={actionRowStyles}>
        <Button intent="primary" type="submit">
          Sign in
        </Button>
        <Button
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
