import { Button, Checkbox, Input } from '@cloudflare/kumo'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input
        label="Current password"
        name="currentPassword"
        type="password"
        required
      />
      <Input
        label="New password"
        name="newPassword"
        type="password"
        minLength={8}
        required
      />
      <Input
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        minLength={8}
        required
      />
      <Checkbox label="Sign out of other devices" name="logoutOthers" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Update password
        </Button>
      </div>
    </form>
  )
}

export default PasswordChangeForm
