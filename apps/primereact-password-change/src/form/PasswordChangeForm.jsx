import { useState } from 'react'
import { Password } from 'primereact/password'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

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
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-password-change-current"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Current password
        </label>
        <Password
          id="primereact-password-change-current"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          feedback={false}
          toggleMask
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-password-change-new"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          New password
        </label>
        <Password
          id="primereact-password-change-new"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          toggleMask
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-password-change-confirm"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Confirm new password
        </label>
        <Password
          id="primereact-password-change-confirm"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          feedback={false}
          toggleMask
          required
        />
      </div>
      <div
        className="field-checkbox"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-password-change-logout"
          name="logoutOthers"
          checked={logoutOthers}
          onChange={(e) => setLogoutOthers(e.checked)}
        />
        <label htmlFor="primereact-password-change-logout">
          Sign out of other devices
        </label>
      </div>
      <Button type="submit" label="Update password" />
    </form>
  )
}

export default PasswordChangeForm
