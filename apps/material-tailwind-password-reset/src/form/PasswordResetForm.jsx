import { Input, Button, Typography } from '@material-tailwind/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Typography variant="paragraph" color="gray" className="dark:text-gray-300">
        Request a password reset link via email.
      </Typography>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Email address
        </Typography>
        <Input
          id="material-tailwind-password-reset-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <Button type="submit" color="blue">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
