import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  TextField,
} from '@react-spectrum/s2'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Email or username" name="identifier" isRequired />
      <TextField label="Password" name="password" type="password" isRequired />
      <Checkbox name="remember">Keep me signed in</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Sign in
        </Button>
        <Button
          variant="secondary"
          onPress={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default UserLoginForm
