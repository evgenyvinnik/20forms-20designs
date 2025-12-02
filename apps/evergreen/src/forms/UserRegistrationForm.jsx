import { Button, Checkbox, Pane, TextInputField } from 'evergreen-ui'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Pane
      is="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={8}
    >
      <TextInputField
        id="evergreen-user-registration-name"
        label="Full name"
        name="fullName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-user-registration-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <TextInputField
        id="evergreen-user-registration-username"
        label="Username"
        name="username"
        type="text"
        required
        minLength={3}
      />
      <TextInputField
        id="evergreen-user-registration-password"
        label="Password"
        name="password"
        type="password"
        required
        minLength={8}
      />
      <TextInputField
        id="evergreen-user-registration-confirm"
        label="Confirm password"
        name="confirmPassword"
        type="password"
        required
        minLength={8}
      />
      <Checkbox
        label="I agree to the terms and conditions"
        name="terms"
        required
      />
      <Button appearance="primary" type="submit">
        Create account
      </Button>
    </Pane>
  )
}

export default UserRegistrationForm
