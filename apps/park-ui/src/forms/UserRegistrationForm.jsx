function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-user-registration-name">Full name</label>
        <input
          id="nocss-user-registration-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-user-registration-email">Email address</label>
        <input
          id="nocss-user-registration-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-user-registration-username">Username</label>
        <input
          id="nocss-user-registration-username"
          name="username"
          type="text"
          minLength="3"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-user-registration-password">Password</label>
        <input
          id="nocss-user-registration-password"
          name="password"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-user-registration-confirm">
          Confirm password
        </label>
        <input
          id="nocss-user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div>
        <label>
          <input name="terms" type="checkbox" required />I agree to the terms
          and conditions
        </label>
      </div>
      <button type="submit">Create account</button>
    </form>
  )
}

export default UserRegistrationForm
