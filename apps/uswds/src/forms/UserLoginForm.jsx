import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function UserLoginForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-user-login-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email or username
        </Label>
        <TextInput
          id="uswds-user-login-email"
          name="identifier"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-user-login-password"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Password
        </Label>
        <TextInput
          id="uswds-user-login-password"
          name="password"
          type="password"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-user-login-remember"
          name="remember"
          label="Keep me signed in"
          tile={false}
        />
      </FormGroup>
      <Button type="submit">Sign in</Button>
      <Button
        type="button"
        unstyled
        onClick={() => alert('Password reset link flow placeholder')}
        style={{ marginLeft: '1rem' }}
      >
        Forgot password?
      </Button>
    </Form>
  )
}

export default UserLoginForm
