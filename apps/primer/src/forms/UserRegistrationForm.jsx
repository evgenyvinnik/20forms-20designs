import { Box, FormControl, TextInput, Checkbox, Button } from '@primer/react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Full name</FormControl.Label>
        <TextInput
          id="primer-registration-fullname"
          name="fullName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput
          id="primer-registration-email"
          name="email"
          type="email"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Username</FormControl.Label>
        <TextInput
          id="primer-registration-username"
          name="username"
          type="text"
          minLength={3}
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Password</FormControl.Label>
        <TextInput
          id="primer-registration-password"
          name="password"
          type="password"
          minLength={8}
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Confirm password</FormControl.Label>
        <TextInput
          id="primer-registration-confirm-password"
          name="confirmPassword"
          type="password"
          minLength={8}
          block
        />
      </FormControl>

      <FormControl required>
        <Checkbox id="primer-registration-terms" name="terms" />
        <FormControl.Label>
          I agree to the terms and conditions
        </FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Create account
      </Button>
    </Box>
  )
}

export default UserRegistrationForm
