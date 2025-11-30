import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/button/button.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Full name" name="fullName" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-input
        label="Username"
        name="username"
        type="text"
        minlength="3"
        required
      />
      <wa-input
        label="Password"
        name="password"
        type="password"
        password-toggle
        minlength="8"
        required
      />
      <wa-input
        label="Confirm password"
        name="confirmPassword"
        type="password"
        password-toggle
        minlength="8"
        required
      />
      <wa-checkbox name="terms" required>
        I agree to the terms and conditions
      </wa-checkbox>
      <wa-button type="submit" variant="brand">
        Create account
      </wa-button>
    </form>
  )
}

export default UserRegistrationForm
