import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Container,
  FormField,
  Input,
  SpaceBetween,
} from '@cloudscape-design/components'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField
            label="Email address"
            description="Enter the email address associated with your account"
          >
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </FormField>
          <Button variant="primary" formAction="submit">
            Send reset link
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default PasswordResetForm
