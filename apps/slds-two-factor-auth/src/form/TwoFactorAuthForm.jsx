import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Button from '@salesforce/design-system-react/components/button'

function TwoFactorAuthForm({ theme }) {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification code submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="slds-m-bottom_medium" style={{ color: theme === 'dark' ? '#fff' : '#16325c' }}>
        Enter the code from your authenticator app or SMS.
      </p>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-2fa-code"
          label="Verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
          pattern="\d{6}"
          inputMode="numeric"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Input
          id="slds-2fa-backup"
          label="Backup code (optional)"
          value={backupCode}
          onChange={(e) => setBackupCode(e.target.value)}
          pattern="[A-Za-z0-9]{6,12}"
        />
      </div>

      <div className="slds-form-element">
        <Button
          type="submit"
          variant="brand"
          label="Verify"
        />
        <Button
          type="button"
          variant="neutral"
          label="Resend code"
          onClick={() => alert('Code resent!')}
          className="slds-m-left_x-small"
        />
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
