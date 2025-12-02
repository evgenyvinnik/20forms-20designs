import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  PasswordField,
  Checkbox,
  Button,
} from 'braid-design-system'

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
      <Stack space="medium">
        <PasswordField
          id="braid-password-change-current"
          label="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />

        <PasswordField
          id="braid-password-change-new"
          label="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <PasswordField
          id="braid-password-change-confirm"
          label="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Checkbox
          id="braid-password-change-logout"
          checked={logoutOthers}
          onChange={(e) => setLogoutOthers(e.target.checked)}
        >
          Sign out of other devices
        </Checkbox>

        <Box>
          <Button type="submit">Update password</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default PasswordChangeForm
