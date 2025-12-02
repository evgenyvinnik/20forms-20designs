import { Form, Button } from 'react-bootstrap'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Text as="div" muted className="mb-3">
        Enter the code from your authenticator app or SMS.
      </Form.Text>

      <Form.Group className="mb-3" controlId="rb-two-factor-code">
        <Form.Label>Verification code</Form.Label>
        <Form.Control
          name="code"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{6}"
          maxLength={6}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-two-factor-backup">
        <Form.Label>Backup code (optional)</Form.Label>
        <Form.Control
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
        />
      </Form.Group>

      <div className="d-flex gap-2 flex-wrap">
        <Button variant="primary" type="submit">
          Verify
        </Button>
        <Button
          variant="outline-secondary"
          type="button"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </div>
    </Form>
  )
}

export default TwoFactorAuthForm
