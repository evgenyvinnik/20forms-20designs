function UserRegistrationForm() {
  return (
    <form>
      <div>
        <label htmlFor="user-registration-name">Full name</label>
        <input id="user-registration-name" name="fullName" type="text" />
      </div>
      <div>
        <label htmlFor="user-registration-email">Email address</label>
        <input id="user-registration-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="user-registration-username">Username</label>
        <input id="user-registration-username" name="username" type="text" />
      </div>
      <div>
        <label htmlFor="user-registration-password">Password</label>
        <input id="user-registration-password" name="password" type="password" />
      </div>
      <div>
        <label htmlFor="user-registration-confirm">Confirm password</label>
        <input id="user-registration-confirm" name="confirmPassword" type="password" />
      </div>
      <div>
        <label>
          <input name="terms" type="checkbox" />I agree to the terms and conditions
        </label>
      </div>
      <button type="submit">Create account</button>
    </form>
  )
}

export default UserRegistrationForm
