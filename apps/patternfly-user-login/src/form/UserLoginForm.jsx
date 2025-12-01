import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
  ActionGroup,
} from '@patternfly/react-core'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        label="Email or username"
        isRequired
        fieldId="pf-user-login-email"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-user-login-email"
          name="identifier"
        />
      </FormGroup>
      <FormGroup label="Password" isRequired fieldId="pf-user-login-password">
        <TextInput
          isRequired
          type="password"
          id="pf-user-login-password"
          name="password"
        />
      </FormGroup>
      <FormGroup fieldId="pf-user-login-remember">
        <Checkbox
          label="Keep me signed in"
          id="pf-user-login-remember"
          name="remember"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
        <Button
          variant="link"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default UserLoginForm
