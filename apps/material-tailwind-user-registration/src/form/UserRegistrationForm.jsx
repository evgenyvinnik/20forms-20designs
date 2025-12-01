import { Input, Checkbox, Button, Typography } from '@material-tailwind/react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Full name
        </Typography>
        <Input
          id="material-tailwind-user-registration-fullname"
          name="fullName"
          type="text"
          required
          placeholder="Enter your full name"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Email address
        </Typography>
        <Input
          id="material-tailwind-user-registration-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Username
        </Typography>
        <Input
          id="material-tailwind-user-registration-username"
          name="username"
          type="text"
          required
          minLength={3}
          placeholder="Choose a username"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Password
        </Typography>
        <Input
          id="material-tailwind-user-registration-password"
          name="password"
          type="password"
          required
          minLength={8}
          placeholder="Create a password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Confirm password
        </Typography>
        <Input
          id="material-tailwind-user-registration-confirm-password"
          name="confirmPassword"
          type="password"
          required
          minLength={8}
          placeholder="Confirm your password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <Checkbox
        name="terms"
        required
        label={
          <Typography variant="small" color="gray" className="font-normal dark:text-gray-300">
            I agree to the terms and conditions
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button type="submit" color="blue">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
