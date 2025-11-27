function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user-registration-name">Full name</label>
        <input id="user-registration-name" name="fullName" type="text" required />
      </div>
      <div>
        <label htmlFor="user-registration-email">Email address</label>
        <input id="user-registration-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="user-registration-username">Username</label>
        <input id="user-registration-username" name="username" type="text" minLength="3" required />
      </div>
      <div>
        <label htmlFor="user-registration-password">Password</label>
        <input id="user-registration-password" name="password" type="password" minLength="8" required />
      </div>
      <div>
        <label htmlFor="user-registration-confirm">Confirm password</label>
        <input
          id="user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div>
        <label>
          <input name="terms" type="checkbox" required />I agree to the terms and conditions
        </label>
      </div>
      <button type="submit">Create account</button>
    </form>
  )
}

export default UserRegistrationForm
