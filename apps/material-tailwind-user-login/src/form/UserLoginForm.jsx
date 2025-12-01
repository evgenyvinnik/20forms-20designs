import { Input, Checkbox, Button, Typography } from '@material-tailwind/react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Email or username
        </Typography>
        <Input
          id="material-tailwind-user-login-email"
          name="identifier"
          type="text"
          required
          placeholder="Enter your email or username"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{
            className: "hidden",
          }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Password
        </Typography>
        <Input
          id="material-tailwind-user-login-password"
          name="password"
          type="password"
          required
          placeholder="Enter your password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{
            className: "hidden",
          }}
        />
      </div>
      <Checkbox
        name="remember"
        label={
          <Typography variant="small" color="gray" className="font-normal dark:text-gray-300">
            Keep me signed in
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <div className="flex gap-2">
        <Button type="submit" color="blue">
          Sign in
        </Button>
        <Button
          type="button"
          variant="text"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

export default UserLoginForm
