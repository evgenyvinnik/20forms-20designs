import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <p>Request a password reset link via email.</p>
      <wa-input label="Email address" name="email" type="email" required />
      <wa-button type="submit" variant="brand">
        Send reset link
      </wa-button>
    </form>
  )
}

export default PasswordResetForm
