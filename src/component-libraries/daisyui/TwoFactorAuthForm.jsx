function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-gray-600">
        Enter the code from your authenticator app or SMS.
      </p>
      <div className="form-control">
        <label htmlFor="two-factor-code" className="label">
          <span className="label-text">Verification code</span>
        </label>
        <input
          id="two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\\d{6}"
          maxLength="6"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="two-factor-backup" className="label">
          <span className="label-text">Backup code (optional)</span>
        </label>
        <input
          id="two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Verify
      </button>
      <button
        type="button"
        onClick={() => alert('A new code has been sent!')}
        className="btn btn-ghost w-full"
      >
        Resend code
      </button>
    </form>
  )
}

export default TwoFactorAuthForm
