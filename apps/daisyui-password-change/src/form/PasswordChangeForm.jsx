function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-password-change-current">
          <span className="label-text">Current password</span>
        </label>
        <input
          id="daisyui-password-change-current"
          name="currentPassword"
          type="password"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-password-change-new">
          <span className="label-text">New password</span>
        </label>
        <input
          id="daisyui-password-change-new"
          name="newPassword"
          type="password"
          minLength="8"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-password-change-confirm">
          <span className="label-text">Confirm new password</span>
        </label>
        <input
          id="daisyui-password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="logoutOthers" type="checkbox" className="checkbox" />
          <span className="label-text">Sign out of other devices</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Update password
      </button>
    </form>
  )
}

export default PasswordChangeForm
