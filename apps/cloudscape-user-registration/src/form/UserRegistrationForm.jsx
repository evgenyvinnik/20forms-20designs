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
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Full name">
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </FormField>
          <FormField label="Email address">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </FormField>
          <FormField label="Username">
            <Input
              name="username"
              type="text"
              placeholder="Choose a username"
              required
            />
          </FormField>
          <FormField label="Password">
            <Input
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </FormField>
          <FormField label="Confirm password">
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
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
    </Container>
  )
}

export default UserRegistrationForm
