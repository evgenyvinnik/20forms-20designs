import { useState, useCallback } from 'react'
import { FormLayout, TextField, Button } from '@shopify/polaris'

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password changed successfully!')
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
          requiredIndicator
        />
        <TextField
          label="Confirm new password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          autoComplete="new-password"
          requiredIndicator
        />
        <Button submit variant="primary">
          Change password
        </Button>
      </FormLayout>
    </form>
  )
}

export default PasswordChangeForm
