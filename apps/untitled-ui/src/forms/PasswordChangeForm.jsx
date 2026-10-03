import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Current password"
        name="currentPassword"
        type="password"
        isRequired
      />
      <Input
        label="New password"
        name="newPassword"
        type="password"
        minLength={8}
        isRequired
      />
      <Input
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        minLength={8}
        isRequired
      />
      <Checkbox label="Sign out of other devices" name="logoutOthers" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Update password
        </Button>
      </div>
    </Form>
  )
}

export default PasswordChangeForm
