import { Button, Input, Text } from '@cloudflare/kumo'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Text variant="secondary">
        Enter the code from your authenticator app or SMS.
      </Text>
      <Input
        label="Verification code"
        name="code"
        type="text"
        maxLength={6}
        pattern="\d{6}"
        inputMode="numeric"
        required
      />
      <Input
        label="Backup code (optional)"
        name="backupCode"
        type="text"
        pattern="[A-Za-z0-9]{6,12}"
      />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Verify
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
