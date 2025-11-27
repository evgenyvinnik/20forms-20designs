function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="user-login-email" className="label">
          <span className="label-text">Email or username</span>
        </label>
        <input
          id="user-login-email"
          name="identifier"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="user-login-password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          id="user-login-password"
          name="password"
          type="password"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="remember" type="checkbox" className="checkbox" />
          <span className="label-text">Keep me signed in</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Sign in
      </button>
      <button
        type="button"
        onClick={() => alert('Password reset link flow placeholder')}
        className="btn btn-ghost w-full"
      >
        Forgot password?
      </button>
    </form>
  )
}

export default UserLoginForm
