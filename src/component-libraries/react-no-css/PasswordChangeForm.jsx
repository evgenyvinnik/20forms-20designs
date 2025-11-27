function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password-change-current">Current password</label>
        <input id="password-change-current" name="currentPassword" type="password" required />
      </div>
      <div>
        <label htmlFor="password-change-new">New password</label>
        <input
          id="password-change-new"
          name="newPassword"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div>
        <label htmlFor="password-change-confirm">Confirm new password</label>
        <input
          id="password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div>
        <label>
          <input name="logoutOthers" type="checkbox" />Sign out of other devices
        </label>
      </div>
      <button type="submit">Update password</button>
    </form>
  )
}

export default PasswordChangeForm
