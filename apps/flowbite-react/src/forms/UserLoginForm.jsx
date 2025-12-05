import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-user-login-email">Email or username</Label>
        </div>
        <TextInput
          id="flowbite-user-login-email"
          name="identifier"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-user-login-password">Password</Label>
        </div>
        <TextInput
          id="flowbite-user-login-password"
          name="password"
          type="password"
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="flowbite-user-login-remember" name="remember" />
        <Label htmlFor="flowbite-user-login-remember">Keep me signed in</Label>
      </div>
      <div className="flex gap-2">
        <Button type="submit">Sign in</Button>
        <Button
          type="button"
          color="light"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

export default UserLoginForm
