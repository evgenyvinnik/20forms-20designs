import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">User Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-user-login-email"
              value="Email or username"
            />
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
            <Label htmlFor="flowbite-user-login-password" value="Password" />
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
          <Label htmlFor="flowbite-user-login-remember">
            Keep me signed in
          </Label>
        </div>
        <Button type="submit">Sign in</Button>
        <Button
          type="button"
          color="light"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </form>
    </Card>
  )
}

export default UserLoginForm
