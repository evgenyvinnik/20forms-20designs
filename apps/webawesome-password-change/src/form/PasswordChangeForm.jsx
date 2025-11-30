import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/button/button.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input
        label="Current password"
        name="currentPassword"
        type="password"
        password-toggle
        required
      />
      <wa-input
        label="New password"
        name="newPassword"
        type="password"
        password-toggle
        minlength="8"
        required
      />
      <wa-input
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        password-toggle
        minlength="8"
        required
      />
      <wa-checkbox name="logoutOthers">Sign out of other devices</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Update password
      </wa-button>
    </form>
  )
}

export default PasswordChangeForm
