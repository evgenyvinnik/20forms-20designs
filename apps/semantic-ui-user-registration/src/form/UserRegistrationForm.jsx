import { Form, Button, Checkbox } from 'semantic-ui-react'

function UserRegistrationForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-user-registration-fullname"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-user-registration-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <Form.Input
        id="semantic-ui-user-registration-username"
        name="username"
        label="Username"
        type="text"
        required
        minLength={3}
      />
      <Form.Input
        id="semantic-ui-user-registration-password"
        name="password"
        label="Password"
        type="password"
        required
        minLength={8}
      />
      <Form.Input
        id="semantic-ui-user-registration-confirm-password"
        name="confirmPassword"
        label="Confirm password"
        type="password"
        required
        minLength={8}
      />
      <Form.Field required>
        <Checkbox
          name="terms"
          label="I agree to the terms and conditions"
          required
        />
      </Form.Field>
      <Button type="submit" primary>
        Create account
      </Button>
    </Form>
  )
}

export default UserRegistrationForm
