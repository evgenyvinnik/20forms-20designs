function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-base-content">
        Request a password reset link via email.
      </p>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-password-reset-email">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="daisyui-password-reset-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send reset link
      </button>
    </form>
  )
}

export default PasswordResetForm
