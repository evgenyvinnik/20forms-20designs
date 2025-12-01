import { Button, Field, Input, Stack, Checkbox } from '@chakra-ui/react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Full name</Field.Label>
          <Input
            id="chakra-user-registration-name"
            name="fullName"
            type="text"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input
            id="chakra-user-registration-email"
            name="email"
            type="email"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Username</Field.Label>
          <Input
            id="chakra-user-registration-username"
            name="username"
            type="text"
            minLength={3}
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Password</Field.Label>
          <Input
            id="chakra-user-registration-password"
            name="password"
            type="password"
            minLength={8}
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Confirm password</Field.Label>
          <Input
            id="chakra-user-registration-confirm"
            name="confirmPassword"
            type="password"
            minLength={8}
          />
        </Field.Root>
        <Checkbox.Root name="terms" required>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>I agree to the terms and conditions</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Create account
        </Button>
      </Stack>
    </form>
  )
}

export default UserRegistrationForm
