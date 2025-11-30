import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <p style={{ marginBottom: '1rem' }}>
        Enter the code from your authenticator app or SMS.
      </p>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-two-factor-code"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Verification code
        </label>
        <InputText
          id="primereact-two-factor-code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          keyfilter="int"
          maxLength={6}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-two-factor-backup"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Backup code (optional)
        </label>
        <InputText
          id="primereact-two-factor-backup"
          name="backupCode"
          value={backupCode}
          onChange={(e) => setBackupCode(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button type="submit" label="Verify" />
        <Button
          type="button"
          label="Resend code"
          severity="secondary"
          onClick={() => alert('A new code has been sent!')}
        />
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
