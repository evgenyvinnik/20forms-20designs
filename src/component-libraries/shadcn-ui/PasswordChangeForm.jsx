import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-password-change-current">Current password</Label>
        <Input id="shadcn-password-change-current" name="currentPassword" type="password" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-password-change-new">New password</Label>
        <Input
          id="shadcn-password-change-new"
          name="newPassword"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-password-change-confirm">Confirm new password</Label>
        <Input
          id="shadcn-password-change-confirm"
          name="confirmPassword"
          type="password"
          minLength="8"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="logoutOthers" />
        <Label htmlFor="logoutOthers" className="font-normal">Sign out of other devices</Label>
      </div>
      <Button type="submit">Update password</Button>
    </form>
  )
}

export default PasswordChangeForm
