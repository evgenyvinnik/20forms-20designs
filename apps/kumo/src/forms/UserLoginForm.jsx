import { Button, Checkbox, Input } from '@cloudflare/kumo'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Email or username" name="identifier" type="text" required />
      <Input label="Password" name="password" type="password" required />
      <Checkbox label="Keep me signed in" name="remember" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Sign in
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

export default UserLoginForm
