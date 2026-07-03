function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-user-login-email">Email or username</label>
        <input
          id="nocss-user-login-email"
          name="identifier"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-user-login-password">Password</label>
        <input
          id="nocss-user-login-password"
          name="password"
          type="password"
          required
        />
      </div>
      <div>
        <label>
          <input name="remember" type="checkbox" />
          Keep me signed in
        </label>
      </div>
      <button type="submit">Sign in</button>
      <button
        type="button"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </button>
    </form>
  )
}

export default UserLoginForm
