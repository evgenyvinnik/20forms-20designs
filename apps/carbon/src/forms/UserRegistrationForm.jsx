import { Form, TextInput, Button, Checkbox, Stack } from '@carbon/react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-user-registration-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-user-registration-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-user-registration-username"
          name="username"
          labelText="Username"
          required
        />
        <TextInput
          id="carbon-user-registration-password"
          name="password"
          type="password"
          labelText="Password"
          required
        />
        <TextInput
          id="carbon-user-registration-confirm"
          name="confirmPassword"
          type="password"
          labelText="Confirm password"
          required
        />
        <Checkbox
          id="carbon-user-registration-terms"
          name="terms"
          labelText="I agree to the terms and conditions"
          required
        />
        <Button type="submit">Create account</Button>
      </Stack>
    </Form>
  )
}

export default UserRegistrationForm
