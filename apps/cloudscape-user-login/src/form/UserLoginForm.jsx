import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  SpaceBetween,
} from '@cloudscape-design/components'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Email address">
            <Input
              id="cloudscape-user-login-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </FormField>
          <FormField label="Password">
            <Input
              id="cloudscape-user-login-password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </FormField>
          <Checkbox name="rememberMe">Remember me</Checkbox>
          <Button variant="primary" formAction="submit">
            Sign in
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default UserLoginForm
