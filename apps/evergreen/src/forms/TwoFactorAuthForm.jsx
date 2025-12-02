import { Button, Pane, Paragraph, TextInputField } from 'evergreen-ui'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Pane
      is="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={8}
    >
      <Paragraph marginBottom={0}>
        Enter the code from your authenticator app or SMS.
      </Paragraph>
      <TextInputField
        id="evergreen-two-factor-code"
        label="Verification code"
        name="code"
        type="text"
        inputMode="numeric"
        pattern="\\d{6}"
        maxLength={6}
        required
      />
      <TextInputField
        id="evergreen-two-factor-backup"
        label="Backup code (optional)"
        name="backupCode"
        type="text"
        pattern="[A-Za-z0-9]{6,12}"
      />
      <Pane display="flex" gap={12} flexWrap="wrap">
        <Button appearance="primary" type="submit">
          Verify
        </Button>
        <Button
          type="button"
          appearance="minimal"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </Pane>
    </Pane>
  )
}

export default TwoFactorAuthForm
