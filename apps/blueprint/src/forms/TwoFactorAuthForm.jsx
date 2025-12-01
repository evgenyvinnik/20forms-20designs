import { Button, FormGroup, InputGroup } from '@blueprintjs/core'
import { actionRowStyles, formStackStyles } from './formStyles.js'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <p className="bp5-text-muted">
        Enter the code from your authenticator app or SMS.
      </p>
      <FormGroup label="Verification code" labelFor="blueprint-two-factor-code">
        <InputGroup
          id="blueprint-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\\d{6}"
          maxLength={6}
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Backup code (optional)"
        labelFor="blueprint-two-factor-backup"
      >
        <InputGroup
          id="blueprint-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          fill
        />
      </FormGroup>
      <div style={actionRowStyles}>
        <Button intent="primary" type="submit">
          Verify
        </Button>
        <Button
          type="button"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
