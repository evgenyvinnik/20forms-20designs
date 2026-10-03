import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  TextField,
} from '@react-spectrum/s2'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Full name" name="fullName" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <TextField label="Username" name="username" minLength={3} isRequired />
      <TextField
        label="Password"
        name="password"
        type="password"
        minLength={8}
        isRequired
      />
      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        minLength={8}
        isRequired
      />
      <Checkbox name="terms" isRequired>
        I agree to the terms and conditions
      </Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Create account
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default UserRegistrationForm
