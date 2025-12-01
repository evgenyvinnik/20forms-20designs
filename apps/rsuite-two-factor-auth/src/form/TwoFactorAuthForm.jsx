import { Form, Button, ButtonToolbar } from 'rsuite'

function TwoFactorAuthForm() {
  const handleSubmit = () => {
    alert('Verification submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <p style={{ marginBottom: '16px' }}>Enter the code from your authenticator app or SMS.</p>

      <Form.Group controlId="code">
        <Form.ControlLabel>Verification code</Form.ControlLabel>
        <Form.Control
          name="code"
          type="text"
          inputMode="numeric"
          maxLength={6}
          required
        />
      </Form.Group>

      <Form.Group controlId="backupCode">
        <Form.ControlLabel>Backup code (optional)</Form.ControlLabel>
        <Form.Control name="backupCode" type="text" />
      </Form.Group>

      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Verify
          </Button>
          <Button
            appearance="default"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  )
}

export default TwoFactorAuthForm
