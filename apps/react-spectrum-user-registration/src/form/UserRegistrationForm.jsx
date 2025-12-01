import { Form, TextField, Checkbox, Button, Flex } from '@adobe/react-spectrum'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField label="Full name" name="fullName" type="text" isRequired />
        <TextField label="Email address" name="email" type="email" isRequired />
        <TextField
          label="Username"
          name="username"
          type="text"
          minLength={3}
          isRequired
        />
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
        <Button type="submit" variant="accent">
          Create account
        </Button>
      </Flex>
    </Form>
  )
}

export default UserRegistrationForm
