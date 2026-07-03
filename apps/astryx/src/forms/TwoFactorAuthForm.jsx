import { useState } from 'react'
import { TextInput, Button, Text } from '@astryxdesign/core'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Text variant="body">
        Enter the code from your authenticator app or SMS.
      </Text>

      <TextInput
        id="astryx-two-factor-code"
        name="code"
        type="text"
        label="Verification code"
        inputMode="numeric"
        pattern="\d{6}"
        maxLength={6}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />

      <TextInput
        id="astryx-two-factor-backup"
        name="backupCode"
        type="text"
        label="Backup code (optional)"
        pattern="[A-Za-z0-9]{6,12}"
        value={backupCode}
        onChange={(e) => setBackupCode(e.target.value)}
      />

      <Button type="submit" variant="primary">
        Verify
      </Button>

      <Button
        type="button"
        variant="secondary"
        onClick={() => alert('A new code has been sent!')}
      >
        Resend code
      </Button>
    </form>
  )
}

export default TwoFactorAuthForm
