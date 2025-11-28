import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Container,
  FormField,
  Input,
  SpaceBetween,
} from '@cloudscape-design/components'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Two-factor code verified!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField
            label="Verification code"
            description="Enter the 6-digit code from your authenticator app"
          >
            <Input
              name="code"
              type="text"
              placeholder="000000"
              inputMode="numeric"
              required
            />
          </FormField>
          <Button variant="primary" formAction="submit">
            Verify code
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default TwoFactorAuthForm
