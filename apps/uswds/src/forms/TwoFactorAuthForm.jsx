import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
} from '@trussworks/react-uswds'

function TwoFactorAuthForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
    text: { color: '#f0f0f0' },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p style={theme === 'dark' ? darkStyles.text : undefined}>
        Enter the code from your authenticator app or SMS.
      </p>
      <FormGroup>
        <Label
          htmlFor="uswds-two-factor-code"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Verification code
        </Label>
        <TextInput
          id="uswds-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-two-factor-backup"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Backup code (optional)
        </Label>
        <TextInput
          id="uswds-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button type="submit">Verify</Button>
        <Button
          type="button"
          outline
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </div>
    </Form>
  )
}

export default TwoFactorAuthForm
