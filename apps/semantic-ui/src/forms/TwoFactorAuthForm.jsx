import { Form, Button } from 'semantic-ui-react'

function TwoFactorAuthForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Code verified!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <p>Enter the code from your authenticator app or SMS.</p>
      <Form.Input
        id="semantic-ui-two-factor-auth-code"
        name="code"
        label="Verification code"
        type="text"
        required
        maxLength={6}
        pattern="\d{6}"
        inputMode="numeric"
      />
      <Form.Input
        id="semantic-ui-two-factor-auth-backup"
        name="backupCode"
        label="Backup code (optional)"
        type="text"
        pattern="[A-Za-z0-9]{6,12}"
      />
      <Button type="submit" primary>
        Verify
      </Button>
      <Button
        type="button"
        basic
        onClick={() => alert('Resend code placeholder')}
      >
        Resend code
      </Button>
    </Form>
  )
}

export default TwoFactorAuthForm
