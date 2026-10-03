import { Button, ButtonGroup, Form, TextField } from '@react-spectrum/s2'
import { style } from '@react-spectrum/s2/style' with { type: 'macro' }

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p className={style({ font: 'body', margin: 0 })}>
        Enter the code from your authenticator app or SMS.
      </p>
      <TextField
        label="Verification code"
        name="code"
        maxLength={6}
        pattern="\d{6}"
        inputMode="numeric"
        isRequired
      />
      <TextField
        label="Backup code (optional)"
        name="backupCode"
        pattern="[A-Za-z0-9]{6,12}"
      />
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Verify
        </Button>
        <Button
          variant="secondary"
          onPress={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default TwoFactorAuthForm
