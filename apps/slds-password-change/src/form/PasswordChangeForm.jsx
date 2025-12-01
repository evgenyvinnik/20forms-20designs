import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

function PasswordChangeForm({ theme }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [logoutOthers, setLogoutOthers] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert('Password updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-password-change-current"
          type="password"
          label="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-password-change-new"
          type="password"
          label="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          minLength={8}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-password-change-confirm"
          type="password"
          label="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength={8}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-password-change-logout"
          labels={{ label: 'Sign out of other devices' }}
          checked={logoutOthers}
          onChange={() => setLogoutOthers(!logoutOthers)}
        />
      </div>

      <div className="slds-form-element">
        <Button
          type="submit"
          variant="brand"
          label="Update password"
        />
      </div>
    </form>
  )
}

export default PasswordChangeForm
