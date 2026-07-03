import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  FormField,
  Input,
  SpaceBetween,
} from '@cloudscape-design/components'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <p style={{ margin: 0 }}>
          Enter the code from your authenticator app or SMS.
        </p>
        <FormField label="Verification code">
          <Input name="code" type="text" inputMode="numeric" required />
        </FormField>
        <FormField label="Backup code (optional)">
          <Input name="backupCode" type="text" />
        </FormField>
        <Button variant="primary" formAction="submit">
          Verify
        </Button>
        <Button
          variant="normal"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </SpaceBetween>
    </form>
  )
}

export default TwoFactorAuthForm
