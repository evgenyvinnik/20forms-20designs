import { Button, Checkbox, Input } from '@cloudflare/kumo'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Full name" name="fullName" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <Input
        label="Username"
        name="username"
        type="text"
        minLength={3}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        minLength={8}
        required
      />
      <Input
        label="Confirm password"
        name="confirmPassword"
        type="password"
        minLength={8}
        required
      />
      <Checkbox
        label="I agree to the terms and conditions"
        name="terms"
        required
      />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Create account
        </Button>
      </div>
    </form>
  )
}

export default UserRegistrationForm
