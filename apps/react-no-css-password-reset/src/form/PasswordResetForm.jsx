function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Request a password reset link via email.</p>
      <div>
        <label htmlFor="nocss-password-reset-email">Email address</label>
        <input
          id="nocss-password-reset-email"
          name="email"
          type="email"
          required
        />
      </div>
      <button type="submit">Send reset link</button>
    </form>
  )
}

export default PasswordResetForm
