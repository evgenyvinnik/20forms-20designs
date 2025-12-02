import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [logoutOthers, setLogoutOthers] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale200">
        <FormControl label="Current password">
          <Input
            id="baseweb-password-change-current"
            name="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="New password">
          <Input
            id="baseweb-password-change-new"
            name="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Confirm new password">
          <Input
            id="baseweb-password-change-confirm"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormControl>
        <Checkbox
          checked={logoutOthers}
          onChange={(e) => setLogoutOthers(e.target.checked)}
        >
          Sign out of other devices
        </Checkbox>
        <Button type="submit">Update password</Button>
      </Block>
    </form>
  )
}

export default PasswordChangeForm
