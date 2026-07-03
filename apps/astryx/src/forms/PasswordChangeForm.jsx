import { useState } from 'react'
import { TextInput, CheckboxInput, Button } from '@astryxdesign/core'

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
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-password-change-current"
        name="currentPassword"
        type="password"
        label="Current password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        required
      />

      <TextInput
        id="astryx-password-change-new"
        name="newPassword"
        type="password"
        label="New password"
        minLength={8}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <TextInput
        id="astryx-password-change-confirm"
        name="confirmPassword"
        type="password"
        label="Confirm new password"
        minLength={8}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <CheckboxInput
        name="logoutOthers"
        label="Sign out of other devices"
        checked={logoutOthers}
        onChange={(e) => setLogoutOthers(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Update password
      </Button>
    </form>
  )
}

export default PasswordChangeForm
