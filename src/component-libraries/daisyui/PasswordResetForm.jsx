function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-gray-600">
        Request a password reset link via email.
      </p>
      <div className="form-control">
        <label htmlFor="password-reset-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="password-reset-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Send reset link
      </button>
    </form>
  )
}

export default PasswordResetForm
