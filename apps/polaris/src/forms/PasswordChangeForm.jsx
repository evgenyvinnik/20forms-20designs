import { useState, useCallback } from 'react'
import { FormLayout, TextField, Checkbox, Button } from '@shopify/polaris'

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [logoutOthers, setLogoutOthers] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password change requested!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Current password"
          type="password"
          value={currentPassword}
          onChange={setCurrentPassword}
          autoComplete="current-password"
          requiredIndicator
        />
        <TextField
          label="New password"
          type="password"
          value={newPassword}
          onChange={setNewPassword}
          autoComplete="new-password"
          minLength={8}
          requiredIndicator
        />
        <TextField
          label="Confirm new password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          autoComplete="new-password"
          minLength={8}
          requiredIndicator
        />
        <Checkbox
          label="Sign out of other devices"
          checked={logoutOthers}
          onChange={setLogoutOthers}
        />
        <Button submit variant="primary">
          Update password
        </Button>
      </FormLayout>
    </form>
  )
}

export default PasswordChangeForm
