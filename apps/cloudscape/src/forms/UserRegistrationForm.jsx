import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  SpaceBetween,
} from '@cloudscape-design/components'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <FormField label="Full name">
          <Input
            name="fullName"
            type="text"

            required
          />
        </FormField>
        <FormField label="Email address">
          <Input
            name="email"
            type="email"

            required
          />
        </FormField>
        <FormField label="Username">
          <Input
            name="username"
            type="text"

            required
          />
        </FormField>
        <FormField label="Password">
          <Input
            name="password"
            type="password"

            required
          />
        </FormField>
        <FormField label="Confirm password">
          <Input
            name="confirmPassword"
            type="password"

            required
          />
        </FormField>
        <Checkbox name="terms" required>
          I agree to the terms and conditions
        </Checkbox>
        <Button variant="primary" formAction="submit">
          Create account
        </Button>
      </SpaceBetween>
    </form>
  )
}

export default UserRegistrationForm
