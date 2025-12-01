import { Box, Button, CheckBox, Form, FormField, TextInput } from 'grommet'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Full name"
        name="fullName"
        htmlFor="grommet-user-registration-name"
        required
      >
        <TextInput
          id="grommet-user-registration-name"
          name="fullName"
          type="text"
        />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-user-registration-email"
        required
      >
        <TextInput
          id="grommet-user-registration-email"
          name="email"
          type="email"
        />
      </FormField>
      <FormField
        label="Username"
        name="username"
        htmlFor="grommet-user-registration-username"
        required
      >
        <TextInput
          id="grommet-user-registration-username"
          name="username"
          type="text"
        />
      </FormField>
      <FormField
        label="Password"
        name="password"
        htmlFor="grommet-user-registration-password"
        required
      >
        <TextInput
          id="grommet-user-registration-password"
          name="password"
          type="password"
        />
      </FormField>
      <FormField
        label="Confirm password"
        name="confirmPassword"
        htmlFor="grommet-user-registration-confirm"
        required
      >
        <TextInput
          id="grommet-user-registration-confirm"
          name="confirmPassword"
          type="password"
        />
      </FormField>
      <FormField
        name="terms"
        htmlFor="grommet-user-registration-terms"
        required
      >
        <CheckBox
          id="grommet-user-registration-terms"
          name="terms"
          label="I agree to the terms and conditions"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Create account" />
      </Box>
    </Form>
  )
}

export default UserRegistrationForm
