import { Input, Checkbox, Button, Typography } from '@material-tailwind/react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password changed!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Current password
        </Typography>
        <Input
          id="material-tailwind-password-change-current"
          name="currentPassword"
          type="password"
          required
          placeholder="Enter current password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          New password
        </Typography>
        <Input
          id="material-tailwind-password-change-new"
          name="newPassword"
          type="password"
          required
          minLength={8}
          placeholder="Enter new password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Confirm new password
        </Typography>
        <Input
          id="material-tailwind-password-change-confirm"
          name="confirmPassword"
          type="password"
          required
          minLength={8}
          placeholder="Confirm new password"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <Checkbox
        name="logoutOthers"
        label={
          <Typography variant="small" color="gray" className="font-normal dark:text-gray-300">
            Sign out of other devices
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button type="submit" color="blue">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
