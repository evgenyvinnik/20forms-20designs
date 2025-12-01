import {
  Button,
  Checkbox,
  Stack,
  TextInput,
  PasswordInput,
} from '@mantine/core'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-user-registration-name"
          name="fullName"
          label="Full name"
          type="text"
          required
        />
        <TextInput
          id="mantine-user-registration-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <TextInput
          id="mantine-user-registration-username"
          name="username"
          label="Username"
          type="text"
          minLength={3}
          required
        />
        <PasswordInput
          id="mantine-user-registration-password"
          name="password"
          label="Password"
          minLength={8}
          required
        />
        <PasswordInput
          id="mantine-user-registration-confirm"
          name="confirmPassword"
          label="Confirm password"
          minLength={8}
          required
        />
        <Checkbox
          name="terms"
          label="I agree to the terms and conditions"
          required
        />
        <Button type="submit">Create account</Button>
      </Stack>
    </form>
  )
}

export default UserRegistrationForm
