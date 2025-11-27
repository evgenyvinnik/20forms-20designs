function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="user-registration-name" className="label">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="user-registration-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="user-registration-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="user-registration-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="user-registration-username" className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          id="user-registration-username"
          name="username"
          type="text"
          minLength="3"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="user-registration-password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          id="user-registration-password"
          name="password"
          type="password"
          minLength="8"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="user-registration-confirm" className="label">
          <span className="label-text">Confirm password</span>
        </label>
        <input
          id="user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="terms" type="checkbox" required className="checkbox" />
          <span className="label-text">
            I agree to the terms and conditions
          </span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Create account
      </button>
    </form>
  )
}

export default UserRegistrationForm
