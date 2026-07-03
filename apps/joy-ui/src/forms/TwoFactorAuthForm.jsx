function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Enter the code from your authenticator app or SMS.</p>
      <div>
        <label htmlFor="nocss-two-factor-code">Verification code</label>
        <input
          id="nocss-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\\d{6}"
          maxLength="6"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-two-factor-backup">Backup code (optional)</label>
        <input
          id="nocss-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
        />
      </div>
      <button type="submit">Verify</button>
      <button type="button" onClick={() => alert('A new code has been sent!')}>
        Resend code
      </button>
    </form>
  )
}

export default TwoFactorAuthForm
