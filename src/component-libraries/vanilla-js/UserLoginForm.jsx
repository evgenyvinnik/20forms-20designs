function UserLoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="user-login-email">Email or username</label>
        <input id="user-login-email" name="identifier" type="text" />
      </div>
      <div>
        <label htmlFor="user-login-password">Password</label>
        <input id="user-login-password" name="password" type="password" />
      </div>
      <div>
        <label>
          <input name="remember" type="checkbox" />Keep me signed in
        </label>
      </div>
      <button type="submit">Sign in</button>
      <button type="button">Forgot password?</button>
    </form>
  )
}

export default UserLoginForm
