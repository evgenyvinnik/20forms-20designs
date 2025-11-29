function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-user-login-email">
          <span className="label-text">Email or username</span>
        </label>
        <input
          id="daisyui-user-login-email"
          name="identifier"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-user-login-password">
          <span className="label-text">Password</span>
        </label>
        <input
          id="daisyui-user-login-password"
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
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </button>
      </div>
    </form>
  )
}

export default UserLoginForm
