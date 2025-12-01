import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldPassword,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

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
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Current password">
        <EuiFieldPassword
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="New password">
        <EuiFieldPassword
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Confirm new password">
        <EuiFieldPassword
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="logoutOthers"
          label="Sign out of other devices"
          checked={logoutOthers}
          onChange={(e) => setLogoutOthers(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Update password
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default PasswordChangeForm
