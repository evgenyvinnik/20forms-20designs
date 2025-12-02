import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Password Change</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-password-change-current"
              value="Current password"
            />
          </div>
          <TextInput
            id="flowbite-password-change-current"
            name="currentPassword"
            type="password"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-password-change-new"
              value="New password"
            />
          </div>
          <TextInput
            id="flowbite-password-change-new"
            name="newPassword"
            type="password"
            minLength={8}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-password-change-confirm"
              value="Confirm new password"
            />
          </div>
          <TextInput
            id="flowbite-password-change-confirm"
            name="confirmPassword"
            type="password"
            minLength={8}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="flowbite-password-change-logout" name="logoutOthers" />
          <Label htmlFor="flowbite-password-change-logout">
            Sign out of other devices
          </Label>
        </div>
        <Button type="submit">Update password</Button>
      </form>
    </Card>
  )
}

export default PasswordChangeForm
