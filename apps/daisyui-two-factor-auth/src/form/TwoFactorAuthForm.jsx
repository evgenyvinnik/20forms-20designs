function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-base-content">
        Enter the code from your authenticator app or SMS.
      </p>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-two-factor-code">
          <span className="label-text">Verification code</span>
        </label>
        <input
          id="daisyui-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength="6"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-two-factor-backup">
          <span className="label-text">Backup code (optional)</span>
        </label>
        <input
          id="daisyui-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Verify
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
