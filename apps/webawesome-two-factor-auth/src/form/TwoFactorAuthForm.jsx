import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Code verified!')
  }

  const handleResend = () => {
    alert('Code resent!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <p style={{ marginBottom: '8px' }}>
        Enter the code from your authenticator app or SMS.
      </p>
      <wa-input
        label="Verification code"
        name="code"
        type="text"
        maxlength="6"
        pattern="[0-9]*"
        inputmode="numeric"
        required
      />
      <wa-input
        label="Backup code"
        name="backupCode"
        type="text"
        help-text="Use a backup code if you can't access your authenticator"
      />
      <div className="wa-cluster wa-gap-s">
        <wa-button type="submit" variant="brand">
          Verify
        </wa-button>
        <wa-button type="button" variant="neutral" onClick={handleResend}>
          Resend code
        </wa-button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
