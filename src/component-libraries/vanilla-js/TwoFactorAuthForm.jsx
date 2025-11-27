function TwoFactorAuthForm() {
  return (
    <form>
      <p>Enter the code from your authenticator app or SMS.</p>
      <div>
        <label htmlFor="two-factor-code">Verification code</label>
        <input id="two-factor-code" name="code" type="text" inputMode="numeric" />
      </div>
      <div>
        <label htmlFor="two-factor-backup">Backup code (optional)</label>
        <input id="two-factor-backup" name="backupCode" type="text" />
      </div>
      <button type="submit">Verify</button>
      <button type="button">Resend code</button>
    </form>
  )
}

export default TwoFactorAuthForm
